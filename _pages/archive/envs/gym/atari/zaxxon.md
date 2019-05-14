---
layout: page
title: Atari Zaxxon Environment
permalink: /envs/gym/atari/zaxxon/

redirect_from:
 - /envs/gym/atari-2600/zaxxon/
 - /env/gym/atari/zaxxon/
 - /env/gym/atari-2600/zaxxon/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/zaxxon.mp4' | absolute_url }}" type="video/mp4">
</video>

he object of the game is to hit as many targets as possible without being shot down or running out of fuel—which can be replenished, paradoxically, by blowing up fuel drums.[19]

There are two fortresses to fly through, with an outer space segment between them. At the end of the second fortress is a boss in the form of the Zaxxon robot.

The player's ship casts a shadow to indicate its height.[20] An altimeter is also displayed; in space there is nothing for the ship to cast a shadow on.[21] The walls at the entrance and exit of each fortress have openings that the ship must be at the right altitude to pass through. Within each fortress are additional walls that the ship's shadow and altimeter aid in flying over successfully.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Zaxxon)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 24622.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 23519.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 19658.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 15130.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 11320.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 10164.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 9501.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 9474.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 8593.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 8443.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 7874.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 6159.4 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 5901.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 2659.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 831.0 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 475.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 32935.5 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 27582.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 25215.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 22209.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 21772 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 18347.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 17448.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 16544 | A3C | Noisy Networks for Exploration |
| 16525.0 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 14874 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 13959 | DuDQN | Noisy Networks for Exploration |
| 13886.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 13112 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 12944.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 12944.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 10513 | C51 | A Distributional Perspective on Reinforcement Learning |
| 10182.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 9173.3 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 9173.3 | **Human** | Human-level control through deep reinforcement learning |
| 7200 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 7129.33 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 6920 | NoisyNet DQN | Noisy Networks for Exploration |
| 6497.0 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 5363.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 4977 | DQN | Human-level control through deep reinforcement learning |
| 4806 | DQN | Noisy Networks for Exploration |
| 3365 | Linear | Human-level control through deep reinforcement learning |
| 1324 | NoisyNet A3C | Noisy Networks for Exploration |
| 1148.5 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 32.5 | **Random** | Human-level control through deep reinforcement learning |
| 21.4 | Contingency | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 5008.7 | PPO | Proximal Policy Optimization Algorithm |
| 29.0 | ACER | Proximal Policy Optimization Algorithm |
| 16.3 | A2C | Proximal Policy Optimization Algorithm |

