---
layout: post
title: "Obstacle Tower 4: Understanding the Baselines"
author: Seungjae Ryan Lee
permalink: blog/obstacle-tower/4
redirect_from: obstacle-tower/4
tags:
 - reinforcement-learning
 - obstacle-tower
 - competition

image: /assets/blog/obstacle-tower/4/front.png
image_type: cover
image_align: right
excerpt: >
    We briefly introduce Rainbow and PPO, the two baselines that was tested on Obstacle Tower.

nav:
- name: "Rainbow"
  permalink: '#rainbow'
- name: "- Algorithm"
  permalink: '#rainbow-algorithm'
- name: "- Implementation"
  permalink: '#rainbow-implementation'
- name: "PPO"
  permalink: '#ppo'
- name: "- Algorithm"
  permalink: '#ppo-algorithm'
- name: "- Implementation"
  permalink: '#ppo-implementation'
- name: "What's Next?"
  permalink: '#whats-next'

related:
- title: "Obstacle Tower 3: Observation Space and Action Space"
  link: /obstacle-tower/3
  image: /assets/blog/obstacle-tower/3/front.png
  image_type: cover
- title: "Obstacle Tower 5: Possible Improvements to the Baselines"
  link: /obstacle-tower/5
  image: /assets/blog/obstacle-tower/5/front.png
  image_type: cover
---

<style type="text/css">
   h2 {
      margin-bottom: 0 !important;
   }
   h2 + p {
      color: darkgray !important;
   }
   h2, h2 + p {
      display: inline-block !important;
   }
</style>
[The Obstacle Tower paper](https://storage.googleapis.com/obstacle-tower-build/Obstacle_Tower_Paper_Final.pdf) used two baseline algorithms to demonstrate the difficulty of the environment. In this post, we briefly introduce these two algorithms - Rainbow and PPO - and their implementations.

## Rainbow

Google Dopamine

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/4/rainbow.png">
  </div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/4/rainbow_ablation.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

### Rainbow Algorithm

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1710.02298">
arXiv
</a>

Rainbow is a combination of six extensions of Deep-Q Networks (DQN). The chief contribution of the Rainbow paper is not a novel algorithm, but an **empirical study of these six extensions**. The six extensions are as follows:

1. [Double DQN (DDQN)](https://arxiv.org/abs/1509.06461)
2. [Prioritized DQN (PER)](https://arxiv.org/abs/1511.05952)
3. [Dueling DQN](https://arxiv.org/abs/1511.06581)
4. [Distributional DQN](https://arxiv.org/abs/1707.06887)
5. [Noisy DQN (NoisyNet)](https://arxiv.org/abs/1706.10295)
6. n-step Bellman updates

The graph on the left shows that combining all six extensions to DQN results indeed improves the performance greatly. However, it is uncertain how complementary each improvement is: do some of them solve the same problem? To answer the question, the authors performed an ablation study of each improvement. An ablation study is a study where some feature of the algorithm is taken out to see how it affects performance. As shown in the graph, removing some improvements have very little adverse impact.

### Rainbow Implementation

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://github.com/google/dopamine">
GitHub
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1812.06110">
arXiv
</a>

The Rainbow baseline in Obstacle Tower uses the implementation by Google Brain called [Dopamine](https://github.com/google/dopamine). Dopamine provides a single-GPU "Rainbow" agent implemented with TensorFlow. Note that this "Rainbow" agent only uses three of the six extensions:

1. Prioritized DQN
2. Distributional DQN
3. n-step Bellman updates

In other words, it does not use these three extensions:

1. Double DQN
2. Dueling DQN
3. Noisy DQN

As shown in the ablation study graph below, removing Double DQN or Dueling DQN results does not degrade performance, and Noisy DQN only degrades performance a little.


## Proximal Policy Optimization (PPO)

OpenAI Baselines

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--8-col mdl-cell--8-col-desktop mdl-cell--6-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/4/ppo.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>


### PPO Algorithm

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1707.06347">
arXiv
</a>

Vanilla policy gradient methods have poor data efficiency and robustness due to overly large policy parameter updates. To counter this update, Schulman et al. developed [Trust Region Policy Optimization (TRPO)](https://arxiv.org/abs/1502.05477) by restricting updates within the "trust region," improving data efficiency and robustness.

However, despite its reliable performance, TRPO is difficult to understand and implement. PPO is an algorithm that uses a Clipped Surrogate Objective (or Adaptive KL Penalty Coefficient) to obtain similar efficiency and robustness. Unlike TRPO, PPO only uses first-order optimization.

Note that other common baselines in policy-based methods are [TRPO](https://arxiv.org/abs/1502.05477), [DDPG](https://arxiv.org/abs/1509.02971), [TD3](https://arxiv.org/abs/1802.09477), and [SAC](https://arxiv.org/abs/1801.01290).

### PPO Implementation

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://github.com/openai/baselines">
GitHub
</a>

OpenAI Baselines is a popular reinforcement learning algorithms library written in TensorFlow. It includes multiple state of the art algorithms:

- Policy Gradient Methods: TRPO, PPO
- Actor-Critic methods: A2C, ACER, ACKTR
- Deterministic Policy Gradient methods: DDPG
- Deep Q-Network methods: DQN
- HER

Because PPO (and most algorithms listed above) was invented by researchers at OpenAI, it is a good implementation. However, note that there are some additional improvements in the implementation not written in the original paper. For example, in the paper, the clipping parameter $\epsilon​$ is fixed, but it is set to decay in the implementation.

## What's Next?

&nbsp;

The Obstacle Tower paper showed that vanilla Rainbow and PPO is not enough to solve Obstacle Tower, and listed some potential fruitful areas of research. In the next post, we will take a brief look at each area.

