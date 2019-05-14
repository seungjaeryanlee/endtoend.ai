---
layout: page
title: Atari Asterix Environment
permalink: /envs/gym/atari/asterix/

redirect_from:
 - /envs/gym/atari-2600/asterix/
 - /env/gym/atari/asterix/
 - /env/gym/atari-2600/asterix/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/asterix.mp4' | absolute_url }}" type="video/mp4">
</video>

Asterix (Taz) was released by Atari in 1983 for the Atari 2600 and features the Looney Tunes character the Tasmanian Devil in a food frenzy. Within the game, Taz only appears as a tornado. The same game was released outside the United States featuring Asterix instead of Taz.

The gameplay is rather simple. The player guides Taz between the stage lines in order to eat hamburgers and avoid the dynamites. The game does not use any buttons and the difficulty increases by increasing the speed of the objects on screen. As the game progresses, the burgers may change into other edible or drinkable objects such as beer kegs, hot dogs, etc. There are not many sound effects in the game except a blipping sound when the player hits an edible object and another sound that resembles of explosion when the player hits dynamite.

*Description from [RetroGames](https://www.retrogames.cz/play_386-Atari2600.php)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 395599.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 364200.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 280114.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 31907.5 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 22484.5 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 22140.5 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 17244.5 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 16837.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 15840.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 9199.5 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 7536.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 6723.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 5285.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 3324.7 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 164.5 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |
| 124.5 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 454461 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 428200.3 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 406211 | C51 | A Distributional Perspective on Reinforcement Learning |
| 400529.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 375080.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 342016 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 300732.0 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 261025 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 205914.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 36238.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 32478 | NoisyNet A3C | Noisy Networks for Exploration |
| 31583.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 29692.5 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 28350 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 28188.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 17356.5 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 16121.0 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 15150.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 14328 | NoisyNet DQN | Noisy Networks for Exploration |
| 11170 | DuDQN | Noisy Networks for Exploration |
| 8503.3 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 8503.3 | **Human** | Human-level control through deep reinforcement learning |
| 6822 | A3C | Noisy Networks for Exploration |
| 6433.33 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 6253 | DQN | Noisy Networks for Exploration |
| 6012 | DQN | Human-level control through deep reinforcement learning |
| 4359.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 2609.0 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1332 | Contingency | Human-level control through deep reinforcement learning |
| 987.3 | Linear | Human-level control through deep reinforcement learning |
| 210.0 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 6801.2 | ACER | Proximal Policy Optimization Algorithm |
| 4532.5 | PPO | Proximal Policy Optimization Algorithm |
| 3176.3 | A2C | Proximal Policy Optimization Algorithm |

