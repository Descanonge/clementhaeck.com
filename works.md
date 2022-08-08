---
layout: default
title: works
toc: true
namespace: works
permalink: /works/
---
{% translate_file works.md %}

{%- for project-hash in site.data.projects -%}
  {%- assign name = project-hash[0] -%}
  {%- assign project = project-hash[1] -%}
  <h3 id="{{ name }}">{{ project.name }}</h3>
  {%- for link in project.links -%}
     <a href="{{ link.url }}" title="{{ project.name }}"><i class="{{ link.type }}"></i></a>&nbsp;
  {%- endfor -%}
  {{ site.data[site.lang].projects[name] }}
  
{% endfor -%}
