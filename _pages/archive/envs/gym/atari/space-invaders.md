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
| 23846.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 15730.5 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 12629.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 9063.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 8978.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 6368.6 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 5993.1 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 3912.1 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 2628.7 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 2214.7 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 1696.9 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 1495.7 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 1464.9 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 1449.7 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 1183.29 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 182.6 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 43595.78 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 28888 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 21039 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 20972 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 19723.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 18789.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 15311.5 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 10153.9 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 6869.1 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 6427.3 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 6427.3 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 5909 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 5747 | C51 | A Distributional Perspective on Reinforcement Learning |
| 3154.6 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 2448.6 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 2387.1 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 2186 | NoisyNet DQN | Noisy Networks for Exploration |
| 1976 | DQN | Human-level control through deep reinforcement learning |
| 1883.41 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 1757.2 | A2C | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 1726.28 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1692.3 | DQN | A Distributional Perspective on Reinforcement Learning |
| 1668.7 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 1652.3 | **Human** | Human-level control through deep reinforcement learning |
| 1283 | DQN | Noisy Networks for Exploration |
| 1158 | DuDQN | Noisy Networks for Exploration |
| 1126 | NoisyNet A3C | Noisy Networks for Exploration |
| 1034 | A3C | Noisy Networks for Exploration |
| 465.1 | TRPO | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 267.9 | Contingency | Human-level control through deep reinforcement learning |
| 250.1 | Linear | Human-level control through deep reinforcement learning |
| 199.65 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 148.0 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3690 | **Human** | Playing Atari with Deep Reinforcement Learning |
| 1720 | HNeat Best | Playing Atari with Deep Reinforcement Learning |
| 1213.9 | ACER | Proximal Policy Optimization Algorithm |
| 1145 | HNeat Pixel | Playing Atari with Deep Reinforcement Learning |
| 1075 | DQN2013 Best | Playing Atari with Deep Reinforcement Learning |
| 942.5 | PPO | Proximal Policy Optimization Algorithm |
| 744.5 | A2C | Proximal Policy Optimization Algorithm |
| 738.045 | ACKTR | RL Baselines Zoo b76641e |
| 692 | UCC-I | Trust Region Policy Optimization |
| 689.631 | PPO | RL Baselines Zoo b76641e |
| 658.907 | A2C | RL Baselines Zoo b76641e |
| 656.91 | ACER | OpenAI Baselines cbd21ef |
| 636.618 | DQN | RL Baselines Zoo b76641e |
| 581 | DQN2013 | Playing Atari with Deep Reinforcement Learning |
| 568.4 | TRPO - single path | Trust Region Policy Optimization |
| 557.28 | PPO | OpenAI Baselines cbd21ef |
| 557.19 | ACKTR | OpenAI Baselines cbd21ef |
| 542.556 | ACER | RL Baselines Zoo b76641e |
| 463.06 | A2C | OpenAI Baselines cbd21ef |
| 459.89 | PPO (MPI) | OpenAI Baselines cbd21ef |
| 459.86 | DQN | OpenAI Baselines cbd21ef |
| 457.7 | TRPO (MPI) | OpenAI Baselines cbd21ef |
| 450.2 | TRPO - vine | Trust Region Policy Optimization |
| 271 | Sarsa | Playing Atari with Deep Reinforcement Learning |
| 268 | Contingency | Playing Atari with Deep Reinforcement Learning |
| 179 | **Random** | Playing Atari with Deep Reinforcement Learning |

