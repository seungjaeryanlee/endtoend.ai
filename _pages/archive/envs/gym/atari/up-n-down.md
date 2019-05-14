---
layout: page
title: Atari Up and Down Environment
permalink: /envs/gym/atari/up-n-down/

redirect_from:
 - /envs/gym/atari-2600/up-and-down/
 - /env/gym/atari/up-and-down/
 - /env/gym/atari-2600/up-and-down/
 - /envs/gym/atari/up-and-down/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/up-n-down.mp4' | absolute_url }}" type="video/mp4">
</video>

Up'n Down is a vertically scrolling game that employs a pseudo-3D perspective.[citation needed] The player controls a purple dune buggy that resembles a Volkswagen Beetle.[citation needed] The buggy moves forward along a single-lane path; pressing up or down on the joystick causes the buggy to speed up or slow down, pressing right or left causes the buggy to switch lanes at an intersection, and pressing the "jump" button causes the buggy to jump in the air. Jumping is required to avoid other cars on the road; the player can either jump all the way over them, or land on them for points.[citation needed]

To complete a round, the player must collect 10 colored flags by running over them with the buggy. If the player passes by a flag without picking it up, it will appear again later in the round. The roads feature inclines and descents that affect the buggy's speed, and bridges that must be jumped. A player loses a turn whenever the buggy either collides with another vehicle without jumping on it, or jumps off the road and into the grass or water.


*Description from [Wikipedia](https://en.wikipedia.org/wiki/Up%27n_Down)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 105728.7 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 74705.7 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 54525.4 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 29443.7 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 24759.2 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 22681.3 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 19086.9 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 16626.5 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 12157.4 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 9896.1 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 8747.67 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 4721.1 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 3311.3 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 707.2 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 436665.8 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 332546.75 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 273058.1 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 194989.5 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 103557 | NoisyNet A3C | Noisy Networks for Exploration |
| 93931 | DuDQN | Noisy Networks for Exploration |
| 89067 | A3C | Noisy Networks for Exploration |
| 88148 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 82155.3 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 71260 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 70790.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 64354.2 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 61326 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 53585 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 44939.6 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 44939.6 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 33879.1 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 16769.9 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 15612 | C51 | A Distributional Perspective on Reinforcement Learning |
| 14255 | NoisyNet DQN | Noisy Networks for Exploration |
| 12561.58 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 11693.2 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 11652 | DQN | Noisy Networks for Exploration |
| 9989.9 | DQN | A Distributional Perspective on Reinforcement Learning |
| 9082.0 | **Human** | Human-level control through deep reinforcement learning |
| 8456 | DQN | Human-level control through deep reinforcement learning |
| 3533 | Linear | Human-level control through deep reinforcement learning |
| 2449 | Contingency | Human-level control through deep reinforcement learning |
| 533.4 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 145051.4 | ACER | Proximal Policy Optimization Algorithm |
| 95445.0 | PPO | Proximal Policy Optimization Algorithm |
| 17369.8 | A2C | Proximal Policy Optimization Algorithm |

