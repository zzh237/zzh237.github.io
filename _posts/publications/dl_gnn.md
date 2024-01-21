---
layout: post
title: "Deep graph neural networks"
excerpt: "Deep graph neural networks"
modified: 2018-1-26T14:17:25-04:00
categories: publication
tags: [deep learning, gnn]
comments: true
share: true
---


**Multivariate Time Series Forecasting By Graph Attention Networks With Theoretical Guarantees.**  
**Zhi Zhang**, Weijian Li, Han Liu.  
*AISTATS 2024.*  

<br>





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

