---
layout: page
title: Atari Battle Zone Environment
permalink: /envs/gym/atari/battle-zone/

redirect_from:
 - /envs/gym/atari-2600/battle-zone/
 - /env/gym/atari/battle-zone/
 - /env/gym/atari-2600/battle-zone/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/battle-zone.mp4' | absolute_url }}" type="video/mp4">
</video>

Gameplay is on a flat plane with a mountainous horizon featuring an erupting volcano, distant crescent moon, and various geometric solids (in vector outline) like pyramids and blocks. The player views the screen, which includes an overhead radar view, to find and destroy the rather slow tanks, or the faster-moving supertanks. Saucer-shaped UFOs and guided missiles occasionally appear for a bonus score. The saucers differ from the tanks in that they do not fire upon the player and do not appear on radar. The player can hide behind the solids or, once fired upon, maneuver in rapid turns to buy time with which to fire.

The geometric solid obstacles are indestructible, and can block the movement of a player's tank. However, they are also useful as shields as they block enemy fire as well.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Battlezone_%281980_video_game%29)*

## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 306500 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 52040.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 33030.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 32250.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 31320.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 29100.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 25520.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 25240.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 24740.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 22250.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 20760.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 19938.0 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 17560.0 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 12950.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 11340.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 3560.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 98235.0 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 64070.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 62010.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 61220 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 52262 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 42244 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 41145.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 40481 | DuDQN | Noisy Networks for Exploration |
| 39268 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 37800.0 | **Human** | Human-level control through deep reinforcement learning |
| 37187.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 37150.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 36786 | NoisyNet DQN | Noisy Networks for Exploration |
| 35580 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 35520.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 31700.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 29900.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 28981 | DQN | Noisy Networks for Exploration |
| 28742 | C51 | A Distributional Perspective on Reinforcement Learning |
| 26300 | DQN | Human-level control through deep reinforcement learning |
| 25730.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 25266.66 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 20885.0 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 17871 | NoisyNet A3C | Noisy Networks for Exploration |
| 16411 | A3C | Noisy Networks for Exploration |
| 15820 | Linear | Human-level control through deep reinforcement learning |
| 13015.0 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 8910.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 7705.0 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 2360.0 | **Random** | Human-level control through deep reinforcement learning |
| 16.2 | Contingency | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 17366.7 | PPO | Proximal Policy Optimization Algorithm |
| 8983.3 | ACER | Proximal Policy Optimization Algorithm |
| 3080.0 | A2C | Proximal Policy Optimization Algorithm |

