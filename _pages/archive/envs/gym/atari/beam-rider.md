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
| 37412.2 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 31181.3 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 26172.7 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 24622.2 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 22707.9 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 21768.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 17417.2 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 15002.4 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 14961.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 14591.3 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 13235.9 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 12041.9 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 9107.9 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 8672.4 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 3822.07 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 254.6 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 42776 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 34821 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 32463.47 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 30276.5 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 24919 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 20793 | NoisyNet DQN | Noisy Networks for Exploration |
| 18501 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 16926.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 16850.2 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 16298 | DuDQN | Noisy Networks for Exploration |
| 14074 | C51 | A Distributional Perspective on Reinforcement Learning |
| 13772.8 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 13581.4 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 13213.4 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 12164.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 11237 | NoisyNet A3C | Noisy Networks for Exploration |
| 11033.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 10564 | DQN | Noisy Networks for Exploration |
| 9214 | A3C | Noisy Networks for Exploration |
| 8811.8 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 8627.5 | DQN | A Distributional Perspective on Reinforcement Learning |
| 8566.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 8219.92 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 8148.1 | A2C | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 7654.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 6846 | DQN | Human-level control through deep reinforcement learning |
| 5774.7 | **Human** | Human-level control through deep reinforcement learning |
| 3302.91 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 1743 | Contingency | Human-level control through deep reinforcement learning |
| 929.4 | Linear | Human-level control through deep reinforcement learning |
| 698.36 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 670.0 | TRPO | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 363.9 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 7456 | **Human** | Playing Atari with Deep Reinforcement Learning |
| 6923 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 5702 | UCC-I | Trust Region Policy Optimization |
| 5184 | DQN2013 Best | Playing Atari with Deep Reinforcement Learning |
| 4092 | DQN2013 | Playing Atari with Deep Reinforcement Learning |
| 3863.3 | ACER | Proximal Policy Optimization Algorithm |
| 3760.976 | ACKTR | RL Baselines Zoo b76641e |
| 3616 | HNeat Best | Playing Atari with Deep Reinforcement Learning |
| 3269 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 3031.7 | A2C | Proximal Policy Optimization Algorithm |
| 2809.115 | A2C | RL Baselines Zoo b76641e |
| 2440.692 | ACER | RL Baselines Zoo b76641e |
| 2171.19 | ACKTR | OpenAI Baselines cbd21ef |
| 1959.22 | ACER | OpenAI Baselines cbd21ef |
| 1743 | Contingency | Playing Atari with Deep Reinforcement Learning |
| 1691.072 | PPO | RL Baselines Zoo b76641e |
| 1685.6 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 1590.0 | PPO | Proximal Policy Optimization Algorithm |
| 1582.34 | DQN | OpenAI Baselines cbd21ef |
| 1425.2 | TRPO - single path | Trust Region Policy Optimization |
| 1332 | HNeat Pixel | Playing Atari with Deep Reinforcement Learning |
| 1302.61 | A2C | OpenAI Baselines cbd21ef |
| 1299.25 | PPO | OpenAI Baselines cbd21ef |
| 996 | Sarsa | Playing Atari with Deep Reinforcement Learning |
| 888.741 | DQN | RL Baselines Zoo b76641e |
| 859.5 | TRPO - vine | Trust Region Policy Optimization |
| 683.11 | TRPO (MPI) | OpenAI Baselines cbd21ef |
| 618 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 594.45 | PPO (MPI) | OpenAI Baselines cbd21ef |
| 354 | **Random** | Playing Atari with Deep Reinforcement Learning |

