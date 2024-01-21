---
layout: post-index
permalink: /downloads/research/opt/
title: Optimization with optimal control
tagline: opt
tags: [opt]
comments: false
---


**Classification of Phonocardiogram Signals Based on Envelope Optimization Model and Support Vector Machine.**  
Lijun Yang, Shuang Lia, **Zhi Zhang**, Xiaohui Yang.  
*Biomedical Signal Processing and Control, April 2019.* [pdf](https://www.researchgate.net/profile/Lijun-Yang-15/publication/338116487_Classification_of_Phonocardiogram_Signals_Based_on_Envelope_Optimization_Model_and_Support_Vector_Machine/links/5e00517c92851c836493bfa9/Classification-of-Phonocardiogram-Signals-Based-on-Envelope-Optimization-Model-and-Support-Vector-Machine.pdf)  

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

