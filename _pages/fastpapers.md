---
layout: revealjs
title: "Fast Papers"
permalink: /fastpapers/

image: /assets/fastpapers/fastpapers.png
image_type: contain
excerpt: "Fast Papers is a slideshow where each slide summarizes one paper with few sentences and some graphics."

theme: simple
---



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



<section id="obs-overfit" data-markdown><textarea data-template>

# Observational Overfitting in Reinforcement Learning

Song et al., 2019 | https://arxiv.org/abs/1912.02975

<div class="w60">
  <img src="{{ absolute_url }}/assets/fastpapers/obs-overfit/obs_overfit.png" alt="">
</div>

- Agents can overfit to parts of observation irrelevant to MDP dynamics such as the scoreboard or the background, as they are correlated with progress.
- Observational overfitting hurts agent's generalization.
- Overparametrization can mitigate observational overfitting and improve generalization.



</textarea></section>




<section id="implementation-matters" data-markdown><textarea data-template>

# Implementation Matters in Deep RL: A Case Study on PPO and TRPO

Engstrom et al., 2019 | https://openreview.net/forum?id=r1etN1rtPB

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
