---
layout: page
title: Atari River Raid Environment
permalink: /envs/gym/atari/riverraid/

redirect_from:
 - /envs/gym/atari-2600/river-raid/
 - /env/gym/atari/river-raid/
 - /env/gym/atari-2600/river-raid/
 - /envs/gym/atari/river-raid/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/riverraid.mp4' | absolute_url }}" type="video/mp4">
</video>

Viewed from a top-down perspective, the player flies a fighter jet over the River of No Return in a raid behind enemy lines. The player's jet can only move left and right—it cannot maneuver up and down the screen—but it can accelerate and decelerate. The player's jet crashes if it collides with the riverbank or an enemy craft, or if the jet runs out of fuel. Assuming fuel can be replenished, and if the player evades damage, gameplay is essentially unlimited.

The player scores points for shooting enemy tankers (30 pts), helicopters (60 pts), fuel depots (80 pts), jets (100 pts), and bridges (500 pts). The jet refuels when it flies over a fuel depot. A bridge marks the end of a game level. Non-Atari 2600 ports of the game add hot air balloons that are worth 60 points when shot as well as tanks along the sides of the river that shoot at the player's jet.

Destroying bridges also serve as the game's checkpoints. If the player crashes the plane they will start their next life at the last destroyed bridge.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/River_Raid)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 18184.4 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 16569.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 16496.8 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 14382.2 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 12201.8 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 11807.2 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 10838.4 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 10205.5 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 10001.2 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 6591.9 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 6579.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 5310.27 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 4065.3 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 588.3 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 29608.05 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 23134 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 21162.6 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 21162.6 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 20607.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 18405 | DuDQN | Noisy Networks for Exploration |
| 17765 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 17762.8 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 17571 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 17401.9 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 17380.7 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 17322 | C51 | A Distributional Perspective on Reinforcement Learning |
| 17118.0 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 16957.3 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 16608.3 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 13513.3 | **Human** | Human-level control through deep reinforcement learning |
| 12015.3 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 9425 | NoisyNet DQN | Noisy Networks for Exploration |
| 9336 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 8344.83 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 8316 | DQN | Human-level control through deep reinforcement learning |
| 8135 | A3C | Noisy Networks for Exploration |
| 7878 | NoisyNet A3C | Noisy Networks for Exploration |
| 7377.6 | DQN | A Distributional Perspective on Reinforcement Learning |
| 7241 | DQN | Noisy Networks for Exploration |
| 2850.15 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 2650 | Contingency | Human-level control through deep reinforcement learning |
| 1904 | Linear | Human-level control through deep reinforcement learning |
| 1338.5 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 9125.1 | ACER | Proximal Policy Optimization Algorithm |
| 8393.6 | PPO | Proximal Policy Optimization Algorithm |
| 7653.5 | A2C | Proximal Policy Optimization Algorithm |

