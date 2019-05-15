---
layout: page
title: Atari Montezuma's Revenge Environment
permalink: /envs/gym/atari/montezuma-revenge/

redirect_from:
 - /envs/gym/atari-2600/montezumas-revenge/
 - /env/gym/atari/montezumas-revenge/
 - /env/gym/atari-2600/montezumas-revenge/
 - /envs/gym/atari/montezumas-revenge/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/montezuma-revenge.mp4' | absolute_url }}" type="video/mp4">
</video>

Montezuma's Revenge is an early example of the Metroidvania genre. The player controls a character called Panama Joe (a.k.a. Pedro), moving him from room to room in the labyrinthine underground pyramid of the 16th century Aztec temple of emperor Montezuma II, filled with enemies, obstacles, traps, and dangers. The objective is to score points by gathering jewels and killing enemies along the way. Panama Joe must find keys to open doors, collect and use equipment such as torches, swords, amulets, etc., and avoid or defeat the challenges in his path. Obstacles are laser gates, conveyor belts, disappearing floors and fire pits.

Movement is achieved by jumping, running, sliding down poles, and climbing chains and ladders. Enemies are skulls, snakes, and spiders. A further complication arises in the bottom-most floors of each pyramid, which must be played in total darkness unless a torch is found.

The pyramid is nine floors deep, not counting the topmost entry room that the player drops into at the start of each level, and has 99 rooms to explore. The goal is to reach the Treasure Chamber, whose entrance is in the center room of the lowest level. After jumping in here, the player has a short time to jump from one chain to another and pick up as many jewels as possible. However, jumping onto a fireman's pole will immediately take the player to the next level; when time runs out, the player is automatically thrown onto the pole.

There are nine difficulty levels in all. Though the basic layout of the pyramid remains the same from one level to the next, small changes in details force the player to rethink strategy. These changes include:

 * Blocking or opening up certain paths (by adding/removing walls or ladders)
 * Adding enemies and obstacles
 * Rearrangement of items
 * More dark rooms and fewer torches (in level 9, the entire pyramid is dark)
 * Enemies that do not disappear after they kill Panama Joe (starting with level 5)
 * The player can reach only the left half of the pyramid in level 1, and only the right half in level 2. Starting with level 3, the entire pyramid is open for exploration.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Montezuma%27s_Revenge_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 4182.0 | **Human** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 154.0 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 130.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 84.0 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 67.0 | A3C FF | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 53.0 | A3C FF 1 day | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 51.0 | Prioritized DDQN (rank, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 50.0 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 44.0 | Prioritized DQN (rank) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 42.0 | DDQN (tuned) | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 41.0 | A3C LSTM | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 30.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 25.0 | **Random** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 24.0 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 22.0 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 13.0 | Prioritized DDQN (prop, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 4753.3 | **Human** | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 4366.7 | **Human** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1511.06581) |
| 2643.5 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 2643.5 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 384.0 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 367.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 259 | Contingency | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1710.02298) |
| 75.0 | QR-DQN-0 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 57 | NoisyNet DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 14 | A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 10.7 | Linear | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1706.10295) |
| 4.16 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 4 | NoisyNet A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 3 | NoisyNet DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 2 | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 0.0 | DQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 0.0 | DDQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 0.0 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 0.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 0.0 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 0.0 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 0.0 | **Random** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1511.06581) |
| 0 | DQN | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1511.06581) |
| 0 | DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 0.0 | QR-DQN-1 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 0.0 | Reactor ND | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 0.0 | IMPALA (deep, multitask) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 0.0 | IMPALA (shallow) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 0.0 | IMPALA (deep) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 0.0 | IQN | [Implicit Quantile Networks for Distributional Reinforcement Learning](https://arxiv.org/abs/1806.06923) |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 8152 | RND | [Exploration by Random Network Distillation](https://arxiv.org/abs/1810.12894) |
| 2497 | PPO | [Exploration by Random Network Distillation](https://arxiv.org/abs/1810.12894) |
| 400 | Dynamics | [Exploration by Random Network Distillation](https://arxiv.org/abs/1810.12894) |
| 42.0 | PPO | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 0.3 | ACER | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 0.0 | A2C | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |

