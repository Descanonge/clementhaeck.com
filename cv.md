---
layout: default
title: cv
toc: true
namespace: cv
permalink: /cv/
---

{% assign collid = 1 %}
{% for cat in site.data[site.lang].cv %}
  <h2 id="{{ cat.name | slugify }}">{{ cat.name }}</h2>
  {% for item in cat.items %}
  <ul>
    <li>
      {%- if item.url -%}
        <span><a href="{{ item.url }}" class="cv-link"><strong>{{ item.title }}</strong></a></span>
      {%- else -%}
        <span><strong>{{ item.title }}</strong></span>
      {% endif %}
      {%- if item.date %}
        <span class="cv-date">&ensp;{{ item.date }}</span>
      {% endif -%}
      {%- if item.location -%}
        <p><em>{{ item.location }}</em></p>
      {% endif -%}
      {%- if item.description -%}
      {%- assign collid = collid | plus: 1 -%}
      <div class="tab">
          <input type="checkbox" id="chk{{ collid }}">
          <label class="tab-label" for="chk{{ collid }}"></label>
          <div class="tab-content">
            {{ item.description }}
          </div>
      </div>
      {% endif -%}
    </li>
  </ul>
  {% endfor %}
{% endfor %}
