---
layout: page
title: Atari Pong Environment
permalink: /envs/gym/atari/pong/

redirect_from:
 - /envs/gym/atari-2600/pong/
 - /env/gym/atari/pong/
 - /env/gym/atari-2600/pong/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/pong.mp4' | absolute_url }}" type="video/mp4">
</video>

Pong is a two-dimensional sports game that simulates table tennis. The player controls an in-game paddle by moving it vertically across the left or right side of the screen. They can compete against another player controlling a second paddle on the opposing side. Players use the paddles to hit a ball back and forth. The goal is for each player to reach eleven points before the opponent; points are earned when one fails to return the ball to the other.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Pong)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 19.1 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 19.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 18.9 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 18.9 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 18.9 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 18.8 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 18.7 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 18.4 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 17.7 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 16.71 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 16.2 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 15.5 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 11.4 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 10.7 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 5.6 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| -18.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 21.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 21.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 21 | NoisyNet DQN | Noisy Networks for Exploration |
| 21 | DuDQN | Noisy Networks for Exploration |
| 21 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 21.0 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 21.0 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 21.0 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 20.98 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 20.9 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 20.9 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 20.9 | C51 | A Distributional Perspective on Reinforcement Learning |
| 20.9 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 20.9 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 20.8 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 20.7 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 20.7 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 20.6 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 20.4 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 20 | DQN | Noisy Networks for Exploration |
| 19.9 | A2C | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 19.5 | DQN | A Distributional Perspective on Reinforcement Learning |
| 18.9 | DQN | Human-level control through deep reinforcement learning |
| 18.3 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 14.6 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 12 | NoisyNet A3C | Noisy Networks for Exploration |
| 9.3 | **Human** | Human-level control through deep reinforcement learning |
| 8.58 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 7 | A3C | Noisy Networks for Exploration |
| -1.2 | TRPO | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| -17.4 | Contingency | Human-level control through deep reinforcement learning |
| -19 | Linear | Human-level control through deep reinforcement learning |
| -20.7 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 21 | DQN2013 Best | Playing Atari with Deep Reinforcement Learning |
| 21 | UCC-I | Trust Region Policy Optimization |
| 21.0 | DQN | RL Baselines Zoo b76641e |
| 20.9 | TRPO - single path | Trust Region Policy Optimization |
| 20.9 | TRPO - vine | Trust Region Policy Optimization |
| 20.7 | ACER | Proximal Policy Optimization Algorithm |
| 20.7 | PPO | Proximal Policy Optimization Algorithm |
| 20.667 | ACER | RL Baselines Zoo b76641e |
| 20.507 | PPO | RL Baselines Zoo b76641e |
| 20 | DQN2013 | Playing Atari with Deep Reinforcement Learning |
| 19.7 | A2C | Proximal Policy Optimization Algorithm |
| 19.224 | ACKTR | RL Baselines Zoo b76641e |
| 19 | HNeat Best | Playing Atari with Deep Reinforcement Learning |
| 18.973 | A2C | RL Baselines Zoo b76641e |
| 16.49 | DQN | OpenAI Baselines cbd21ef |
| 13.9 | PPO (MPI) | OpenAI Baselines cbd21ef |
| 13.68 | PPO | OpenAI Baselines cbd21ef |
| 12.1 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 9.56 | ACKTR | OpenAI Baselines cbd21ef |
| 3.11 | ACER | OpenAI Baselines cbd21ef |
| 2.82 | TRPO (MPI) | OpenAI Baselines cbd21ef |
| 1.0 | A2C | OpenAI Baselines cbd21ef |
| -3 | **Human** | Playing Atari with Deep Reinforcement Learning |
| -9.9 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| -16 | HNeat Pixel | Playing Atari with Deep Reinforcement Learning |
| -17 | Contingency | Playing Atari with Deep Reinforcement Learning |
| -19 | Sarsa | Playing Atari with Deep Reinforcement Learning |
| -20.4 | **Random** | Playing Atari with Deep Reinforcement Learning |

