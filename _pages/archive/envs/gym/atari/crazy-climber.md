---
layout: page
title: Atari Crazy Climber Environment
permalink: /envs/gym/atari/crazy-climber/

redirect_from:
 - /envs/gym/atari-2600/crazy-climber/
 - /env/gym/atari/crazy-climber/
 - /env/gym/atari-2600/crazy-climber/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/crazy-climber.mp4' | absolute_url }}" type="video/mp4">
</video>

In Crazy Climber the player assumes the role of a person attempting to climb to the top of four skyscrapers. The climber is controlled via two joysticks.. There are a number of obstacles and dangers to avoid including:

 * Windows that open and close (the most common danger).
 * Bald-headed residents (a.k.a. Mad Doctors), who throw objects such as flower pots, buckets of water and fruit in an effort to knock the climber off the building (with larger objects appearing by more aggressive Mad Doctors in later levels).
 * A giant condor, who drops eggs and excrement aimed at the climber (two at a time in the early stages, four in later levels).
 * A giant ape (styled like King Kong), whose punch can prove deadly (he becomes more aggressive in later levels).
 * Falling steel girders and iron dumbbells (more numerous in the later levels).
 * Live wires, which protrude off electric signs.
 * Falling 'Crazy Climber' signs.

Some of these dangers appear at every level of the game; others make appearances only in later stages. Should the climber succumb to any one of these dangers, a new climber takes his place at the exact point where he fell; the last major danger is eliminated.

One ally the climber has is a pink "Lucky Balloon"; if he is able to grab it, the climber is transported up 8 stories to a window. The window onto which it drops the climber may be about to close. If the window that the climber is dropped onto is fully closed, the balloon pauses there until the window opens up again. The player does not actually earn bonus points for catching the balloon, but he is awarded the normal 'step value' for each of the eight floors that he passes while holding the balloon.

If the climber is able to ascend to the top of a skyscraper and grabs the runner of a waiting helicopter, he earns a bonus and is transported to another skyscraper, which presents more dangers than the past. The helicopter would only wait about 30 seconds, then fly off.

If the player completes all four skyscrapers, he is taken back to the first skyscraper and the game restarts from the beginning, but the player keeps his score.

The difficulty level of any game was modified to take into account the skill of previous players. Hence if a player pushed the high score up to say 250,000 (needed a really good player), any novice player following would get thoroughly wiped out for several games due to the increased difficulty level, and would have to play until it dropped back down.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Crazy_Climber)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 154416.5 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 143962.0 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 138518.0 | A3C LSTM | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 131086.0 | Prioritized DDQN (prop, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 127853.0 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 127512.0 | Prioritized DDQN (rank, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 124566.0 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 113782.0 | DDQN (tuned) | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 112646.0 | A3C FF | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 109337.0 | Prioritized DQN (rank) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 101624.0 | A3C FF 1 day | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 94315.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 65451.0 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 50992.0 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 32667.0 | **Human** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 9337.0 | **Random** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 236422.0 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 194347 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 181233 | QR-DQN-0 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 179877 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 179082 | IQN | [Implicit Quantile Networks for Distributional Reinforcement Learning](https://arxiv.org/abs/1806.06923) |
| 178355.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 173274.0 | Reactor ND | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 171171 | NoisyNet DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 168788.5 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 163335 | DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 162224.0 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 161196 | QR-DQN-1 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 150444.0 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 143570.0 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 139950 | NoisyNet A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 136950.0 | IMPALA (deep) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 136211.5 | IMPALA (shallow) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 134783 | A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 118305 | NoisyNet DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 117282.0 | DDQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 116480 | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 115384.0 | IMPALA (deep, multitask) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 114103 | DQN | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1802.01561) |
| 110763.0 | DQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 101874.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 85919.16 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 35829.4 | **Human** | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 35410.5 | **Human** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1511.06581) |
| 23411 | Linear | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1511.06581) |
| 10780.5 | **Random** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1511.06581) |
| 149.8 | Contingency | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1511.06581) |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 132461.0 | ACER | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 110202.0 | PPO | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 107770.0 | A2C | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |

