---
layout: post
title: "Deep RL Seminar Week 2: Deep Q-Networks"
author: Seungjae Ryan Lee
permalink: /deep-rl-seminar/2
redirect_trom: /drl-seminar/2
tags:
 - reinforcement-learning
 - deep-rl-seminar

front_image: /assets/blog/deep-rl-seminar/2/rainbow.png
meta_image: /assets/blog/deep-rl-seminar/2/rainbow.png
front_image_type: cover
excerpt: >
   This week, we reviewed various improvements made to the Deep Q-Network algorithm.

nav:
- name: Double DQN
  permalink: '#deep-reinforcement-learning-with-double-q-learning'
- name: PER
  permalink: '#prioritized-experience-replay'
- name: Dueling DQN
  permalink: '#dueling-network-architectures-for-deep-reinforcement-learning'
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

A full review of each paper will be released after the seminar is finished. Meanwhile, here are questions that have been asked.

## Table of Contents

- [**Deep Reinforcement Learning with Double Q-learning (Double DQN)**](#deep-reinforcement-learning-with-double-q-learning)
   - [Q1. Why must states -6 and 6 always be included to avoid extrapolation?](#q1-why-must-states--6-and-6-always-be-included-to-avoid-extrapolation)
- [**Prioritized Experience Replay (PER)**](#prioritized-experience-replay)
   - [Q1. Why do the authors mention the power-law distribution while explaining the rank-based variant?](#q1-why-do-the-authors-mention-the-power-law-distribution-while-explaining-the-rank-based-variant)
   - [Q2. How does the Sum-Tree implementation work for proportional-based variant?](#q2-how-does-the-sum-tree-implementation-work-for-proportional-based-variant)
- [**Dueling Network Architectures for Deep Reinforcement Learning (Dueling DQN)**](#dueling-network-architectures-for-deep-reinforcement-learning)
   - [Q1. What is gradient clipping?](#q1-what-is-gradient-clipping)
   - [Q2. Why is the naive aggregation module $Q = V + A$ unidentifiable?](#q2-why-is-the-naive-aggregation-module-q--v--a-unidentifiable)


## Deep Reinforcement Learning with Double Q-learning
Double DQN

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1509.06461">
arXiv
</a>


#### Q1. Why must states -6 and 6 always be included to avoid extrapolation?

<div style="margin: 10px auto; text-align: center;">
  <img class="w50" style="display: inline-block;" src="{{ absolute_url }}/assets/blog/deep-rl-seminar/2/double_dqn_q1.png" alt="">
  <img class="w30" style="display: inline-block;" src="{{ absolute_url }}/assets/blog/deep-rl-seminar/2/double_dqn_q1_diagram.png" alt="">
</div>


Suppose that -6 is not sampled. Then, its value must be estimated from or some other close values. However, since values less than -6 cannot be sampled, it must be **extrapolated** only from one side: values more than -6. We want to test the amount of overestimation fairly, so we want all values to be **intrapolated**. If -6 and 6 is always included, any other value without samples can be intrapolated from some samples from below and some samples from above.

## Prioritized Experience Replay
PER

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1511.05952">
arXiv
</a>

#### Q1. Why do the authors mention the power-law distribution while explaining the rank-based variant?

<div class="w80" style="margin: 10px auto">
  <img src="{{ absolute_url }}/assets/blog/deep-rl-seminar/2/per_q1.png" alt="">
</div>

The [power-law distribution](https://en.wikipedia.org/wiki/Power_law) is monotonic, which might not be obvious with the equation $p_i = \frac{1}{\text{rank}(i)}$.


#### Q2. How does the Sum-Tree implementation work for proportional-based variant?

<div style="margin: 10px auto; text-align: center;">
  <img class="w60" style="display: inline-block;" src="{{ absolute_url }}/assets/blog/deep-rl-seminar/2/per_q2.png" alt="">
  <img class="w30" style="display: inline-block;" src="{{ absolute_url }}/assets/blog/deep-rl-seminar/2/per_q2_sumtree.png" alt="">
</div>

To choose with priority, we need to first sum all the priority weights $W = \sum_i w_i$. Then, we select a random number $r$ from $[0, W]$. Finally, if $r \in [0, w_1]$, choice with weight $w_1$ is chosen. If $r \in [w_1, w_1 + w_2]$, choice with weight $w_2$ is chosen. In other words, if $r \in [\sum_{i=1}^k w_i, \sum_{i=1}^{k+1} w_i]$, choice with weight $w_{k+1}$ is chosen. The simplist possible data structure is an array $[w_1\;w_2\;w_3\;\ldots\;w_n]$. Then, to choose an element, we need to iteratively check if $r < \sum w_i$ for all $i$. This is inefficient, so we instead use the **sum-tree implementation**.

The sum-tree can be thought of as performing a binary search on the discrete CDF $\sum w_i$. In a tree structure, each parent node contains the sum of all its children. Then, to sample, we just need $O(\log n)$ inequality checks. This implementation does suffer from worse update complexity of $O(\log n)$, since the value of all parents and grandparents of the updated weight must also be updated. However, as a whole, it is faster than the naive array implementation.


## Dueling Network Architectures for Deep Reinforcement Learning
Dueling DQN

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://arxiv.org/abs/1511.06581">
arXiv
</a>

#### Q1. What is gradient clipping?

<div class="w50" style="margin: 10px auto">
  <img src="{{ absolute_url }}/assets/blog/deep-rl-seminar/2/dueling_dqn_q1.png" alt="">
</div>

Gradient clipping is a technique used most frequently for training deep neural networks or recurrent neural networks (RNNs) to prevent exploding gradients. When the error gradient is backpropagated long distances, the gradient can either "vanish" or "explode". A vanishing gradient results in neural network weights not changing, while an exploding gradient results in instability or divergence. To mitigate such instability, it is a common technique to artificially limit the size of gradients. This is called "gradient clipping."

#### Q2. Why is the naive aggregation module $Q = V + A$ unidentifiable?

<div class="w50" style="margin: 10px auto">
  <img src="{{ absolute_url }}/assets/blog/deep-rl-seminar/2/dueling_dqn_q2.png" alt="">
</div>

Suppose that for some state $s$, $V_1(s; \theta, \beta) = x$ and $A_1(s, a_i; \theta, \alpha) = y_i$. Then, using the naive aggregating module $Q = V + A$, $Q_1(s, a_i; \theta, \alpha, \beta) = x + y_i$. Now, consider a different set of value estimate functions $V_2$ and $A_2$: $V_2(s; \theta, \beta) = x + \epsilon$ and $A_2(s, a_i; \theta, \alpha) = y_i - \epsilon$. Then $Q_2(s, a_i; \theta, \alpha, \beta) = x + y_i = Q_1(s, a_i; \theta, \alpha, \beta)$. Thus, different $V$ and $A$ can be aggregated to have same $Q$, so we cannot recover $V$ and $A$ from values of $Q$. Thus, this aggregation module is unidentifiable.
