---
layout: page
title: Atari Freeway Environment
permalink: /envs/gym/atari/freeway/

redirect_from:
 - /envs/gym/atari-2600/freeway/
 - /env/gym/atari/freeway/
 - /env/gym/atari-2600/freeway/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/freeway.mp4' | absolute_url }}" type="video/mp4">
</video>

One or two players control chickens who can be made to run across a ten lane highway filled with traffic in an effort to "get to the other side." Every time a chicken gets across a point is earned for that player. If hit by a car, a chicken is forced back either slightly, or pushed back to the bottom of the screen, depending on what difficulty the switch is set to. The winner of a two player game is the player who has scored the most points in the two minutes, sixteen seconds allotted. The chickens are only allowed to move up or down. A cluck sound is heard when a chicken is struck by a car.

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
| 29.1 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 28.9 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 28.8 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 28.8 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 28.4 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 28.2 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 27.9 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 26.3 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 25.8 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 25.6 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 10.16 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 0.2 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 0.1 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 0.1 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 0.1 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 0.1 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 34 | DuDQN | Noisy Networks for Exploration |
| 34 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 34.0 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 34.0 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 34.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 34.0 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 33.9 | C51 | A Distributional Perspective on Reinforcement Learning |
| 33.6 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 33.3 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 33.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 32 | NoisyNet DQN | Noisy Networks for Exploration |
| 31.8 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 31.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 31.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 31 | DQN | Noisy Networks for Exploration |
| 30.8 | DQN | A Distributional Perspective on Reinforcement Learning |
| 30.3 | DQN | Human-level control through deep reinforcement learning |
| 29.6 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 29.6 | **Human** | Human-level control through deep reinforcement learning |
| 22.3 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 21.41 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 19.7 | Contingency | Human-level control through deep reinforcement learning |
| 19.1 | Linear | Human-level control through deep reinforcement learning |
| 18 | NoisyNet A3C | Noisy Networks for Exploration |
| 11.69 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 0.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 0.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 0.0 | **Random** | Human-level control through deep reinforcement learning |
| 0 | A3C | Noisy Networks for Exploration |
| 0.0 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 0.0 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 32.5 | PPO | Proximal Policy Optimization Algorithm |
| 0.0 | A2C | Proximal Policy Optimization Algorithm |
| 0.0 | ACER | Proximal Policy Optimization Algorithm |

