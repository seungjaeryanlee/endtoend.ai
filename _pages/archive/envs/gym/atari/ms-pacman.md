---
layout: page
title: Atari Ms. Pacman Environment
permalink: /envs/gym/atari/ms-pacman/

redirect_from:
 - /envs/gym/atari-2600/ms-pacman/
 - /env/gym/atari/ms-pacman/
 - /env/gym/atari-2600/ms-pacman/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/ms-pacman.mp4' | absolute_url }}" type="video/mp4">
</video>

The gameplay of Ms. Pac-Man is very similar to that of the original Pac-Man. The player earns points by eating pellets and avoiding ghosts (contact with one causes Ms. Pac-Man to lose a life). Eating an energizer (or "power pellet") causes the ghosts to turn blue, allowing them to be eaten for extra points. Bonus fruits can be eaten for increasing point values, twice per round. As the rounds increase, the speed increases, and energizers generally lessen the duration of the ghosts' vulnerability, eventually stopping altogether.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Ms._Pac-Man)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 15375.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 2570.2 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 2250.6 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 2064.1 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1865.9 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 1824.6 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 1401.8 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 1263.05 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 1241.3 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 1007.8 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 964.7 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 850.7 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 763.5 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 653.7 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 594.4 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 197.8 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 15693.4 | **Human** | Human-level control through deep reinforcement learning |
| 7342.32 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 6951.6 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 6501.71 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 6349 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 6283.5 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 5822 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 5821 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 5546 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 5380.4 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 4416.9 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 3769.2 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 3749.2 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 3650 | DuDQN | Noisy Networks for Exploration |
| 3415.05 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 3415 | C51 | A Distributional Perspective on Reinforcement Learning |
| 3401 | NoisyNet A3C | Noisy Networks for Exploration |
| 3327.3 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 3233.5 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 3210.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 3085.6 | DQN | A Distributional Perspective on Reinforcement Learning |
| 2724.3 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 2722 | NoisyNet DQN | Noisy Networks for Exploration |
| 2711.4 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 2674 | DQN | Noisy Networks for Exploration |
| 2436 | A3C | Noisy Networks for Exploration |
| 2311 | DQN | Human-level control through deep reinforcement learning |
| 1692 | Linear | Human-level control through deep reinforcement learning |
| 1227 | Contingency | Human-level control through deep reinforcement learning |
| 307.3 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3908.105 | ACER | RL Baselines Zoo b76641e |
| 2718.5 | ACER | Proximal Policy Optimization Algorithm |
| 2363 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 2255.09 | PPO | RL Baselines Zoo b76641e |
| 2096.5 | PPO | Proximal Policy Optimization Algorithm |
| 2048 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 1824 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 1781.818 | DQN | RL Baselines Zoo b76641e |
| 1739 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 1626.9 | A2C | Proximal Policy Optimization Algorithm |
| 1598.776 | ACKTR | RL Baselines Zoo b76641e |
| 1581.111 | A2C | RL Baselines Zoo b76641e |

