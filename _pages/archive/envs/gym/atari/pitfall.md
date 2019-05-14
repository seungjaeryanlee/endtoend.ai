---
layout: page
title: Atari Pit Fall Environment
permalink: /envs/gym/atari/pitfall/

redirect_from:
 - /envs/gym/atari-2600/pit-fall/
 - /env/gym/atari/pit-fall/
 - /env/gym/atari-2600/pit-fall/
 - /envs/gym/atari/pit-fall/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/pitfall.mp4' | absolute_url }}" type="video/mp4">
</video>

The player controls the character (Pitfall Harry) through a maze-like jungle in an attempt to recover 32 treasures in a 20-minute time period. Along the way, players must maneuver through numerous hazards, including pits, quicksand, rolling logs, fire, rattlesnakes, scorpions, and crocodiles. Harry may jump over or otherwise avoid these obstacles by climbing, running, or swinging on vines. Treasure includes bags of money, gold and silver bars, and diamond rings, which range in value from 2000 to 5000 points in 1000 point increments. There are eight of each treasure type, with 32 in total. A perfect score of 114,000 is achieved by claiming all 32 treasures without losing any points. Points are deducted by either falling in a hole (100 points) or touching logs; point loss depends on how long contact is made with the log. Under the jungle there is a tunnel which Harry can access through ladders found at various points. Traveling though the tunnel moves forward three screens at a time, which is necessary in order to collect all the treasures within the time limit. However, the tunnels are filled with dead-ends blocked by brick walls, forcing the player to return to the surface at one of the ladders, and try to find a way around again, thus wasting time. The tunnels also contain scorpions. The player loses a life if Harry comes in contact with any obstacle (except logs) or falls into a tar pit, quicksand, waterhole, or mouth of a crocodile. The game ends when either all 32 treasures have been collected, all three lives have been lost, or the time has run out.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Pitfall!)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 5998.9 | **Human** | Deep Reinforcement Learning with Double Q-learning |
| 5998.9 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| -14.8 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| -37.6 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -46.9 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| -78.5 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| -113.2 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -123.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| -135.7 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| -186.7 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| -193.7 | Prioritized DQN (rank) | Prioritized Experience Replay |
| -243.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| -342.8 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -348.8 | **Random** | Deep Reinforcement Learning with Double Q-learning |
| -427.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| -432.9 | DDQN | Deep Reinforcement Learning with Double Q-learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 6463.7 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 0.0 | C51 | A Distributional Perspective on Reinforcement Learning |
| 0.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 0.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 0 | DQN | Noisy Networks for Exploration |
| 0 | NoisyNet DQN | Noisy Networks for Exploration |
| 0 | A3C | Noisy Networks for Exploration |
| 0 | NoisyNet A3C | Noisy Networks for Exploration |
| 0 | DuDQN | Noisy Networks for Exploration |
| 0 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 0.0 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 0.0 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 0.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 0.0 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| -1.1 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| -1.22 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| -1.66 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| -2.1 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -3.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| -3.7 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| -8.9 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| -11.14 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| -29.9 | DDQN | A Distributional Perspective on Reinforcement Learning |
| -229.4 | **Random** | Dueling Network Architectures for Deep Reinforcement Learning |
| -286.1 | DQN | A Distributional Perspective on Reinforcement Learning |
| -286.1 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 0 | Dynamics | Exploration by Random Network Distillation |
| 0 | PPO | Exploration by Random Network Distillation |
| -3 | RND | Exploration by Random Network Distillation |
| -16.9 | ACER | Proximal Policy Optimization Algorithm |
| -32.9 | PPO | Proximal Policy Optimization Algorithm |
| -55.0 | A2C | Proximal Policy Optimization Algorithm |

