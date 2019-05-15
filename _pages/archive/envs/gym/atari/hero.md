---
layout: page
title: Atari H.E.R.O. Environment
permalink: /envs/gym/atari/hero/

redirect_from:
 - /envs/gym/atari-2600/hero/
 - /env/gym/atari/hero/
 - /env/gym/atari-2600/hero/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/hero.mp4' | absolute_url }}" type="video/mp4">
</video>

The player assumes control of Roderick Hero (sometimes styled as "R. Hero"), a one-man rescue team. Miners working in Mount Leone are trapped, and it's up to Roderick to reach them.

The player is equipped with a backpack-mounted helicopter unit, which allows him to hover and fly, along with a helmet-mounted laser and a limited supply of dynamite. Each level consists of a maze of mine shafts that Roderick must safely navigate in order to reach the miner trapped at the bottom. The backpack has a limited amount of power, so the player must reach the miner before the power supply is exhausted.

Mine shafts may be blocked by cave-ins or magma, which require dynamite to clear. The helmet laser can also destroy cave-ins, but more slowly than dynamite. Unlike a cave-in, magma is lethal when touched. Later levels include walls of magma with openings that alternate between open and closed requiring skillful navigation. The mine shafts are populated by spiders, bats and other unknown creatures that are deadly to the touch; these creatures can be destroyed using the laser or dynamite.

Some deep mines are flooded, forcing players to hover safely above the water. In later levels, monsters strike out from below the water. Some mine sections are illuminated by lanterns. If the lantern is somehow destroyed, the layout of that section becomes invisible. Exploding dynamite lights up the mine for a brief time.

Points are scored for each cave-in cleared and each creature destroyed. When the player reaches the miner, points are awarded for the rescue, along with the amount of power remaining in the backpack and for each remaining stick of dynamite. Extra lives are awarded for every 20,000 points scored.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/H.E.R.O.)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 50496.8 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 32464.1 | A3C FF | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 28889.5 | A3C LSTM | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 28765.8 | A3C FF 1 day | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 28544.2 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 25839.4 | **Human** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 20889.9 | Prioritized DDQN (rank, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 20506.4 | Prioritized DDQN (prop, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 15459.2 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 15341.4 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 15207.9 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 15150.9 | Prioritized DQN (rank) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 14892.5 | DDQN (tuned) | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 12952.5 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 8963.36 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 1580.3 | **Random** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 55887.4 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 43360.4 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 38874 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 35895 | DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 35542.2 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 33860.9 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 33853.15 | IMPALA (shallow) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 33730.55 | IMPALA (deep) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 31533 | NoisyNet DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 30826.4 | **Human** | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 30791 | A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 28386 | IQN | [Implicit Quantile Networks for Distributional Reinforcement Learning](https://arxiv.org/abs/1806.06923) |
| 27833.0 | Reactor ND | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 25762.5 | **Human** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1704.04651) |
| 21785 | QR-DQN-0 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 21395 | QR-DQN-1 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 21036.5 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 20818.2 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 20437.8 | DQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 20357.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 20130.2 | DDQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 19950 | DQN | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1707.06887) |
| 18818.9 | IMPALA (deep, multitask) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 15176 | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 14913.87 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 8471 | NoisyNet A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 7295 | Contingency | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1706.10295) |
| 6459 | Linear | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1706.10295) |
| 6246 | NoisyNet DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1027.0 | **Random** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1706.10295) |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|

