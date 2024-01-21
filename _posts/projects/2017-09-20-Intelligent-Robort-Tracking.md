---
layout: post
title: "Simulated Intelligent Robot Tracking Agent"
excerpt: "Simulated Intelligent Robot Tracking Agent"
modified: 2018-1-26T14:17:25-04:00
category: project
tags: [deep learning, robotics]
comments: true
share: true
image:
  teaser: /images/projects/ai4r/sample_predictions.png
---

### Introduction

Simulated Intelligent Robot Tracking Agent: in course project, I developed a naive intelligent agent to predict the future trajectory of a Nano robot’s dynamic moving position; 
evaluated multiple training algorithms in Bayesian probabilistic model, linear-Gaussian model (Kalman Filters), sequential Monte Carlo simulation (particle filters), 
residual learning model; reduced video data dimensionality by PCA; tuned residual neural network hyperparameters 
and applied bootstrap aggregation with multiple residual neural networks [<a href ="https://github.com/zzh237/cs8803-AI4R">Github</a>][<a href ="https://drive.google.com/open?id=1h349nlaTj-p_aJAxRO1wWl6PvWtd7ose">PDF</a>].

### Results
<!-- 
<figure>
  <img src="/images/projects/ai4r/predictions_cropped.png" alt="The Pulpit Rock" width="304" height="180">  
</figure>
<figure>
<img src="/images/projects/ai4r/sample_predictions.png" alt="The Pulpit Rock" width="304" height="180">
</figure> -->

<div class = "titled-image">
<figure>
    <img src = "{{ site.url }}/images/projects/ai4r/predictions_cropped.png">
</figure>
</div>


<div class = "titled-image">
<figure>
    <img src = "{{ site.url }}/images/projects/ai4r/sample_predictions.png">
</figure>
</div>

