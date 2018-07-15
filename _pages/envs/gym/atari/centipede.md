---
layout: page
title: Atari Centipede Environment
permalink: /envs/gym/atari/centipede

redirect_from:
 - /envs/gym/atari-2600/centipede
 - /env/gym/atari/centipede
 - /env/gym/atari-2600/centipede

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
| 10321.9 | Human | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 7476.9 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 7160.9 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 6296.87 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 5711.6 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 5570.2 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 4881.0 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 4214.4 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 3973.9 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 3853.5 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 3853.5 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 3773.1 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 3755.8 | A3C | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 3755.8 | A3C FF, 4 days | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 3489.1 | Prioritized DDQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 3421.9 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 3421.9 | Prioritized DDQN (proportional) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 3306.5 | A3C FF, 1 day | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 2959.4 | Prioritized DQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 1997.0 | A3C LSTM | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 1925.5 | Random | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |

### No-op Starts

| Result | Method | Score from |
|--------|--------|------------|
| 49065.8 | DDQN+PopArt | [Learning values across many orders of magnitude](https://arxiv.org/abs/1602.07714) |
| 12974.0 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 12017.0 | Human | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 9646 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 9015.5 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 8904.8 | ACER | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 8432.3 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 8309.4 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 8282 | NoisyNet-A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 8167.3 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 7687.5 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 7596 | NoisyNet-Dueling | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 7561.4 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 7125.28 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 5409.4 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 5175.4 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 4657.7 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 4386.4 | PPO | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 4355.8 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 4269 | NoisyNet-DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 4139.4 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 3496.5 | A2C | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |

