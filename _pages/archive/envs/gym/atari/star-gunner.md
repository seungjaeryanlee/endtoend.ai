---
layout: page
title: Atari Star Gunner Environment
permalink: /envs/gym/atari/star-gunner/

redirect_from:
 - /envs/gym/atari-2600/star-gunner/
 - /env/gym/atari/star-gunner/
 - /env/gym/atari-2600/star-gunner/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/star-gunner.mp4' | absolute_url }}" type="video/mp4">
</video>

Stargunner is a scrolling shooter for the Atari 2600 written by Alex Leavens and published by Telesys in 1982.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Stargunner_(Atari_2600))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 164766.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 138218.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 127073.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 123853.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 90804.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 67054.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 64393.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 61582.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 58946.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 58365.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 53052.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 51959.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 34081.0 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 14919.25 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 9528.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 697.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 200625.0 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 127029.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 125117.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 89238.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 89238.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 82920.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 79521.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 77495 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 75867 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 74677 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 70264 | DuDQN | Noisy Networks for Exploration |
| 70055 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 70038 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 69306.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 69139.0 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 65188.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 57997 | DQN | Human-level control through deep reinforcement learning |
| 54282.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 49156 | A3C | Noisy Networks for Exploration |
| 49095 | C51 | A Distributional Perspective on Reinforcement Learning |
| 48942.0 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 47133 | NoisyNet DQN | Noisy Networks for Exploration |
| 45008 | NoisyNet A3C | Noisy Networks for Exploration |
| 40934 | DQN | Noisy Networks for Exploration |
| 19144.99 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 10250.0 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 10250.0 | **Human** | Human-level control through deep reinforcement learning |
| 1855.5 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1070 | Linear | Human-level control through deep reinforcement learning |
| 664.0 | **Random** | Human-level control through deep reinforcement learning |
| 9.4 | Contingency | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 49817.7 | ACER | Proximal Policy Optimization Algorithm |
| 32689.0 | PPO | Proximal Policy Optimization Algorithm |
| 26204.0 | A2C | Proximal Policy Optimization Algorithm |

