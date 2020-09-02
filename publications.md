---
layout: default
title: Publications
---

<div style="margin: 1% 10%; text-align: center;">
  While I finish writing my first Nature article, here some of my bibliography
  to test if my CSS is working.
</div>

<div class="publications">
  <ul>
    {% for item in site.data.publications %}
      <li>
        <span class="authors">{{ item.authors }}</span>
        <span class="date">({{ item.date }})</span>
        <span class="title">{{ item.title }}</span>
        <span class="journal">{{ item.journal }}</span>
        <a href="{{ item.link }}">{{ item.link-name }}</a>
        {% if item.rest %}
          <span class="rest">{{ item.rest }}</span>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</div>
