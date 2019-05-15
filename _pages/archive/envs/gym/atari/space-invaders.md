---
layout: page
title: Atari Space Invaders Environment
permalink: /envs/gym/atari/space-invaders/

redirect_from:
 - /envs/gym/atari-2600/space-invaders/
 - /env/gym/atari/space-invaders/
 - /env/gym/atari-2600/space-invaders/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/space-invaders.mp4' | absolute_url }}" type="video/mp4">
</video>

Space Invaders is a two-dimensional shooter game in which the player controls a laser cannon by moving it horizontally across the bottom of the screen and firing at descending aliens. The aim is to defeat five rows of eleven aliens—some versions feature different numbers—that move horizontally back and forth across the screen as they advance toward the bottom of the screen. The player defeats an alien, and earns points, by shooting it with the laser cannon. As more aliens are defeated, the aliens' movement and the game's music both speed up. Defeating the aliens brings another wave that is more difficult, a loop which can continue without end.

The aliens attempt to destroy the cannon by firing at it while they approach the bottom of the screen. If they reach the bottom, the alien invasion is successful and the game ends. A special "mystery ship" will occasionally move across the top of the screen and award bonus points if destroyed. The laser cannon is partially protected by several stationary defense bunkers—the number varies by version—that are gradually destroyed by numerous blasts from the aliens or player. A game will also end if the player's last laser base is destroyed.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Space_Invaders)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 23846.0 | A3C LSTM | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 15730.5 | A3C FF | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 12629.0 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 9063.0 | Prioritized DDQN (prop, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 8978.0 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 6368.6 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 5993.1 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 3912.1 | Prioritized DDQN (rank, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 2628.7 | DDQN (tuned) | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 2214.7 | A3C FF 1 day | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 1696.9 | Prioritized DQN (rank) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 1495.7 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 1464.9 | **Human** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 1449.7 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 1183.29 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 182.6 | **Random** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 43595.78 | IMPALA (deep) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 28888 | IQN | [Implicit Quantile Networks for Distributional Reinforcement Learning](https://arxiv.org/abs/1806.06923) |
| 21039 | QR-DQN-0 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 20972 | QR-DQN-1 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 19723.0 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 18789.0 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 15311.5 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 10153.9 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 6869.1 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 6427.3 | DDQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 6427.3 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 5909 | NoisyNet DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 5747 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 3154.6 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 2448.6 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 2387.1 | Reactor ND | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 2186 | NoisyNet DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1976 | DQN | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1706.10295) |
| 1883.41 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 1757.2 | A2C | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 1726.28 | IMPALA (shallow) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 1692.3 | DQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 1668.7 | **Human** | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 1652.3 | **Human** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1511.06581) |
| 1283 | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1158 | DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1126 | NoisyNet A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1034 | A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 465.1 | TRPO | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 267.9 | Contingency | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1708.05144) |
| 250.1 | Linear | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1708.05144) |
| 199.65 | IMPALA (deep, multitask) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 148.0 | **Random** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1802.01561) |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3690 | **Human** | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 1720 | HNeat Best | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 1213.9 | ACER | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 1145 | HNeat Pixel | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 1075 | DQN2013 Best | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 942.5 | PPO | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 744.5 | A2C | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 738.045 | ACKTR | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1707.06347) |
| 692 | UCC-I | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 689.631 | PPO | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1502.05477) |
| 658.907 | A2C | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1502.05477) |
| 656.91 | ACER | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 636.618 | DQN | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1502.05477) |
| 581 | DQN2013 | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 568.4 | TRPO - single path | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 557.28 | PPO | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 557.19 | ACKTR | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 542.556 | ACER | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1502.05477) |
| 463.06 | A2C | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 459.89 | PPO (MPI) | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 459.86 | DQN | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 457.7 | TRPO (MPI) | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 450.2 | TRPO - vine | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 271 | Sarsa | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 268 | Contingency | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 179 | **Random** | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |

