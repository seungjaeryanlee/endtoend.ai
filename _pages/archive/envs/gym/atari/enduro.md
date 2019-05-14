---
layout: page
title: Atari Enduro Environment
permalink: /envs/gym/atari/enduro/

redirect_from:
 - /envs/gym/atari-2600/enduro/
 - /env/gym/atari/enduro/
 - /env/gym/atari-2600/enduro/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/enduro.mp4' | absolute_url }}" type="video/mp4">
</video>

nduro consists of maneuvering a race car in the National Enduro, a long-distance endurance race. The object of the race is to pass a certain number of cars each day. Doing so will allow the player to continue racing for the next day. The driver must avoid other racers and pass 200 cars on the first day, and 300 cars with each following day.

As the time in the game passes, visibility changes as well. When it is night in the game the player can only see the oncoming cars' taillights. As the days progress, cars will become more difficult to avoid as well. Weather and time of day are factors in how to play. During the day the player may drive through an icy patch on the road which would limit control of the vehicle, or a patch of fog may reduce visibility.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Enduro_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 2223.9 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 2133.4 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 2077.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 2061.1 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1884.4 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 1831.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 1265.6 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 1216.6 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 740.2 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 475.9 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 475.6 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 71.04 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| -81.8 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |
| -82.2 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| -82.5 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| -82.5 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3454 | C51 | A Distributional Perspective on Reinforcement Learning |
| 2359 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 2357 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 2355 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 2306.4 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 2259.3 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 2258.2 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 2230.1 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 2224.2 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 2211.3 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 2125.9 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 2064 | DuDQN | Noisy Networks for Exploration |
| 2013 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 1240 | NoisyNet DQN | Noisy Networks for Exploration |
| 1211.8 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 971.28 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 860.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 835 | DQN | Noisy Networks for Exploration |
| 729.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 319.5 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 309.6 | **Human** | Human-level control through deep reinforcement learning |
| 301.8 | DQN | Human-level control through deep reinforcement learning |
| 300 | NoisyNet A3C | Noisy Networks for Exploration |
| 159.4 | Contingency | Human-level control through deep reinforcement learning |
| 129.1 | Linear | Human-level control through deep reinforcement learning |
| 114.9 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 0.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 0.0 | **Random** | Human-level control through deep reinforcement learning |
| 0 | A3C | Noisy Networks for Exploration |
| 0.0 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 0.0 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 758.3 | PPO | Proximal Policy Optimization Algorithm |
| 741 | UCC-I | Trust Region Policy Optimization |
| 699.8 | DQN | RL Baselines Zoo b76641e |
| 661 | DQN2013 Best | Playing Atari with Deep Reinforcement Learning |
| 643.824 | PPO | RL Baselines Zoo b76641e |
| 534.6 | TRPO - single path | Trust Region Policy Optimization |
| 479.75 | DQN | OpenAI Baselines cbd21ef |
| 470 | DQN2013 | Playing Atari with Deep Reinforcement Learning |
| 430.8 | TRPO - vine | Trust Region Policy Optimization |
| 368 | **Human** | Playing Atari with Deep Reinforcement Learning |
| 350.22 | PPO | OpenAI Baselines cbd21ef |
| 207.47 | PPO (MPI) | OpenAI Baselines cbd21ef |
| 159 | Contingency | Playing Atari with Deep Reinforcement Learning |
| 129 | Sarsa | Playing Atari with Deep Reinforcement Learning |
| 106 | HNeat Best | Playing Atari with Deep Reinforcement Learning |
| 91 | HNeat Pixel | Playing Atari with Deep Reinforcement Learning |
| 24.83 | TRPO (MPI) | OpenAI Baselines cbd21ef |
| 0 | **Random** | Playing Atari with Deep Reinforcement Learning |
| 0.0 | A2C | Proximal Policy Optimization Algorithm |
| 0.0 | ACER | Proximal Policy Optimization Algorithm |
| 0.0 | ACKTR | OpenAI Baselines cbd21ef |
| 0.0 | ACER | OpenAI Baselines cbd21ef |
| 0.0 | A2C | OpenAI Baselines cbd21ef |
| 0.0 | A2C | RL Baselines Zoo b76641e |
| 0.0 | ACER | RL Baselines Zoo b76641e |
| 0.0 | ACKTR | RL Baselines Zoo b76641e |

