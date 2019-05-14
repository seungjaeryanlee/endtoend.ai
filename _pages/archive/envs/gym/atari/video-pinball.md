---
layout: page
title: Atari Video Pinball Environment
permalink: /envs/gym/atari/video-pinball/

redirect_from:
 - /envs/gym/atari-2600/video-pinball/
 - /env/gym/atari/video-pinball/
 - /env/gym/atari-2600/video-pinball/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/video-pinball.mp4' | absolute_url }}" type="video/mp4">
</video>

Video Pinball is a loosesimulation of a pinball machine: ball shooter, flippers, bumpers and spinners. It includes a unique rollover bonus with an Atari Inc. logo on the playfield; hitting the logo four times results in an extra ball.

Most of the game play involves learning how to perform specific functions, such as launching the ball or activating the flippers, with the Atari joystick. Moving the joystick controller down pulls the pinball machine plunger back while pressing the joystick button shoots the ball into the playfield. The left and right flippers are activated by moving the joystick controller left or right. The ball can be nudged (as in nudging a table gently in real life) by holding down the joystick button and moving the controller in a particular direction.


*Description from [Wikipedia](https://en.wikipedia.org/wiki/Video_Pinball_(1980_video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 506817.2 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 470310.5 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 455052.7 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 447408.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 374886.9 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 367823.7 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 331628.1 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 295972.8 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 214925.3 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 185852.6 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 148883.6 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 112093.37 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 110976.2 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 20452.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |
| 20228.1 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 15641.1 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 949604 | C51 | A Distributional Perspective on Reinforcement Learning |
| 876503 | DuDQN | Noisy Networks for Exploration |
| 870954 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 705662 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 701779 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 698045 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 572898.27 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 533936.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 496101.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 479197.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 478646.7 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 469366 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 429936 | DQN | Noisy Networks for Exploration |
| 322507 | NoisyNet DQN | Noisy Networks for Exploration |
| 294724 | NoisyNet A3C | Noisy Networks for Exploration |
| 261720.2 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 229402 | A3C | Noisy Networks for Exploration |
| 228642.52 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 196760.4 | DQN | A Distributional Perspective on Reinforcement Learning |
| 157550.21 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 100496.6 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 98209.5 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 98209.5 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 70009.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 42684 | DQN | Human-level control through deep reinforcement learning |
| 20125.14 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 19761 | Contingency | Human-level control through deep reinforcement learning |
| 17667.9 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 17297.6 | **Human** | Human-level control through deep reinforcement learning |
| 16871 | Linear | Human-level control through deep reinforcement learning |
| 16256.9 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 156226.6 | ACER | Proximal Policy Optimization Algorithm |
| 37389.0 | PPO | Proximal Policy Optimization Algorithm |
| 19735.9 | A2C | Proximal Policy Optimization Algorithm |

