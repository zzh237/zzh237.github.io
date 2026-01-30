---
layout: page
permalink: /publications/
title: publications
description: 
years: [2026,2025,2024,2023]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

<p>Please see <a href="https://scholar.google.com/citations?user=6hu7hXkAAAAJ&hl=en">Google Scholar</a> for more recent works and arXiv papers. </p>

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
