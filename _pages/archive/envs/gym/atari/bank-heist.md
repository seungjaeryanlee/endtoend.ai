---
layout: page
title: Atari Bank Heist Environment
permalink: /envs/gym/atari/bank-heist/

redirect_from:
 - /envs/gym/atari-2600/bank-heist/
 - /env/gym/atari/bank-heist/
 - /env/gym/atari-2600/bank-heist/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/bank-heist.mp4' | absolute_url }}" type="video/mp4">
</video>

Bank Heist is a maze video game developed by 20th Century Fox for the Atari 2600.

Each level in Bank Heist is a maze-like city (similar to Pac-Man). The objective of the game is to rob as many banks as possible while avoiding the police. The player controls a car called the Getaway Car. The car has a limited amount of fuel, which can be refilled by changing cities. Robbing a bank will cause a cop car to appear, as well as another bank. Up to three cars can be present in a city at a time. Cars can be destroyed by dropping dynamite out the tail pipe of the Getaway Car (however, dynamite can also destroy the Getaway Car). The player starts out with four spare cars (lives). Lives are lost by running out of fuel, being hit by dynamite, or hitting a cop car. If the player can rob nine banks in one city, an extra car is earned.

The left and right difficulty switches alter how hard the game is. When the left difficulty switch is set to A, the cop cars are smarter in catching the Getaway Car; when it's set to B, enemy cars move in a more set pattern. When the right difficulty switch is set to A, the banks appear in random spots; when the switch is set to B, the banks appear in preset locations.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Bank_Heist_%28Atari_2600%29)*

## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 1129.3 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1004.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 970.1 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 946.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 932.8 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 886.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 876.6 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 835.6 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 826.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 823.7 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 816.8 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 644.5 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 469.8 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 399.42 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 176.3 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 21.7 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 1611.9 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1503.1 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1428 | DuDQN | Noisy Networks for Exploration |
| 1416 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 1358.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1318 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 1296 | A3C | Noisy Networks for Exploration |
| 1289.7 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 1259.7 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1249 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 1245 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 1236.8 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1223.15 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1200.35 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1068 | NoisyNet DQN | Noisy Networks for Exploration |
| 1056.7 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1033 | NoisyNet A3C | Noisy Networks for Exploration |
| 1030.6 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 988.7 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 976 | C51 | A Distributional Perspective on Reinforcement Learning |
| 753.1 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 734.4 | **Human** | Human-level control through deep reinforcement learning |
| 728.3 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 609.0 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 455.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 455 | DQN | Noisy Networks for Exploration |
| 429.7 | DQN | Human-level control through deep reinforcement learning |
| 190.8 | Linear | Human-level control through deep reinforcement learning |
| 67.4 | Contingency | Human-level control through deep reinforcement learning |
| 55.15 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 14.2 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 1280.6 | PPO | Proximal Policy Optimization Algorithm |
| 1177.5 | ACER | Proximal Policy Optimization Algorithm |
| 1095.3 | A2C | Proximal Policy Optimization Algorithm |

