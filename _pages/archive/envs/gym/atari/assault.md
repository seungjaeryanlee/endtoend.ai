---
layout: page
title: Atari Assault Environment
permalink: /envs/gym/atari/assault/

redirect_from:
 - /envs/gym/atari-2600/assault/
 - /env/gym/atari/assault/
 - /env/gym/atari-2600/assault/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/assault.mp4' | absolute_url }}" type="video/mp4">
</video>

The player is presented with an alien mother ship, which continually deploys three smaller ships during play.[2] The mother ship and the smaller vessels shoot at a weapon the player is in command of, and the player's aim is to eliminate the opposition while preventing the weapon from receiving enough fire to destroy it.[2] The player uses a joystick to operate the game, and only one player at a time can play.[1]

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Assault_(1983_video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 14497.9 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 14491.7 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 10950.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 7748.5 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 6548.9 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 6060.8 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 5474.9 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 5101.3 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 3994.8 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 3746.1 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 3332.3 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 3081.3 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 2774.3 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 1195.85 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 628.9 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 166.9 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 29091 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 22012 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 19961 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 19148.47 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 17543.8 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 14198.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 12086.86 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 11477.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 11231 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 11013.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 10777.7 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 8323.3 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 8010 | DuDQN | Noisy Networks for Exploration |
| 7203 | C51 | A Distributional Perspective on Reinforcement Learning |
| 5909.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 5510 | NoisyNet DQN | Noisy Networks for Exploration |
| 5393.2 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 5022.9 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 4621.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 4280.4 | DQN | A Distributional Perspective on Reinforcement Learning |
| 3595 | DQN | Noisy Networks for Exploration |
| 3359 | DQN | Human-level control through deep reinforcement learning |
| 3060 | NoisyNet A3C | Noisy Networks for Exploration |
| 2879 | A3C | Noisy Networks for Exploration |
| 2116.32 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1496.4 | **Human** | Human-level control through deep reinforcement learning |
| 1450.41 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 742.0 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 628 | Linear | Human-level control through deep reinforcement learning |
| 537 | Contingency | Human-level control through deep reinforcement learning |
| 222.4 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 4971.9 | PPO | Proximal Policy Optimization Algorithm |
| 4653.8 | ACER | Proximal Policy Optimization Algorithm |
| 1562.9 | A2C | Proximal Policy Optimization Algorithm |

