---
layout: code_layout
permalink: /downloads/readings/matrix_multiplication/FLOPs/
title: FLOPs
tagline: FLOPs
tags: [FLOPs]
comments: false
---


Floating-point operations (FLOPs) are calculations involving floating-point numbers, which are numbers that can have a fractional part. These operations are common in scientific, engineering, and graphics computations. They are different from integer operations, which involve only whole numbers.

### How FLOPs are Calculated

1.  Single Operation: A floating-point operation can be a mathematical action like addition, subtraction, multiplication, or division. For example, if a computer performs one million floating-point multiplications in one second, it is performing one million FLOPs.

2.  Fused Multiply-Add (FMA): A special case is the FMA operation, which combines multiplication and addition in a single step. It's counted as two floating-point operations even though it's executed as one instruction for efficiency.

### Understanding 30 TFLOPs/s

-   TFLOPs/s: TeraFLOPs per second (TFLOPs/s) means trillions of floating-point operations per second. So, 30 TFLOPs/s means the GPU can theoretically perform 30 trillion floating-point operations per second.

-   FP32: FP32 refers to 32-bit floating-point numbers. It's a way of specifying the precision of the floating-point computations. Each FP32 floating-point number uses 32 bits of memory.

-   How It's Calculated: The 30 TFLOPs/s value is likely calculated based on the theoretical maximum performance of the GPU. For instance, if a GPU has a certain number of cores, each capable of performing a certain number of FMA operations per clock cycle, you would multiply the number of cores by the number of operations per core per cycle and then by the clock speed (in cycles per second) to get FLOPs/s. If this reaches 30 trillion, you have 30 TFLOPs/s.

### Global Memory Bandwidth

-   768GB/s: This is a measure of how much data can be transferred to and from the GPU's global memory per second. A bandwidth of 768GB/s means the GPU can read or write 768 gigabytes of data per second.





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

