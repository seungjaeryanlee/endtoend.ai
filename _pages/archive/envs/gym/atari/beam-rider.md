---
layout: page
title: Atari Beam Rider Environment
permalink: /envs/gym/atari/beam-rider/

redirect_from:
 - /envs/gym/atari-2600/beam-rider/
 - /env/gym/atari/beam-rider/
 - /env/gym/atari-2600/beam-rider/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/beam-rider.mp4' | absolute_url }}" type="video/mp4">
</video>

Beamrider takes place above Earth's atmosphere, where a large alien shield called the Restrictor Shield surrounds the Earth. The player's objective is to clear the Shield's 99 sectors of alien craft while piloting the Beamrider ship. The Beamrider is equipped with a short-range laser lariat and a limited supply of torpedoes. The player is given three at the start of each sector.

To clear a sector, fifteen enemy ships must be destroyed. A "Sentinel ship" will then appear, which can be destroyed using a torpedo (if any remain) for bonus points. Some enemy ships can only be destroyed with torpedoes, and some must simply be dodged. Occasionally during a sector, "Yellow Rejuvenators" (extra lives) appear. They can be picked up for an extra ship, but if they are shot they will transform into ship-damaging debris.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Beamrider)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 37412.2 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 31181.3 | Prioritized DDQN (rank, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 26172.7 | Prioritized DDQN (prop, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 24622.2 | A3C LSTM | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 22707.9 | A3C FF | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 21768.5 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 17417.2 | DDQN (tuned) | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 15002.4 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 14961.0 | **Human** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 14591.3 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 13235.9 | A3C FF 1 day | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 12041.9 | Prioritized DQN (rank) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 9107.9 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 8672.4 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 3822.07 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 254.6 | **Random** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 42776 | IQN | [Implicit Quantile Networks for Distributional Reinforcement Learning](https://arxiv.org/abs/1806.06923) |
| 34821 | QR-DQN-1 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 32463.47 | IMPALA (deep) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 30276.5 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 24919 | QR-DQN-0 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 20793 | NoisyNet DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 18501 | NoisyNet DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 16926.5 | **Human** | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 16850.2 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 16298 | DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 14074 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 13772.8 | DDQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 13581.4 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 13213.4 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 12164.0 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 11237 | NoisyNet A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 11033.4 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 10564 | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 9214 | A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 8811.8 | Reactor ND | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 8627.5 | DQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 8566.5 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 8219.92 | IMPALA (shallow) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 8148.1 | A2C | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 7654.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 6846 | DQN | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 5774.7 | **Human** | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 3302.91 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 1743 | Contingency | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 929.4 | Linear | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 698.36 | IMPALA (deep, multitask) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 670.0 | TRPO | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 363.9 | **Random** | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 7456 | **Human** | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 6923 | DQN Ours | [Deep Recurrent Q-Learning for Partially Observable MDPs](https://arxiv.org/abs/1507.06527) |
| 5702 | UCC-I | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 5184 | DQN2013 Best | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 4092 | DQN2013 | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 3863.3 | ACER | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 3760.976 | ACKTR | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |
| 3616 | HNeat Best | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 3269 | DRQN | [Deep Recurrent Q-Learning for Partially Observable MDPs](https://arxiv.org/abs/1507.06527) |
| 3031.7 | A2C | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 2809.115 | A2C | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |
| 2440.692 | ACER | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |
| 2171.19 | ACKTR | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 1959.22 | ACER | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 1743 | Contingency | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 1691.072 | PPO | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |
| 1685.6 | DQN Ours | [Deep Recurrent Q-Learning for Partially Observable MDPs](https://arxiv.org/abs/1507.06527) |
| 1590.0 | PPO | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 1582.34 | DQN | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 1425.2 | TRPO - single path | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 1332 | HNeat Pixel | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 1302.61 | A2C | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 1299.25 | PPO | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 996 | Sarsa | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 888.741 | DQN | [RL Baselines Zoo b76641e](https://github.com/araffin/rl-baselines-zoo) |
| 859.5 | TRPO - vine | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 683.11 | TRPO (MPI) | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 618 | DRQN | [Deep Recurrent Q-Learning for Partially Observable MDPs](https://arxiv.org/abs/1507.06527) |
| 594.45 | PPO (MPI) | [OpenAI Baselines cbd21ef](https://github.com/openai/baselines) |
| 354 | **Random** | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |

