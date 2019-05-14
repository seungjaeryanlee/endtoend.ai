---
layout: page
title: Atari Chopper Command Environment
permalink: /envs/gym/atari/chopper-command/

redirect_from:
 - /envs/gym/atari-2600/chopper-command/
 - /env/gym/atari/chopper-command/
 - /env/gym/atari-2600/chopper-command/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/chopper-command.mp4' | absolute_url }}" type="video/mp4">
</video>

In Chopper Command the player controls a military helicopter in a desert scenario protecting a convoy of trucks. The goal is to destroy all enemy fighter jets and helicopters that attack the player's helicopter and the friendly trucks traveling below, ending the current wave. The game ends when the player loses all of his or her lives or reaches 999,999 points. A radar, called a Long Range Scanner in the instruction manual, shows all enemies, including those not visible on the main screen.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Chopper_Command)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 10916.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 10150.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 9600.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 8930.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 8058.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 7021.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 6685.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 6604.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 4669.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 4635.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 3784.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 3495.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 3191.75 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 3046.0 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 2483.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 644.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 107779.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 37568 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 28255.0 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 19901.5 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 16836 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 16654.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 15600 | C51 | A Distributional Perspective on Reinforcement Learning |
| 14667 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 13185.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 13136.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 11477 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 11215.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 9881.8 | **Human** | Human-level control through deep reinforcement learning |
| 8893 | NoisyNet DQN | Noisy Networks for Exploration |
| 7561 | NoisyNet A3C | Noisy Networks for Exploration |
| 7388 | DuDQN | Noisy Networks for Exploration |
| 7387.8 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 7271 | DQN | Noisy Networks for Exploration |
| 7138 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 6687 | DQN | Human-level control through deep reinforcement learning |
| 6126.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 5809.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 5285 | A3C | Noisy Networks for Exploration |
| 5036.0 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 5012.0 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 4653.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 4167.5 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 1582 | Linear | Human-level control through deep reinforcement learning |
| 811.0 | **Random** | Human-level control through deep reinforcement learning |
| 16.9 | Contingency | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 5287.7 | ACER | Proximal Policy Optimization Algorithm |
| 3516.3 | PPO | Proximal Policy Optimization Algorithm |
| 2070 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 1460 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 1450 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 1330 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 1171.7 | A2C | Proximal Policy Optimization Algorithm |

