---
layout: page
title: Atari Montezuma's Revenge Environment
permalink: /envs/gym/atari/montezumas-revenge

redirect_from:
 - /envs/gym/atari-2600/montezumas-revenge
 - /env/gym/atari/montezumas-revenge
 - /env/gym/atari-2600/montezumas-revenge

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
| **4182.0** | **Human** | Human | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 1079.0 | ApeX DQN | DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 154.0 | RainbowDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 130.0 | DistributionalDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 84.0 | GorilaDQN | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 67.0 | A3C FF (4 days) | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 55.0 | NoisyNetDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 53.0 | A3C FF (1 day) | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 51.0 | PERDDQN (rank) | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 50.0 | DQN2015 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 47.0 | DQN2015 | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 44.0 | PERDQN (rank) | DQN | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 42.0 | DDQN | DQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 41.0 | A3C LSTM | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| **25.0** | **Random** | Random | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 24.0 | DuelingPERDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 22.0 | DuelingDDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 13.0 | PERDDQN (prop) | DQN | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |

### No-op Starts

| Result | Method | Type | Score from |
|--------|--------|------|------------|
| 41098.4 | YouTube | Imitation | [Playing hard exploration games by watching YouTube](https://arxiv.org/abs/1805.11592) |
| 35926.1 | YouTube (imitation only) | Imitation | [Playing hard exploration games by watching YouTube](https://arxiv.org/abs/1805.11592) |
| **4753.3** | **Human** | Human | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 4659.7 | DQfD | Imitation | [Playing hard exploration games by watching YouTube](https://arxiv.org/abs/1805.11592) |
| 4638.4 | DQfD | Imitation | [Deep Q-Learning from Demonstrations](https://arxiv.org/abs/1704.03732) |
| **4367** | **Human** | Human | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 2500.0 | ApeX | DQN | [Playing hard exploration games by watching YouTube](https://arxiv.org/abs/1805.11592) |
| 2500.0 | ApeX DQN | DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 384.0 | RainbowDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 367.0 | DistributionalDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 259 | Contingency | Misc | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 57.0 | NoisyNet-DuelingDQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 14.0 | A3C | PG | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 10.7 | Linear | Misc | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 4.16 | GorilaDQN | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 4.0 | NoisyNet-A3C | PG | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 3.0 | NoisyNet-DQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 2.0 | DQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 0.1 | DuelingPERDDQN |  | [Deep Q-Learning from Demonstrations](https://arxiv.org/abs/1704.03732) |
| **0** | **Random** | Random | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 0 | DQN2015 | DQN | [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf) |
| 0.0 | DDQN | DQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 0.0 | DDQN+PopArt | DQN | [Learning values across many orders of magnitude](https://arxiv.org/abs/1602.07714) |
| 0.0 | PERDDQN (prop) | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 0.0 | DuelingDDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 0.0 | NoisyNetDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 0.0 | PERDDQN (rank) | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 0.0 | DuelingPERDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 0.0 | DuelingDQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 0.0 | C51 | Misc | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |

### Normal Starts

| Result | Method | Type | Score from |
|--------|--------|------|------------|
| 42.0 | PPO | PG | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 0.3 | ACER | PG | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 0.0 | A2C | PG | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |

