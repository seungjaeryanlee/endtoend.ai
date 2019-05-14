---
layout: page
title: Atari James Bond Environment
permalink: /envs/gym/atari/jamesbond/

redirect_from:
 - /envs/gym/atari-2600/james-bond/
 - /env/gym/atari/james-bond/
 - /env/gym/atari-2600/james-bond/
 - /envs/gym/atari/james-bond/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/jamesbond.mp4' | absolute_url }}" type="video/mp4">
</video>

The player controls the titular character of James Bond across four levels. The player is given a multi-purpose vehicle that acts as an automobile, a plane, and a submarine. The vehicle can fire shots and flare bombs, and travels from left to right as the player progresses through each level. The player can shoot or avoid enemies and obstacles that appear throughout the game, including boats, frogmen, helicopters, missiles, and mini-submarines.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/James_Bond_007_(1983_video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3961.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 3511.5 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 1074.5 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 835.5 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 613.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 585.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 573.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 541.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 444.0 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 416.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 368.5 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 351.5 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 348.5 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 33.5 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 35108 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 16056.2 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 14524.0 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 7869.2 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 4703 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 4682 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 1909 | C51 | A Distributional Perspective on Reinforcement Learning |
| 1667 | DuDQN | Noisy Networks for Exploration |
| 1358.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 1312.5 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1235 | NoisyNet DQN | Noisy Networks for Exploration |
| 1028 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 909 | DQN | Noisy Networks for Exploration |
| 812.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 768.5 | DQN | A Distributional Perspective on Reinforcement Learning |
| 605.0 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 601.5 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 576.7 | DQN | Human-level control through deep reinforcement learning |
| 509 | A3C | Noisy Networks for Exploration |
| 490.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 440.0 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 438.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 406.7 | **Human** | Human-level control through deep reinforcement learning |
| 354.1 | Contingency | Human-level control through deep reinforcement learning |
| 302.8 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 284.0 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 202.8 | Linear | Human-level control through deep reinforcement learning |
| 188 | NoisyNet A3C | Noisy Networks for Exploration |
| 29.0 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 560.7 | PPO | Proximal Policy Optimization Algorithm |
| 261.8 | ACER | Proximal Policy Optimization Algorithm |
| 52.3 | A2C | Proximal Policy Optimization Algorithm |

