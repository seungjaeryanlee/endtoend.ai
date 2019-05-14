---
layout: page
title: Atari Breakout Environment
permalink: /envs/gym/atari/breakout/

redirect_from:
 - /envs/gym/atari-2600/breakout/
 - /env/gym/atari/breakout/
 - /env/gym/atari-2600/breakout/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/breakout.mp4' | absolute_url }}" type="video/mp4">
</video>

Breakout begins with eight rows of bricks, with each two rows a different color. The color order from the bottom up is yellow, green, orange and red. Using a single ball, the player must knock down as many bricks as possible by using the walls and/or the paddle below to ricochet the ball against the bricks and eliminate them. If the player's paddle misses the ball's rebound, he or she will lose a turn. The player has three turns to try to clear two screens of bricks. Yellow bricks earn one point each, green bricks earn three points, orange bricks earn five points and the top-level red bricks score seven points each. The paddle shrinks to one-half its size after the ball has broken through the red row and hit the upper wall. Ball speed increases at specific intervals: after four hits, after twelve hits, and after making contact with the orange and red rows.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Breakout_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 766.8 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 681.9 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 551.6 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 548.7 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 481.1 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 411.6 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 379.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 371.6 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 368.9 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 354.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 343.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 338.7 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 313.03 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 303.9 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 27.9 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 1.6 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 787.34 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 766 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 748 | C51 | A Distributional Perspective on Reinforcement Learning |
| 742 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 735.7 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 734 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 640.43 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 612.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 581.6 | A2C | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 518.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 516 | NoisyNet DQN | Noisy Networks for Exploration |
| 514.8 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 509.5 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 496 | A3C | Noisy Networks for Exploration |
| 418.5 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 417.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 402.2 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 401.2 | DQN | Human-level control through deep reinforcement learning |
| 396 | DQN | Noisy Networks for Exploration |
| 385.5 | DQN | A Distributional Perspective on Reinforcement Learning |
| 375.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 374 | NoisyNet A3C | Noisy Networks for Exploration |
| 366.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 345.3 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 263 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 200 | DuDQN | Noisy Networks for Exploration |
| 35.67 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 31.8 | **Human** | Human-level control through deep reinforcement learning |
| 30.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 14.7 | TRPO | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 6.1 | Contingency | Human-level control through deep reinforcement learning |
| 5.2 | Linear | Human-level control through deep reinforcement learning |
| 1.7 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 456.4 | ACER | Proximal Policy Optimization Algorithm |
| 448.514 | ACKTR | RL Baselines Zoo b76641e |
| 384.865 | A2C | RL Baselines Zoo b76641e |
| 380 | UCC-I | Trust Region Policy Optimization |
| 303.0 | A2C | Proximal Policy Optimization Algorithm |
| 274.8 | PPO | Proximal Policy Optimization Algorithm |
| 228.594 | PPO | RL Baselines Zoo b76641e |
| 225 | DQN2013 Best | Playing Atari with Deep Reinforcement Learning |
| 191.165 | DQN | RL Baselines Zoo b76641e |
| 168 | DQN2013 | Playing Atari with Deep Reinforcement Learning |
| 131.46 | DQN | OpenAI Baselines cbd21ef |
| 114.26 | PPO | OpenAI Baselines cbd21ef |
| 113.58 | ACKTR | OpenAI Baselines cbd21ef |
| 82.94 | ACER | OpenAI Baselines cbd21ef |
| 81.61 | PPO (MPI) | OpenAI Baselines cbd21ef |
| 59.72 | A2C | OpenAI Baselines cbd21ef |
| 52 | HNeat Best | Playing Atari with Deep Reinforcement Learning |
| 34.2 | TRPO - vine | Trust Region Policy Optimization |
| 31 | **Human** | Playing Atari with Deep Reinforcement Learning |
| 14.98 | TRPO (MPI) | OpenAI Baselines cbd21ef |
| 10.8 | TRPO - single path | Trust Region Policy Optimization |
| 6 | Contingency | Playing Atari with Deep Reinforcement Learning |
| 5.2 | Sarsa | Playing Atari with Deep Reinforcement Learning |
| 4 | HNeat Pixel | Playing Atari with Deep Reinforcement Learning |
| 1.2 | **Random** | Playing Atari with Deep Reinforcement Learning |

