---
layout: page
title: Atari Tutankham Environment
permalink: /envs/gym/atari/tutankham/

redirect_from:
 - /envs/gym/atari-2600/tutankham/
 - /env/gym/atari/tutankham/
 - /env/gym/atari-2600/tutankham/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/tutankham.mp4' | absolute_url }}" type="video/mp4">
</video>

Taking on the role of an explorer grave robbing Tutankhamun's tomb while exploring dozens of rooms, the player is chased by creatures such as asps, vultures, parrots, bats, dragons, and even curses, all that kill the player on contact. The explorer can fight back by firing lasers at the creatures, but he can only cover the left and right directions. The player is also endowed with a single screen-clearing "flash bomb" per room or life. Finally, each room has warp zones that teleport the player around the room, which enemies cannot use.

To progress, the player collects keys open locked doors throughout the rooms, searching for the large exit door. Optional treasures can be picked-up for bonus points. Each room has a timer; when it reaches zero the explorer can no longer fire lasers, and once a room is cleared the remaining time is converted to bonus points.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Tutankham)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 156.3 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 144.2 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 138.3 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 126.9 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 124.3 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 118.45 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 108.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 96.5 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 92.2 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 63.6 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 56.9 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 48.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 33.6 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 32.4 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 26.1 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 12.7 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 314.3 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 312 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 297 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 293 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 292.11 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 280 | C51 | A Distributional Perspective on Reinforcement Learning |
| 280 | DuDQN | Noisy Networks for Exploration |
| 275.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 272.6 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 269 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 267.82 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 263.2 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 249.4 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 245.9 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 244.97 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 241.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 232 | NoisyNet DQN | Noisy Networks for Exploration |
| 218 | DQN | Noisy Networks for Exploration |
| 213 | A3C | Noisy Networks for Exploration |
| 211.4 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 211.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 190.6 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 186.7 | DQN | Human-level control through deep reinforcement learning |
| 167.6 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 167.6 | **Human** | Human-level control through deep reinforcement learning |
| 164 | NoisyNet A3C | Noisy Networks for Exploration |
| 114.3 | Linear | Human-level control through deep reinforcement learning |
| 105.22 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 98.2 | Contingency | Human-level control through deep reinforcement learning |
| 68.1 | DQN | A Distributional Perspective on Reinforcement Learning |
| 11.4 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 280.8 | ACER | Proximal Policy Optimization Algorithm |
| 254.4 | PPO | Proximal Policy Optimization Algorithm |
| 206.8 | A2C | Proximal Policy Optimization Algorithm |

