---
layout: post-index
permalink: /downloads/research/rl/
title: Multi-agent reinforcement learning
tagline: rl
tags: [rl]
comments: false
---


<b>Reinforcement Learning Under a Multi-agent Predictive State Representation Model: Method and Theory.</b>  [link](https://openreview.net/forum?id=PLDOnFoVm4) 
<b>Zhi Zhang</b>, Zhuoyan Yang, Han Liu, Furong Huang.  
*ICLR2022 Spotlight*.

<b>Integrating Independent and Centralized Multi-agent Reinforcement Learning for Traffic Signal Network Optimization.</b>  [arXiv](https://arxiv.org/abs/1909.10651), [code](/downloads/code/multi-agents-trafficlights.zip)
<b>Zhi Zhang</b>, Jiachen Yang, Hongyuan Zha.  
*AAMAS 2020 Extended Abstract*. 





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

