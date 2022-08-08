---
layout:
permalink: /sitemap.xml
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  {%- for page in site.data[site.languages_default].navigation -%}
    {%- assign url = site.base-url | append: page[1].url %}
    <url>
      <loc>{{ url }}</loc>
        {%- for lang in site.languages -%}
          {%- assign name = page[0] -%}
          {%- assign url = site.base-url | append: site.data[lang].navigation[name].url %}
          <xhtml:link rel="alternate" hreflang="{{ lang }}" href="{{ url }}" />
        {%- endfor %}
    </url>
  {%- endfor %}
</urlset>
