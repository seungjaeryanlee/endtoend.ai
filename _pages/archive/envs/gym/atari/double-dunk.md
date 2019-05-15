---
layout: page
title: Atari Double Dunk Environment
permalink: /envs/gym/atari/double-dunk/

redirect_from:
 - /envs/gym/atari-2600/double-dunk/
 - /env/gym/atari/double-dunk/
 - /env/gym/atari-2600/double-dunk/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/double-dunk.mp4' | absolute_url }}" type="video/mp4">
</video>

Double Dunk is a simulation of two-on-two, half-court basketball. Teams have two on-screen characters, a shorter "outside" man and a taller "inside" man. In a single-player game, the player controls the on-screen character closest to the ball, either the one holding the ball (on offense) or the one guarding the opponent with the ball (on defense). In two-player games, each player may control one of the two teams as in a one-player game, or both players may play on the same team against a computer-controlled opponent. At the start of each possession, both offense and defense select from a number of plays (such as the "pick and roll" on offense), then attempt to score or regain possession of the ball by intercepting or stealing it from the offense.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Double_Dunk)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 16.0 | Prioritized DDQN (rank, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 2.7 | Prioritized DDQN (prop, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 0.1 | A3C FF 1 day | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 0.1 | A3C LSTM | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| -0.1 | A3C FF | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| -0.3 | DDQN (tuned) | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| -0.6 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| -0.8 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| -3.7 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| -5.3 | Prioritized DQN (rank) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| -6.4 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| -10.7 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| -11.35 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| -14.4 | **Human** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| -16.0 | **Random** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| -21.6 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 23.0 | Reactor ND | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 23.0 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 21.9 | QR-DQN-1 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 17 | DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 12.3 | QR-DQN-0 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 11.4 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 5.6 | IQN | [Implicit Quantile Networks for Distributional Reinforcement Learning](https://arxiv.org/abs/1806.06923) |
| 3 | A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 3 | NoisyNet A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 2.5 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 1 | NoisyNet DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1 | NoisyNet DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 0.1 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| -0.3 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| -0.33 | IMPALA (deep) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| -0.35 | IMPALA (shallow) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| -0.54 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| -1.92 | IMPALA (deep, multitask) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| -3.8 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| -5.5 | DDQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| -6 | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| -6.3 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| -6.6 | DQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| -10.62 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| -12.5 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| -13.1 | Linear | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| -15.5 | **Human** | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| -16 | Contingency | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| -16.4 | **Human** | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| -18.1 | DQN | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| -18.6 | **Random** | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| -2 | DRQN | [Deep Recurrent Q-Learning for Partially Observable MDPs](https://arxiv.org/abs/1507.06527) |
| -10 | DQN Ours | [Deep Recurrent Q-Learning for Partially Observable MDPs](https://arxiv.org/abs/1507.06527) |
| -13.2 | ACER | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| -14 | DRQN | [Deep Recurrent Q-Learning for Partially Observable MDPs](https://arxiv.org/abs/1507.06527) |
| -14.9 | PPO | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| -16.2 | DQN Ours | [Deep Recurrent Q-Learning for Partially Observable MDPs](https://arxiv.org/abs/1507.06527) |
| -16.2 | A2C | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |

