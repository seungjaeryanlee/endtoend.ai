---
layout: page
title: Atari Name This Game Environment
permalink: /envs/gym/atari/name-this-game/

redirect_from:
 - /envs/gym/atari-2600/name-this-game/
 - /env/gym/atari/name-this-game/
 - /env/gym/atari-2600/name-this-game/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/name-this-game.mp4' | absolute_url }}" type="video/mp4">
</video>

In the game, the player controls a scuba diver who must protect a treasure from an octopus at the top of the screen: The octopus tries to capture the treasure with its tentacles. Meanwhile, a great white shark tries to distract the diver by swimming back and forth toward the bottom of the screen.

The diver loses a life if he is captured by the shark or the octopus's tentacles, or if the air meter runs out. The diver can refill his air meter by touching a long pole which extends from a boat that appears from time to time.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Name_This_Game)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 13637.9 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 12093.7 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 11836.1 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 11686.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 11382.3 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 11185.1 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 10497.6 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 10476.1 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 9238.5 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 8960.3 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 8738.5 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 7871.5 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 6796.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 5614.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 5439.9 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 1747.8 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 22682 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 21890 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 21537.2 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 17557 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 15572.5 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 13136.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 12983.6 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 12636.5 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 12542 | C51 | A Distributional Perspective on Reinforcement Learning |
| 12211 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 11971.1 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 10616.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 9919 | DuDQN | Noisy Networks for Exploration |
| 9907.2 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 9543.8 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 8798 | NoisyNet A3C | Noisy Networks for Exploration |
| 8207.8 | DQN | A Distributional Perspective on Reinforcement Learning |
| 8181 | NoisyNet DQN | Noisy Networks for Exploration |
| 8179 | DQN | Noisy Networks for Exploration |
| 8049.0 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 7257 | DQN | Human-level control through deep reinforcement learning |
| 7168 | A3C | Noisy Networks for Exploration |
| 6997.1 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 6182.16 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 6049.55 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 5719.3 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 4076.2 | **Human** | Human-level control through deep reinforcement learning |
| 2500 | Linear | Human-level control through deep reinforcement learning |
| 2292.3 | **Random** | Human-level control through deep reinforcement learning |
| 2247 | Contingency | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 8488.0 | ACER | Proximal Policy Optimization Algorithm |
| 6254.9 | PPO | Proximal Policy Optimization Algorithm |
| 5961.2 | A2C | Proximal Policy Optimization Algorithm |

