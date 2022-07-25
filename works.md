---
layout: default
title: Works
---


<div class="works">
  <h2>Publications</h2>
  While I finish writing my first Nature article, here some of my bibliography
  to test if my CSS is working.

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

  <h2>Projects</h2>
  Here are some projects that I hope can be useful to you !

  <div class="projects">
  <ul>
    <li>
      <h3>FileFinder
      <a href="http://github.com/Descanonge/filefinder">
        <img src="/assets/img/github.svg" width="25" title="Github page"></a>
      <a href="http://pypi.org/project/filefinder">
        <img src="/assets/img/language-python.svg" width="25" title="PyPi page"></a>
      </h3>
      Find files using a simple syntax, and much more !
    </li>
    <li>
      <h3>Tol_colors
      <a href="http://github.com/Descanonge/tol_colors">
        <img src="/assets/img/github.svg" width="25" title="Github page"></a>
      <a href="http://pypi.org/project/tol_colors">
        <img src="/assets/img/language-python.svg" width="25" title="PyPi page"></a>
      </h3>
      Color schemes for lines and maps, color-blind safe. They were made by <a href="https://personal.sron.nl/~pault/" title="Paul's website">Paul Tol</a>, I just packaged them for an easier installation.
    </li>
    <li>
      <h3>Dateloop
      <a href="http://github.com/Descanonge/dateloop">
        <img src="/assets/img/github.svg" width="25" title="Github page"></a>
      </h3>
      Little tool to loop between dates in bash.
    </li>
  
  </ul>
  </div>
</div>
