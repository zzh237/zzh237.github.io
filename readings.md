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
- Machine Learning-A Probabilistic Perspective[pdf]({{ site.url }}/downloads/readings/books/ML Machine Learning-A Probabilistic Perspective.pdf)
- The Elements of Statistical Learning[pdf]({{ site.url }}/downloads/readings/books/ESLII.pdf)
- Probabilistic Graphical Models[pdf]({{ site.url }}/downloads/readings/books/ML Probabilistic Graphical Models.pdf)
- Convex Optimization[pdf]({{ site.url }}/downloads/readings/books/bv_cvxbook.pdf)
- Reinforcement Learning: An Introduction[pdf]({{ site.url }}/downloads/readings/books/bookdraft2017nov5.pdf)
- Introduction to Algorithms[pdf]({{ site.url }}/downloads/readings/books/introduction to Algorithms.pdf)
- Artificial Intelligence A Modern Approach[pdf]({{ site.url }}/downloads/readings/books/Artificial Intelligence A Modern Approach 3rd.pdf)
- Computer Vision A Modern Approach[pdf]({{ site.url }}/downloads/readings/books/Computer Vision A Modern Approach - Forsyth , Ponce.pdf)


#### Course Resources
- <a href ="http://www.cs.cmu.edu/~tom/10701_sp11/lectures.shtml">Tom Mitchell's Machine Learning</a>
- <a href ="http://www.cs.cmu.edu/~epxing/Class/10708-14/lecture.html">Carnegie Mellon's Probabilistic Graphical Models</a>
- <a href ="http://alex.smola.org/teaching/10-701-15/neural.html">Carnegie Mellon's Deep Learning</a>
- <a href ="http://www.cs.cmu.edu/~suvrit/teach/aopt.html">Carnegie Mellon's Optimization</a>

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