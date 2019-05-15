---
layout: page
title: Atari Enduro Environment
permalink: /envs/gym/atari/enduro/

redirect_from:
 - /envs/gym/atari-2600/enduro/
 - /env/gym/atari/enduro/
 - /env/gym/atari-2600/enduro/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/enduro.mp4' | absolute_url }}" type="video/mp4">
</video>

nduro consists of maneuvering a race car in the National Enduro, a long-distance endurance race. The object of the race is to pass a certain number of cars each day. Doing so will allow the player to continue racing for the next day. The driver must avoid other racers and pass 200 cars on the first day, and 300 cars with each following day.

As the time in the game passes, visibility changes as well. When it is night in the game the player can only see the oncoming cars' taillights. As the days progress, cars will become more difficult to avoid as well. Weather and time of day are factors in how to play. During the day the player may drive through an icy patch on the road which would limit control of the vehicle, or a patch of fog may reduce visibility.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Enduro_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 2223.9 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 2133.4 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 2077.4 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 2061.1 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 1884.4 | Prioritized DDQN (prop, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 1831.0 | Prioritized DDQN (rank, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 1265.6 | Prioritized DQN (rank) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 1216.6 | DDQN (tuned) | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 740.2 | **Human** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 475.9 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 475.6 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 71.04 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| -81.8 | **Random** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| -82.2 | A3C FF 1 day | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| -82.5 | A3C FF | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| -82.5 | A3C LSTM | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3454 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 2359 | IQN | [Implicit Quantile Networks for Distributional Reinforcement Learning](https://arxiv.org/abs/1806.06923) |
| 2357 | QR-DQN-0 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 2355 | QR-DQN-1 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 2306.4 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 2259.3 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 2258.2 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 2230.1 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 2224.2 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 2211.3 | Reactor ND | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 2125.9 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 2064 | DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 2013 | NoisyNet DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1240 | NoisyNet DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1211.8 | DDQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 971.28 | IMPALA (deep, multitask) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 860.5 | **Human** | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 835 | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 729.0 | DQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 319.5 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 309.6 | **Human** | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 301.8 | DQN | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 300 | NoisyNet A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 159.4 | Contingency | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 129.1 | Linear | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 114.9 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 0.0 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 0.0 | **Random** | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 0 | A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 0.0 | IMPALA (shallow) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 0.0 | IMPALA (deep) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 758.3 | PPO | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 741 | UCC-I | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 699.8 | DQN | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |
| 661 | DQN2013 Best | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 643.824 | PPO | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |
| 534.6 | TRPO - single path | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 479.75 | DQN | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 470 | DQN2013 | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 430.8 | TRPO - vine | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 368 | **Human** | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 350.22 | PPO | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 207.47 | PPO (MPI) | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 159 | Contingency | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 129 | Sarsa | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 106 | HNeat Best | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 91 | HNeat Pixel | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 24.83 | TRPO (MPI) | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 0 | **Random** | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 0.0 | A2C | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 0.0 | ACER | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 0.0 | ACKTR | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 0.0 | ACER | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 0.0 | A2C | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 0.0 | A2C | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |
| 0.0 | ACER | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |
| 0.0 | ACKTR | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |

