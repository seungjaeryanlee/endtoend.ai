---
layout: revealjs
title: "Fast Papers"
permalink: /fastpapers/

image: /assets/fastpapers/fastpapers.png
image_type: contain
excerpt: "Fast Papers is a slideshow where each slide summarizes one paper with few sentences and some graphics."

theme: simple
---

<style>
.reveal h1 {
  margin-bottom: 0;
}
.fastpapers__source {
  margin: 0 !important;
}
.fastpapers__tags {
  line-height: 0.5;
  margin-bottom: 0.5em;
}
.fastpapers__tags__tag {
  font-size: 12px;
  padding: 3px 5px;
  letter-spacing: 0;
  border-radius: 5px;
  line-height: 0.5;
}
h1 .fastpapers__tags__tag {
  font-family: "Lato", sans-serif;
  font-size: 24px;
  padding: 6px 10px;
  letter-spacing: 0;
  border-radius: 5px;
  line-height: 0.5;
}
.fastpapers__tags .fastpapers__tags__tag--venue {
  background-color: #355C7D;
  color: white !important;
}
.fastpapers__tags .fastpapers__tags__tag--venue:before {
  content: '🏬';
}
.fastpapers__tags .fastpapers__tags__tag--topic {
  background-color: #C06C84;
  color: white !important;
}
.fastpapers__tags .fastpapers__tags__tag--topic:before {
  content: '🔍';
}
</style>





<section class="center" data-markdown><textarea data-template>

<h1 class="title">Fast Papers</h1>


Seungjae Ryan Lee / [endtoendAI](https://www.endtoend.ai)

Each slide summarizes a paper with few sentences and some graphics.

<div class="w60">
  <img style="margin: 0;" src="{{ absolute_url }}/assets/fastpapers/phd092815s.gif" alt="">
  <p style="margin: 0; opacity: 0.5;">"Piled Higher and Deeper" by Jorge Cham www.phdcomics.com</p>
</div>

</textarea></section>





<section id="toc" data-markdown><textarea data-template>

# Table of Contents
1. [Observational Overfitting in Reinforcement Learning](#obs-overfit)
2. [Implementation Matters in Deep RL: A Case Study on PPO and TRPO](#implementation-matters)

</textarea></section>






<section>

  <section id="venues" data-markdown><textarea data-template>

  # Venues

  <ol>
  <li><div class="fastpapers__tags"><a class="fastpapers__tags__tag fastpapers__tags__tag--venue" href="#venue-iclr2020">ICLR2020</a></div></li>
  </ol>

  </textarea></section>



  <section id="venue-iclr2020" data-markdown><textarea data-template>

  <h1><div class="fastpapers__tags"><a class="fastpapers__tags__tag fastpapers__tags__tag--venue" href="#venue-iclr2020">ICLR2020</a></div></h1>

  1. [Observational Overfitting in Reinforcement Learning](#obs-overfit)
  2. [Implementation Matters in Deep RL: A Case Study on PPO and TRPO](#implementation-matters)

  </textarea></section>

</section>





<section>

  <section id="topics" data-markdown><textarea data-template>

  # Topics

  <ol>
  <li><div class="fastpapers__tags"><a class="fastpapers__tags__tag fastpapers__tags__tag--topic" href="#topic-reinforcement-learning">Reinforcement Learning</a></div></li>
  </ol>

  </textarea></section>



  <section id="topic-reinforcement-learning" data-markdown><textarea data-template>

  <h1><div class="fastpapers__tags"><a class="fastpapers__tags__tag fastpapers__tags__tag--topic" href="#topic-reinforcement-learning">Reinforcement Learning</a></div></h1>

  1. [Observational Overfitting in Reinforcement Learning](#obs-overfit)
  2. [Implementation Matters in Deep RL: A Case Study on PPO and TRPO](#implementation-matters)

  </textarea></section>

</section>













<section id="obs-overfit" data-markdown><textarea data-template>

# Observational Overfitting in Reinforcement Learning

<p class="fastpapers__source">
<span class="fastpapers__source__authors">Song et al., 2019</span>
|
<a class="fastpapers__source__link" href="https://arxiv.org/abs/1912.02975">https://arxiv.org/abs/1912.02975</a>
</p>

<div class="fastpapers__tags">
<a class="fastpapers__tags__tag fastpapers__tags__tag--venue" href="#venue-iclr2020">ICLR2020</a>
<a class="fastpapers__tags__tag fastpapers__tags__tag--topic" href="#topic-reinforcement-learning">Reinforcement Learning</a>
</div>

<div class="w60">
  <img src="{{ absolute_url }}/assets/fastpapers/obs-overfit/obs_overfit.png" alt="">
</div>

- Agents can overfit to parts of observation irrelevant to MDP dynamics such as the scoreboard or the background, as they are correlated with progress.
- Observational overfitting hurts agent's generalization.
- Overparametrization can mitigate observational overfitting and improve generalization.

</textarea></section>




<section id="implementation-matters" data-markdown><textarea data-template>

# Implementation Matters in Deep RL: A Case Study on PPO and TRPO

<p class="fastpapers__source">
<span class="fastpapers__source__authors">Engstrom et al., 2019</span>
|
<a class="fastpapers__source__link" href="https://openreview.net/forum?id=r1etN1rtPB">https://openreview.net/forum?id=r1etN1rtPB</a>
</p>

<div class="fastpapers__tags">
<a class="fastpapers__tags__tag fastpapers__tags__tag--venue" href="#venue-iclr2020">ICLR2020</a>
<a class="fastpapers__tags__tag fastpapers__tags__tag--topic" href="#topic-reinforcement-learning">Reinforcement Learning</a>
</div>

<div >
  <img class="w40" src="{{ absolute_url }}/assets/fastpapers/implementation-matters/definition.png" alt="">
  <img class="w50" src="{{ absolute_url }}/assets/fastpapers/implementation-matters/table23.png" alt="">
</div>

- Proximal Policy Optimization (PPO) has a lot of "code-level optimizations" such as value function clipping, reward scaling, orthogonal initialization, layer scaling, and learning rate annealing.
- An ablation study shows that the clipping objective of PPO is not as important as its code-level optimizations. 
  - PPO without clipped objective (PPO-NoClip) achieves similar performance to PPO.
  - TRPO with the "code-level optimizations" (TRPO+) performs better than PPO in 3 of 4 tasks.
- The clipped objective fails to maintain the KL-based trust region of PPO, but it is maintained by its code-level optimizations.

</textarea></section>
