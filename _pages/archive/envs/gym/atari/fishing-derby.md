---
layout: page
title: Atari Fishing Derby Environment
permalink: /envs/gym/atari/fishing-derby/

redirect_from:
 - /envs/gym/atari-2600/fishing-derby/
 - /env/gym/atari/fishing-derby/
 - /env/gym/atari-2600/fishing-derby/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/fishing-derby.mp4' | absolute_url }}" type="video/mp4">
</video>

In Fishing Derby, two fishermen sit on opposite docks over a lake filled with fish (and a shark that passes through). Using the joystick the player is able to move his line left right and up and down in the water. When a fish is hooked, the line slowly comes up to the surface of the water. Pressing the fire button on the joystick reels in the fish faster. However, if both fishermen have fish hooked, only one person can reel theirs in (the one who hooked theirs first). The shark that roams the water will try to eat hooked fish before they surface.

The objective for both fishermen is to reach 99 pounds of fish first. There are six rows of fish; the top two rows have 2 lb. fish, the middle two rows have 4 lb. fish, and the two bottom rows have 6 lb. fish. The more valuable fish sit at the bottom, but they are harder to bring in as they run a higher risk of being eaten by the shark.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Freeway_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 22.6 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 22.6 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 18.8 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 17.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 13.6 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 9.8 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 9.2 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 5.1 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 4.64 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 3.5 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 3.2 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| -2.3 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| -3.4 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| -4.1 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| -4.9 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -77.1 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 57 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 46.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 44.85 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 41.3 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 39.0 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 37.4 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 35.27 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 35 | DuDQN | Noisy Networks for Exploration |
| 33.8 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 33.73 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 33.1 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 32.08 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 31.3 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 30.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 23.2 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 20.3 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 20.19 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 15.5 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 11 | NoisyNet DQN | Noisy Networks for Exploration |
| 9.1 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 8.9 | C51 | A Distributional Perspective on Reinforcement Learning |
| 5.5 | **Human** | Human-level control through deep reinforcement learning |
| 4 | DQN | Noisy Networks for Exploration |
| -0.8 | DQN | Human-level control through deep reinforcement learning |
| -4.9 | DQN | A Distributional Perspective on Reinforcement Learning |
| -7 | A3C | Noisy Networks for Exploration |
| -38 | NoisyNet A3C | Noisy Networks for Exploration |
| -38.7 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| -85.1 | Contingency | Human-level control through deep reinforcement learning |
| -89.5 | Linear | Human-level control through deep reinforcement learning |
| -91.7 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 34.7 | ACER | Proximal Policy Optimization Algorithm |
| 20.6 | A2C | Proximal Policy Optimization Algorithm |
| 17.8 | PPO | Proximal Policy Optimization Algorithm |

