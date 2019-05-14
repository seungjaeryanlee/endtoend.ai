---
layout: page
title: Atari Bowling Environment
permalink: /envs/gym/atari/bowling/

redirect_from:
 - /envs/gym/atari-2600/bowling/
 - /env/gym/atari/bowling/
 - /env/gym/atari-2600/bowling/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/bowling.mp4' | absolute_url }}" type="video/mp4">
</video>

The game is based on the game of bowling, playable by one player or two players alternating.

In all six variations, games last for 10 frames, or turns. At the start of each frame, the current player is given two chances to roll a bowling ball down an alley in an attempt to knock down as many of the ten bowling pins as possible. The bowler (on the left side of the screen) may move up and down his end of the alley to aim before releasing the ball. In four of the game's six variations, the ball can be steered before it hits the pins. Knocking down every pin on the first shot is a strike, while knocking every pin down in both shots is a spare. The player's score is determined by the number of pins knocked down in all 10 frames, as well as the number of strikes and spares acquired.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Bowling_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 146.5 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 76.8 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 69.6 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 65.8 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 65.7 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 62.3 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 58.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 53.95 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 52.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 50.4 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 41.8 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 41.2 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 39.4 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 36.2 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 35.2 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |
| 35.1 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 160.7 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 154.8 | **Human** | Human-level control through deep reinforcement learning |
| 86.5 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 85.3 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 81.8 | C51 | A Distributional Perspective on Reinforcement Learning |
| 81.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 77.2 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 75.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 74.1 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 72 | DuDQN | Noisy Networks for Exploration |
| 71 | NoisyNet DQN | Noisy Networks for Exploration |
| 70.5 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 68.1 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 68 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 65.5 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 62 | DQN | Noisy Networks for Exploration |
| 59.92 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 59.3 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 54.01 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 50.4 | DQN | A Distributional Perspective on Reinforcement Learning |
| 46.7 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 43.9 | Linear | Human-level control through deep reinforcement learning |
| 42.4 | DQN | Human-level control through deep reinforcement learning |
| 42 | NoisyNet A3C | Noisy Networks for Exploration |
| 37 | A3C | Noisy Networks for Exploration |
| 36.4 | Contingency | Human-level control through deep reinforcement learning |
| 35.73 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 31.06 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 30.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 24.3 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 23.1 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 72 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 65.5 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 62 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 57.3 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 40.1 | PPO | Proximal Policy Optimization Algorithm |
| 33.3 | ACER | Proximal Policy Optimization Algorithm |
| 30.1 | A2C | Proximal Policy Optimization Algorithm |

