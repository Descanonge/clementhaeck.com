---
title: Reducing my email footprint
type: posts
date: 2025-08-26
tags: ['email', 'footprint', 'workflow']
---

Over the last years, part of trying to reduce my overall carbon footprint has been to take care of my email.
I won't go into the details of the carbon footprint of email. Let us simply know that:
* your emails are hosted onto a server, which --- similarly to a cloud service --- has a carbon footprint,
* if you have a client (like Thunderbird) it is very probably setup with the IMAP protocol, so you have a local *synchronized* copy of the emails on that server.

The goal is simple: I want to have as little email as possible hosted on a server. I want to retrieve and archive a local copy on my computer. You could export emails from a webmail client, and Thunderbird has an "archive" feature which is close to what I want but they suffer two issues:
* this is not automatic: I would have to manually export or archive (ugh)
* archived emails are not easily accessible / searchable

Let me invite you into a scandalously over-engineered solution, with probably limited benefits, mainly because it is fun.

# Software used

Rather than try to extend Thunderbird (there are plugins that deal with auto archiving for instance), I opted for [Notmuch](https://notmuchmail.org/). It creates a database of your emails with pretty awesome search features. I use it with Emacs, but it can also be used with Vim, and there are some [graphical frontends](https://notmuchmail.org/frontends/) available as well. Importantly for us here, it can be very easily scripted.

I also use [afew](https://github.com/afewmail/afew) to tag incoming emails, [mbsync](https://linux.die.net/man/1/mbsync) to synchronize emails, and msmtp to send emails (still via Emacs).

# Workflow

All emails arrive in the inbox, which I try to keep as empty as possible. They are automatically tagged with afew, but I rarely use tags to find emails so I don't trouble myself too much to refine them manually.
Once read I can take several actions:
* do nothing: the email stays in the inbox which indicates that some action must still be taken. Ideally you may rather want to add that action to a TODO list or something, but well 🤷
* delete it: the email is rubbish and can go directly into the trash. It won't show up in my searches and will be gone when the trash is emptied
* mark it as *temporary*: it will be gone from the inbox, will still show up in searches, but will be transferred to the trash after a delay of 3 months. A lot of my emails are useful but I know I won't want to keep them long term. This saves me the trouble to clean up later.
* remove from inbox: unless further action that email will be kept forever.

After a delay of 6 months upon reception, emails that are not in the inbox or not flagged are archived: they are copied into a local folder on my computer and removed from the server.
That archive folder is still managed by notmuch, so this makes not difference: it will still show up on my searches as if nothing happened.
Of course the delay of 6 months is quite arbitrary. It could be shorter but it can be useful to have access to recent emails from another client (my phone for instance).

{{< figure
    src="mail_setup.svg"
    alt="graph of setup"
    caption="Setup of things on the left, and workflow on the right"
    class="work-illustration"
>}}


# Making it work

Deleted emails are tagged with `deleted` and temporary emails with `temp`.
There is a single synchronized folder named *locean*, saved yearly in the *archive* folder. This works with more than one folder, for multiple accounts for instance.

```goat {height=170}
mail
 ├─.notmuch
 │  └─hooks
 │     └─post-new
 ├─locean
 └─archive
    ├─2024
    │  └─locean
    └─2025
       └─locean
```

## Post-new script
Everything hinges on the post-new script of notmuch. It is automatically launched when I refresh my inbox on Emacs. Here is a detailed description. You may notice that I only run and log some operations if there is something to do, this is obviously optional.

First I define some variables:
``` bash
#!/bin/bash

set -eu

temp_time="3months"
archive_time="6months"
delete_time="1months"
```

I tag the new messages with afew, I won't detail it since it has no incidence on our workflow:
``` bash
afew_exe="$MAMBA_ROOT_PREFIX/envs/default/bin/afew"

count="$(notmuch count tag:new)"
if [[ $count -gt 0 ]]; then
    echo "Tag new messages ($count)"
    $afew_exe -tn
fi

# Remove unread tag when out of inbox
notmuch tag -unread not tag:inbox
```

I make sure the email in the trash folder is tagged as 'deleted.'
``` bash
search="folder:locean/Trash"
count="$(notmuch count "$search")"
if [[ $count -gt 0 ]]; then
    echo "Mark messages in trash as deleted ($count)"
    notmuch tag +deleted -temp "$search"
fi
```

The temporary messages that are past their bedtime are marked as deleted:
``` bash
search="(tag:temp or tag:spam) and date:..${temp_time}"
count="$(notmuch count --exclude=false "$search")"
if [[ $count -gt 0 ]]; then
    echo "Mark older temp messages for deletion ($count)"
    notmuch tag +deleted -temp -spam "$search"
fi
```

I use afew to move the deleted message into the trash folder.
If the server does not automatically empty the trash we can do this ourselves as well:
``` bash
search="locean/Trash/.*"
count="$(notmuch count --exclude=false tag:deleted and not path:"/$search/")"
if [[ $count -gt 0 ]]; then
    echo "Put deleted messages in trash ($count)"
    $afew_exe -m -T 999 --notmuch-args="--no-hooks" tag:deleted
fi

search="tag:deleted and date:..${delete_time}"
count="$(notmuch count --exclude=false "$search")"
if [[ count -gt 0 ]]; then
    echo "Delete messages ($count)"
    notmuch search --exclude=false --format=text0 --output=files "$search" \
        | xargs -0 --no-run-if-empty rm
fi
```

Finally I archive the older messages. If the variable `dry` is set to one, this will only show the commands that should run, to verify that everything is going according to plan.
The code will reproduce the folder structure into the archive.
``` bash
IFS=$'\n'
ids=($(notmuch search --exclude=false --output=messages \
    not tag:inbox and not tag:flagged \
    and "date:..${archive_time}" and not path:'archives/**'))
unset IFS
dry=1

count="${#ids[@]}"
if [[ $count -gt 0 ]]; then
    echo "Archive older message [dry=${dry}] ($count)"

    for id in "${ids[@]}"; do
        f="$(notmuch search --exclude=false --output=files "$id")"
        f_rel="$(realpath --relative-to "$MAILDIR" "$f")"
        year="$(date -d "$(notmuch show --format=text --body=false "$id" \
            | sed -n 's/^Date: //p')" +%Y)"
        target_base="$(basename "$f")"
        target_dir="$MAILDIR/archives/$year/$(dirname "$f_rel")"
        target_file="$target_dir/$target_base"

        if [ ! -d "$target_dir" ]; then
            echo "Creating target directory $target_dir"
            mkdir -p "$target_dir"
        fi

        if [ -f "$target_file" ]; then
            echo "File already exist $target_file"
        else
            if [ "$dry" == 0 ]; then
                mv "$f" "$target_file"
            else
                echo "mv $f $target_file"
            fi
        fi

    done
fi
```

I wrap-up by updating the database (as some files may have been moved or deleted) and by printing the size of the synchronized folder for funsies:
``` bash
notmuch new --no-hooks --quiet

footprint=$(notmuch search --exclude=false --output=files --format=text0 \
    not path:'archives/**' \
    | xargs -0 du -hc | tail -1 | cut -f1)
echo "Current footprint: ${footprint}"
```

## Emacs shortcuts

To make things easier when dealing with new emails, I defined some shortcuts to quickly mark emails as temporary or deleted, similarly as to how "a" will toggle mail in and out the inbox with `notmuch-search-archive-thread`.
``` elisp
  (defun evil-collection-notmuch-show-toggle-temp () (interactive)
         (notmuch-show-tag '("-inbox"))
         (evil-collection-notmuch-toggle-tag "temp" "show"))
  (defun evil-collection-notmuch-tree-toggle-temp () (interactive)
         (notmuch-tree-tag '("-inbox"))
         (evil-collection-notmuch-toggle-tag "temp" "tree"))
  (defun evil-collection-notmuch-search-toggle-temp () (interactive)
         (notmuch-search-tag '("-inbox"))
         (evil-collection-notmuch-toggle-tag "temp" "search" 'notmuch-search-next-thread))

  (after! evil-collection
    :config
    (evil-collection-define-key 'normal 'notmuch-show-mode-map
      "d" #'evil-collection-notmuch-show-toggle-temp
      "D" #'evil-collection-notmuch-show-toggle-delete)
    (evil-collection-define-key 'normal 'notmuch-tree-mode-map
      "d" #'evil-collection-notmuch-tree-toggle-temp
      "D" #'evil-collection-notmuch-tree-toggle-delete)
    (dolist (state '(normal visual))
      (evil-collection-define-key state 'notmuch-search-mode-map
        "d" #'evil-collection-notmuch-search-toggle-temp
        "D" #'evil-collection-notmuch-search-toggle-delete)))
```
