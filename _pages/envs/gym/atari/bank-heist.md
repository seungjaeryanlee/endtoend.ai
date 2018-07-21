---
layout: page
title: Atari Bank Heist Environment
permalink: /envs/gym/atari/bank-heist

redirect_from:
 - /envs/gym/atari-2600/bank-heist
 - /env/gym/atari/bank-heist
 - /env/gym/atari-2600/bank-heist

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
| 1200.8 | ApeX DQN | DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 1129.3 | DuelingDDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 1004.6 | DuelingPERDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 970.1 | A3C FF (4 days) | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 955.0 | NoisyNetDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 946.0 | A3C FF (1 day) | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 932.8 | A3C LSTM | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 886.0 | DDQN | DQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 876.6 | PERDDQN (rank) | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 835.6 | DistributionalDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 826.0 | RainbowDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 823.7 | PERDQN (rank) | DQN | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 816.8 | PERDDQN (prop) | DQN | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| **644.5** | **Human** | Human | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 399.42 | GorilaDQN | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 312.7 | DQN2015 | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 176.3 | DQN2015 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| **21.7** | **Random** | Random | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |

### No-op Starts

| Result | Method | Type | Score from |
|--------|--------|------|------------|
| 1716.4 | ApeX DQN | DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 1611.9 | DuelingDDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 1503.1 | DuelingPERDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 1428.0 | DuelingDQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1358.0 | RainbowDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 1323.0 | NoisyNetDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 1318.0 | NoisyNet-DuelingDQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1296.0 | A3C | PG | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1289.7 | ACKTR | PG | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 1280.2 | DQfD | Imitation | [Deep Q-Learning from Demonstrations](https://arxiv.org/abs/1704.03732) |
| 1240.8 | DuelingPERDDQN |  | [Deep Q-Learning from Demonstrations](https://arxiv.org/abs/1704.03732) |
| 1126.8 | PERDDQN (prop) | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 1103.3 | DDQN+PopArt | DQN | [Learning values across many orders of magnitude](https://arxiv.org/abs/1602.07714) |
| 1068.0 | NoisyNet-DQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1056.7 | DistributionalDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 1054.6 | PERDDQN (rank) | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 1054.6 | PER | DQN | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 1033.0 | NoisyNet-A3C | PG | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 1030.6 | DDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 976.0 | C51 | Misc | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| **753.1** | **Human** | Human | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| **734.4** | **Human** | Human | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 728.3 | DDQN | DQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 609.0 | GorilaDQN | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 455.0 | DQN2015 | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 455.0 | DQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 429.7 | DQN2015 | DQN | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 190.8 | Linear | Misc | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 67.4 | Contingency | Misc | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| **14.2** | **Random** | Random | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |

### Normal Starts

| Result | Method | Type | Score from |
|--------|--------|------|------------|
| 1280.6 | PPO | PG | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 1177.5 | ACER | PG | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 1095.3 | A2C | PG | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |

