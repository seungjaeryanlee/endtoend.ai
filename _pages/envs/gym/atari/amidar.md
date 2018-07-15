---
layout: page
title: Atari Amidar Environment
permalink: /envs/gym/atari/amidar

redirect_from:
 - /envs/gym/atari-2600/amidar
 - /env/gym/atari/amidar
 - /env/gym/atari-2600/amidar

nav:
 - name: Overview
   permalink: '#overview'
 - name: State of the Art
   permalink: '#state-of-the-art'
---


## Overview

## State of the Art

### Human Starts

| Result | Method | Score from |
|--------|--------|------------|
| 1540.4 | Human | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 1047.3 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 283.9 | A3C FF, 1 day | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 263.9 | A3C | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 263.9 | A3C FF, 4 days | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 238.4 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 237.7 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 218.4 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 218.4 | Prioritized DDQN (proportional) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 202.8 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 189.15 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 178.4 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 173.0 | A3C LSTM | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 172.7 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 169.1 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 159.1 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 148.0 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 133.4 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 129.1 | Prioritized DDQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 98.9 | Prioritized DQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 11.8 | Random | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |

### No-op Starts

| Result | Method | Score from |
|--------|--------|------------|
| 8659.2 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 5132.2 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 3537 | NoisyNet-Dueling | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 2354.5 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 2325.0 | DQfD | [Deep Q-Learning from Demonstrations](https://arxiv.org/abs/1704.03732) |
| 2296.8 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 2051.8 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 1793.3 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 1735 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 1719.5 | Human | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 1608.0 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 1267.9 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 1189.7 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 1059.4 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 978.0 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 827.6 | ACER | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 782.5 | DDQN+PopArt | [Learning values across many orders of magnitude](https://arxiv.org/abs/1602.07714) |
| 739.5 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 702.1 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 674.6 | PPO | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 491 | NoisyNet-A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 380.8 | A2C | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 161 | NoisyNet-DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |

