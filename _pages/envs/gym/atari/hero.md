---
layout: page
title: Atari H.E.R.O. Environment
permalink: /envs/gym/atari/hero

redirect_from:
 - /envs/gym/atari-2600/hero
 - /env/gym/atari/hero
 - /env/gym/atari-2600/hero

nav:
 - name: Overview
   permalink: '#overview'
 - name: State of the Art
   permalink: '#state-of-the-art'
---


## Overview

## State of the Art

### Human Starts

| Result | Method | Type | Score from |
|--------|--------|------|------------|
| 50496.8 | RainbowDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 32464.1 | A3C FF (4 days) | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 28889.5 | A3C LSTM | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 28765.8 | A3C FF (1 day) | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 28554.2 | DistributionalDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 26345.3 | ApeX DQN | DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| **25839.4** | **Human** | Human | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 20889.9 | PERDDQN (rank) | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 20506.4 | PERDDQN (prop) | DQN | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 15459.2 | DuelingPERDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 15207.9 | DuelingDDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 15150.9 | PERDQN (rank) | DQN | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 14992.9 | DQN2015 | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 14892.5 | DDQN | DQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 12952.5 | DQN2015 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 8963.36 | GorilaDQN | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 2454.2 | NoisyNetDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| **1580.3** | **Random** | Random | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |

### No-op Starts

| Result | Method | Type | Score from |
|--------|--------|------|------------|
| 105929.4 | DQfD | Imitation | [Deep Q-Learning from Demonstrations](https://arxiv.org/abs/1704.03732) |
| 55887.4 | RainbowDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 38874.0 | C51 | Misc | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 35895.0 | DuelingDQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 33860.9 | DistributionalDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 31655.9 | ApeX DQN | DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 31533.0 | NoisyNet-DuelingDQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| **30826.4** | **Human** | Human | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 30791.0 | A3C | PG | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 27153.9 | PERDDQN (prop) | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| **25763** | **Human** | Human | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 23037.7 | PERDDQN (rank) | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 22290.1 | DuelingPERDDQN |  | [Deep Q-Learning from Demonstrations](https://arxiv.org/abs/1704.03732) |
| 21036.5 | DuelingPERDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 20818.2 | DuelingDDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 20437.8 | DQN2015 | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 20357.0 | DDQN | DQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 20130.2 | DDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 19950 | DQN2015 | DQN | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 15176.0 | DQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 14913.87 | GorilaDQN | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 14225.2 | DDQN+PopArt | DQN | [Learning values across many orders of magnitude](https://arxiv.org/abs/1602.07714) |
| 8471.0 | NoisyNet-A3C | PG | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 7295 | Contingency | Misc | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 6459 | Linear | Misc | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 6246.0 | NoisyNet-DQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 5053.1 | NoisyNetDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| **1027** | **Random** | Random | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |

