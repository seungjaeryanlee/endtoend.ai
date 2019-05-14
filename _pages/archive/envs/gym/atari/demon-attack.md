---
layout: page
title: Atari Demon Attack Environment
permalink: /envs/gym/atari/demon-attack/

redirect_from:
 - /envs/gym/atari-2600/demon-attack/
 - /env/gym/atari/demon-attack/
 - /env/gym/atari-2600/demon-attack/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/demon-attack.mp4' | absolute_url }}" type="video/mp4">
</video>

Marooned on the ice planet Krybor, the player uses a laser cannon to destroy legions of demons that attack from above. Visually, the demons appear in waves similar to other space-themed shooters, but individually combine from the sides of the screen to the area above the player's cannon.

Each wave introduces new weapons with which the demons attack, such as long streaming lasers and laser clusters. Starting in Wave 5, demons also divide into two smaller, bird-like creatures that eventually attempt descent onto the player's cannon. Starting in Wave 9, the demons' shots follow directly beneath the monsters, making it difficult for the player to slip underneath to get in a direct shot.

*Description from [Wikpedia](https://en.wikipedia.org/wiki/Demon_Attack)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 115201.9 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 113308.4 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 109856.6 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 109670.7 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 84997.5 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 73371.3 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 73185.8 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 69803.4 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 61277.5 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 56322.8 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 19478.8 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 14880.13 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 13943.5 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 12835.2 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 3442.8 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 208.3 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 274176.7 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 132826.98 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 130955 | C51 | A Distributional Perspective on Reinforcement Learning |
| 128580 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 122782.5 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 121551 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 117577 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 115154.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 111185.2 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 110626.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 107264.73 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 100189 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 72878.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 69311 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 61033 | DuDQN | Noisy Networks for Exploration |
| 60813.3 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 58044.2 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 37880 | NoisyNet A3C | Noisy Networks for Exploration |
| 37085 | A3C | Noisy Networks for Exploration |
| 36150 | NoisyNet DQN | Noisy Networks for Exploration |
| 13693.12 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 12696 | DQN | Noisy Networks for Exploration |
| 12149.4 | DQN | A Distributional Perspective on Reinforcement Learning |
| 10095.2 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 9711.9 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 9711 | DQN | Human-level control through deep reinforcement learning |
| 3401.3 | **Human** | Human-level control through deep reinforcement learning |
| 1971.0 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 520.5 | Linear | Human-level control through deep reinforcement learning |
| 152.1 | **Random** | Human-level control through deep reinforcement learning |
| 0 | Contingency | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 38808.3 | ACER | Proximal Policy Optimization Algorithm |
| 11378.4 | PPO | Proximal Policy Optimization Algorithm |
| 6639.1 | A2C | Proximal Policy Optimization Algorithm |

