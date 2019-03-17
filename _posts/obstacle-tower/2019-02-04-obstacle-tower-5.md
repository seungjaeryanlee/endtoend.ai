---
layout: post
title: "Obstacle Tower 5: Possible Improvements to the Baselines"
author: Seungjae Ryan Lee
permalink: /obstacle-tower/5
tags:
 - reinforcement-learning
 - obstacle-tower
 - competition

image: /assets/blog/obstacle-tower/5/front.png
front_image_type: cover
front_image_align: right
excerpt: >
    We play the Obstacle Tower game to understand the qualities of a successful agent.

nav:
- name: "Hierarchy"
  permalink: '#hierarchy'
- name: "- FuN"
  permalink: '#fun'
- name: "- HIRO"
  permalink: '#hiro'
- name: "Intrinsic Motivation"
  permalink: '#intrinsic-motivation'
- name: "- ICM"
  permalink: '#icm'
- name: "- RND"
  permalink: '#rnd'
- name: "- CTS"
  permalink: '#cts'
- name: "- PixelCNN"
  permalink: '#pixelcnn'
- name: "- Empowerment"
  permalink: '#empowerment'
- name: "Meta-Learning"
  permalink: '#meta-learning'
- name: "- MAML"
  permalink: '#maml'
- name: "- RL^2"
  permalink: '#rl2'
- name: "Model Learning"
  permalink: '#model-learning'
- name: "- I2A"
  permalink: '#i2a'
- name: "- World Model"
  permalink: '#world-model'
---

<style type="text/css">
   h3 {
      margin-bottom: 0 !important;
   }
   h3 + p {
      color: darkgray !important;
   }
   h3, h3 + p {
      display: inline-block !important;
   }
</style>

**NOTE. This stub post is for my lab teammates. It will be populated after posts 3 and 4 is published.**

The Unity team used Rainbow and PPO agents to test their environments. Although they did not perform any hyperparameter tuning, the team made it clear that neither vanilla Rainbow nor vanilla PPO can solve the 25-floor environment.

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/5/rnb_ppo.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

Fortunately, they also listed some possible methods that have high potential to improve the score. In this post, you will understand the central idea of each of these methods.

## Hierarchy

### FuN

FeUdal Networks for Hierarchical Reinforcement Learning

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1703.01161">
arXiv
</a>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/5/fun.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

### HIRO

Data-Efficient Hierarchical Reinforcement Learning

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1805.08296">
arXiv
</a>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/5/hiro.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

## Intrinsic Motivation

We did not include [Brute]() by Machado et al. and [Go-Explore]() by Ecoffet et al., as they need to exploit determinism of the training environment.

### ICM


Curiosity-driven Exploration by Self-supervised Prediction

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1705.05363">
arXiv
</a>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/5/icm.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

### RND

Exploration by Random Network Distillation

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1810.12894">
arXiv
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/slowpapers/exploration-by-random-network-distillation/">
Slow Paper
</a>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--8-col mdl-cell--8-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/5/rnd.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

### CTS

Unifying Count-Based Exploration and Intrinsic Motivation

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1606.01868">
arXiv
</a>

### PixelCNN

Count-Based Exploration with Neural Density Models

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1703.01310">
arXiv
</a>

### Empowerment

Variational Information Maximisation for Intrinsically Motivated Reinforcement Learning

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1509.08731">
arXiv
</a>

## Meta-Learning

### MAML

Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1703.03400">
arXiv
</a>

### RL^2

Fast Reinforcement Learning via Slow Reinforcement Learning

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1611.02779">
arXiv
</a>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/5/rl^2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

## Model Learning

### I2A

Imagination-Augmented Agents for Deep Reinforcement Learning

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1707.06203">
arXiv
</a>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/5/i2a.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

### World Model

World Models

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1803.10122">
arXiv
</a>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/5/world_model.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

## What's Next?
