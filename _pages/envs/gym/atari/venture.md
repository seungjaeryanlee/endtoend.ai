---
layout: page
title: Atari Venture Environment
permalink: /envs/gym/atari/venture

redirect_from:
 - /envs/gym/atari-2600/venture
 - /env/gym/atari/venture
 - /env/gym/atari-2600/venture

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
| 1356.25 | DQN-PixelCNN | [Count-Based Exploration with Neural Density Models](https://arxiv.org/abs/1703.01310) |
| 1039.0 | Human | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 935.5 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 523.4 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 462.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 244.0 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 244.0 | Prioritized DDQN (proportional) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 200.0 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 136.0 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 110.0 | Prioritized DQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 94.0 | Prioritized DDQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 82.2 | DQN-CTS | [Count-Based Exploration with Neural Density Models](https://arxiv.org/abs/1703.01310) |
| 54.0 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 45.0 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 29.0 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 25.0 | A3C LSTM | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 23.0 | A3C | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 23.0 | A3C FF, 4 days | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 21.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 21.0 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 19.0 | A3C FF, 1 day | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 18.0 | Random | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 10.5 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 0.0 | A3C-CTS | [Count-Based Exploration with Neural Density Models](https://arxiv.org/abs/1703.01310) |

### No-op Starts

| Result | Method | Score from |
|--------|--------|------------|
| 1813.0 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 1520 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 1245.33 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 1187.5 | Human | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 1172.0 | DDQN+PopArt | [Learning values across many orders of magnitude](https://arxiv.org/abs/1602.07714) |
| 1107.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 863.0 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 815 | NoisyNet-Dueling | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 497.0 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 380.0 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 163.0 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 98.0 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 97 | NoisyNet-DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 96.55 | RUDDER | [RUDDER: Return Decomposition for Delayed Rewards](https://arxiv.org/abs/1806.07857) |
| 93.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 48.0 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 5.5 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 0.0 | A2C | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 0.0 | ACER | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 0.0 | PPO | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 0.0 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 0 | NoisyNet-A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |

