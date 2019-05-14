---
layout: page
title: Atari Seaquest Environment
permalink: /envs/gym/atari/seaquest/

redirect_from:
 - /envs/gym/atari-2600/seaquest/
 - /env/gym/atari/seaquest/
 - /env/gym/atari-2600/seaquest/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/seaquest.mp4' | absolute_url }}" type="video/mp4">
</video>

Seaquest is an underwater shooter in which the player controls a submarine. Enemies include sharks and submarines. The player must ward off the enemies while trying to rescue divers swimming through the water. The sub can hold up to eight divers at a time. Each time the player resurfaces, all rescued divers are emptied out in exchange for points. To add to the challenge, the submarine has a limited amount of oxygen. The player must surface often in order to replenish the oxygen, but if the player resurfaces without any rescued divers, they will lose a life. If the player resurfaces with the maximum amount of divers, they will gain bonus points for the sub's remaining oxygen. Each time the player surfaces, the game's difficulty increases; enemies increase in number and speed. Eventually an enemy sub begins patrolling the surface, leaving the player without a safe haven.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Seaquest_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 40425.8 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 39096.7 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 37361.6 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 25463.7 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 19176.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 14498.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 11848.8 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 10145.85 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 4199.4 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 3275.4 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 2793.9 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 2355.4 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 2300.2 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 1431.2 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1326.1 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 215.5 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 266434 | C51 | A Distributional Perspective on Reinforcement Learning |
| 50254.2 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 50254.2 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 42054.7 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 30140 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 20994.1 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 20181.8 | **Human** | Human-level control through deep reinforcement learning |
| 19595 | DuDQN | Noisy Networks for Exploration |
| 16754 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 15898.9 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 13169.06 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 8425.8 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 8268 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 7995.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 5860.6 | DQN | A Distributional Perspective on Reinforcement Learning |
| 5286 | DQN | Human-level control through deep reinforcement learning |
| 5071.6 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 4754.4 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 4163 | DQN | Noisy Networks for Exploration |
| 2680 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 2282 | NoisyNet DQN | Noisy Networks for Exploration |
| 1776.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 1754.0 | A2C | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 1753.2 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1744 | A3C | Noisy Networks for Exploration |
| 1716.9 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 943 | NoisyNet A3C | Noisy Networks for Exploration |
| 931.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 844.6 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 810.4 | TRPO | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 675.5 | Contingency | Human-level control through deep reinforcement learning |
| 664.8 | Linear | Human-level control through deep reinforcement learning |
| 68.4 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 28010 | **Human** | Playing Atari with Deep Reinforcement Learning |
| 2995 | UCC-I | Trust Region Policy Optimization |
| 1948.571 | DQN | RL Baselines Zoo b76641e |
| 1908.6 | TRPO - single path | Trust Region Policy Optimization |
| 1782.687 | PPO | RL Baselines Zoo b76641e |
| 1740 | DQN2013 Best | Playing Atari with Deep Reinforcement Learning |
| 1739.5 | ACER | Proximal Policy Optimization Algorithm |
| 1714.3 | A2C | Proximal Policy Optimization Algorithm |
| 1705 | DQN2013 | Playing Atari with Deep Reinforcement Learning |
| 1672.239 | ACKTR | RL Baselines Zoo b76641e |
| 1383.38 | PPO (MPI) | OpenAI Baselines cbd21ef |
| 1218.87 | PPO | OpenAI Baselines cbd21ef |
| 1204.5 | PPO | Proximal Policy Optimization Algorithm |
| 1201.16 | ACKTR | OpenAI Baselines cbd21ef |
| 1164.08 | DQN | OpenAI Baselines cbd21ef |
| 1150.66 | A2C | OpenAI Baselines cbd21ef |
| 1065.98 | ACER | OpenAI Baselines cbd21ef |
| 920 | HNeat Best | Playing Atari with Deep Reinforcement Learning |
| 872.121 | ACER | RL Baselines Zoo b76641e |
| 800 | HNeat Pixel | Playing Atari with Deep Reinforcement Learning |
| 788.4 | TRPO - vine | Trust Region Policy Optimization |
| 746.42 | A2C | RL Baselines Zoo b76641e |
| 723 | Contingency | Playing Atari with Deep Reinforcement Learning |
| 710.07 | TRPO (MPI) | OpenAI Baselines cbd21ef |
| 665 | Sarsa | Playing Atari with Deep Reinforcement Learning |
| 110 | **Random** | Playing Atari with Deep Reinforcement Learning |

