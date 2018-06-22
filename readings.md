---
layout: post-index
permalink: /readings/
title: Readings
tagline: A List of Reading Posts
tags: [readings]
comments: false
---

#### Books
- Pattern Recognition and Machine Learning[pdf]({{ site.url }}/downloads/readings/books/ML Pattern Recognition and Machine Learning.pdf)
- Machine Learning-A Probabilistic Perspective[pdf]({{ site.url }}/downloads/readings/books/1510.09171.pdf)
- Probabilistic Graphical Models[pdf]({{ site.url }}/downloads/readings/books/1510.09171.pdf)
- [pdf]({{ site.url }}/downloads/readings/books/1510.09171.pdf)
- Reinforcement Learning: An Introduction[pdf]({{ site.url }}/downloads/readings/books/1510.09171.pdf)
- Introduction to Algorithms[pdf]({{ site.url }}/downloads/readings/books/1510.09171.pdf)
- Artificial Intelligence A Modern Approach[pdf]({{ site.url }}/downloads/readings/books/1510.09171.pdf)
- Computer Vision A Modern Approach[pdf]({{ site.url }}/downloads/readings/books/1510.09171.pdf)


<br />

{% for post in site.categories.reading %}

  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != year_previous %}
  <h2>{{ post.date | date: '%Y' }}</h2>
  {% endif %}
  {% capture year_previous %}{{ post.date | date: '%Y' }}{% endcapture %}

  <h3><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h3>
  <p><i><small>Posted: {{ post.date | date: "%B %-d, %Y"}} Updated: {{ post.modified | date: "%B %-d, %Y"}}</small></i></p>
  {% if post.image.teaser %}
  <figure>
    <a href="{{ site.url }}{{ post.url }}"><img src="{{ site.url }}{{ post.image.teaser }}"></a>
  </figure>
  {% endif %}
  <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>

{% endfor %}