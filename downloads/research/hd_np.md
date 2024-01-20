---
layout: post-index
permalink: /downloads/research/hd_np/
title: High-dimensional nonparametric data analysis
tagline: hd_np
tags: [hd_np]
comments: false
---


<b>Risk Bounds for Quantile Additive Trend Filtering.</b> [link](https://arxiv.org/pdf/2310.11711.pdf)  
<b>Zhi Zhang</b>, Kyle Ritscher, Oscar Madrid Padilla.  
*In Submission*. 





{% for post in site.categories.miscellaneous %}
<!--
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != year_previous %}
  <h2>{{ post.date | date: '%Y' }}</h2>
  {% endif %}
  {% capture year_previous %}{{ post.date | date: '%Y' }}{% endcapture %}
-->
  <h3><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h3>
  <p><i><small>Posted: {{ post.date | date: "%B %-d, %Y"}} Updated: {{ post.modified | date: "%B %-d, %Y"}}</small></i></p>
  {% if post.image.teaser %}
  <figure>
    <a href="{{ site.url }}{{ post.url }}"><img src="{{ site.url }}{{ post.image.teaser }}"></a>
  </figure>
  {% endif %}
  <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>

{% endfor %}

