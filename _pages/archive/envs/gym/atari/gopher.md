---
layout: page
title: Atari Gopher Environment
permalink: /envs/gym/atari/gopher/

redirect_from:
 - /envs/gym/atari-2600/gopher/
 - /env/gym/atari/gopher/
 - /env/gym/atari-2600/gopher/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/gopher.mp4' | absolute_url }}" type="video/mp4">
</video>

The gopher tunnels left and right and up to the surface. When he makes a hole to the surface he will attempt to steal a carrot. The farmer must hit the gopher to send him back underground or fill in the holes to prevent him from reaching the surface. If gopher has taken any of the three carrots, a pelican will occasionally fly overhead and drop a seed which, if the farmer catches it, he can plant it in the place of the missing carrot. The longer the game, the faster the gopher gets. The game ends when the gopher successfully removes all three carrots. There are two skill levels and is for one or two players, giving a total of four game variations.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Gopher_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 105148.4 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 72595.7 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 57783.8 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 34858.8 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 27778.3 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 20051.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 17478.2 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 17106.8 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 15253.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 10022.8 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 8742.8 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 8442.8 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 4373.04 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 2731.8 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 2311.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 250.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 118365 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 118050 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 113585 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 104368.2 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 89851.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 70354.6 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 69135.1 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 66782.3 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 47730.8 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 38909 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 36279.1 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 33641 | C51 | A Distributional Perspective on Reinforcement Learning |
| 28841.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 27313 | DuDQN | Noisy Networks for Exploration |
| 15718.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 14840.8 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 14574 | NoisyNet DQN | Noisy Networks for Exploration |
| 12439 | NoisyNet A3C | Noisy Networks for Exploration |
| 11825 | DQN | Noisy Networks for Exploration |
| 8777.4 | DQN | A Distributional Perspective on Reinforcement Learning |
| 8520 | DQN | Human-level control through deep reinforcement learning |
| 8215.4 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 7992 | A3C | Noisy Networks for Exploration |
| 5279.0 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 2412.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 2368 | Contingency | Human-level control through deep reinforcement learning |
| 2321.0 | **Human** | Human-level control through deep reinforcement learning |
| 1288 | Linear | Human-level control through deep reinforcement learning |
| 1002.4 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 913.5 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 257.6 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 37802.3 | ACER | Proximal Policy Optimization Algorithm |
| 2932.9 | PPO | Proximal Policy Optimization Algorithm |
| 1500.9 | A2C | Proximal Policy Optimization Algorithm |

