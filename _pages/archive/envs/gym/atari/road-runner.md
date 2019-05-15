---
layout: page
title: Atari Road Runner Environment
permalink: /envs/gym/atari/road-runner/

redirect_from:
 - /envs/gym/atari-2600/road-runner/
 - /env/gym/atari/road-runner/
 - /env/gym/atari-2600/road-runner/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/road-runner.mp4' | absolute_url }}" type="video/mp4">
</video>

The player controls Road Runner, who is chased by Wile E. Coyote. In order to escape, Road Runner runs endlessly to the left. While avoiding Wile E. Coyote, the player must pick up bird seeds on the street, avoid obstacles like cars, and get through mazes. Sometimes Wile E. Coyote will just run after the Road Runner, but he occasionally uses tools like rockets, roller skates, and pogo-sticks.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Road_Runner_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 73949.0 | A3C LSTM | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 58549.0 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 57207.0 | Prioritized DQN (rank) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 56990.0 | Prioritized DDQN (prop, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 56086.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 54630.0 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 54261.0 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 52264.0 | Prioritized DDQN (rank, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 43884.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 43156.0 | DDQN (tuned) | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 43079.8 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 34216.0 | A3C FF | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 31769.0 | A3C FF 1 day | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 9264.0 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 6878.0 | **Human** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 200.0 | **Random** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 234352 | NoisyNet DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 111310.0 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 71168 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 69524.0 | DDQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 69524.0 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 67780 | QR-DQN-0 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 66790.5 | Reactor ND | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 64262 | QR-DQN-1 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 64051 | DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 63366.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 62151.0 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 62041.0 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 57900 | IQN | [Implicit Quantile Networks for Distributional Reinforcement Learning](https://arxiv.org/abs/1806.06923) |
| 57121.0 | IMPALA (deep) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 55839 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 53446.0 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 51007.99 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 48377.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 45993 | NoisyNet DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 45315 | A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 39544.0 | DQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 37910 | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 37505.0 | IMPALA (shallow) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 30454 | NoisyNet A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 24435.5 | IMPALA (deep, multitask) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 18257 | DQN | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 7845.0 | **Human** | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 7845.0 | **Human** | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 89.1 | Contingency | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 67.7 | Linear | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 11.5 | **Random** | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 35466.0 | ACER | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 32810.0 | A2C | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 25076.0 | PPO | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |

