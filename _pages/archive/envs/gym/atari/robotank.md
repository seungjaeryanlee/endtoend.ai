---
layout: page
title: Atari Robotank Environment
permalink: /envs/gym/atari/robotank/

redirect_from:
 - /envs/gym/atari-2600/robotank/
 - /env/gym/atari/robotank/
 - /env/gym/atari-2600/robotank/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/robotank.mp4' | absolute_url }}" type="video/mp4">
</video>

The player remotely controls a robot tank in 2019. The mission is to locate enemy rebel tanks rampaging across the countryside with radar, then destroy them with a cannon to stop them from reaching downtown Santa Clara, California, United States. The enemy is organized into squadrons of 12 tanks each. By defeating an enemy squadron, the player earns an additional reserve tank to the initial three, to a maximum of 12. The game ends when all of a player's tanks are destroyed.

As the player's tank is damaged, firepower and/or visual display capabilities are irreparably worsened. Enough damage will eventually destroy a tank. Combat can take place at any time of day or night (displayed on-screen), possibly with rain, snow, or fog (announced in a weather report each morning), which adds additional challenge in tracking enemy combatants by radar alone.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Robot_Tank)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 62.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 61.78 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 59.1 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 58.5 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 56.2 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 55.4 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 55.2 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 52.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 51.3 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 49.8 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 32.8 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 24.7 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 8.9 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 2.6 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 2.4 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |
| 2.3 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 71.8 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 70.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 68.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 65.3 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 65.3 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 64 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 63.9 | DQN | A Distributional Perspective on Reinforcement Learning |
| 63 | DuDQN | Noisy Networks for Exploration |
| 62.5 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 61.4 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 61.1 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 59.4 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 55 | DQN | Noisy Networks for Exploration |
| 54.2 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 52.3 | C51 | A Distributional Perspective on Reinforcement Learning |
| 51.6 | DQN | Human-level control through deep reinforcement learning |
| 51 | NoisyNet DQN | Noisy Networks for Exploration |
| 46.7 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 36.43 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 36 | NoisyNet A3C | Noisy Networks for Exploration |
| 28.7 | Linear | Human-level control through deep reinforcement learning |
| 27.5 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 16.5 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 12.96 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 12.4 | Contingency | Human-level control through deep reinforcement learning |
| 11.9 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 11.9 | **Human** | Human-level control through deep reinforcement learning |
| 9.94 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 6 | A3C | Noisy Networks for Exploration |
| 2.3 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 2.2 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 5.5 | PPO | Proximal Policy Optimization Algorithm |
| 2.5 | ACER | Proximal Policy Optimization Algorithm |
| 2.2 | A2C | Proximal Policy Optimization Algorithm |

