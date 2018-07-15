---
layout: page
title: Atari Atlantis Environment
permalink: /envs/gym/atari/atlantis

redirect_from:
 - /envs/gym/atari-2600/atlantis
 - /env/gym/atari/atlantis
 - /env/gym/atari-2600/atlantis

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
| 918714.5 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 911091.0 | A3C | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 911091.0 | A3C FF, 4 days | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 875822.0 | A3C LSTM | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 814684.0 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 772392.0 | A3C FF, 1 day | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 629166.5 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 593642.0 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 593642.0 | Prioritized DDQN (proportional) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 445360.0 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 423252.0 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 330647.0 | Prioritized DDQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 319688.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 319688.0 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 303666.5 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 292491.0 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 289803.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 207526.0 | Prioritized DQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 76108.0 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 26575.0 | Human | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 13463.0 | Random | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |

### No-op Starts

| Result | Method | Score from |
|--------|--------|------------|
| 3433182.0 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 2311815.0 | PPO | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 1841376.0 | ACER | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 972175 | NoisyNet-Dueling | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 944497.5 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 923733 | NoisyNet-DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 920213.9 | DQfD | [Deep Q-Learning from Demonstrations](https://arxiv.org/abs/1704.03732) |
| 841075 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 826659.5 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 729265.3 | A2C | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 465700 | NoisyNet-A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 427658.0 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 395762.0 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 382572.0 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 340076.0 | DDQN+PopArt | [Learning values across many orders of magnitude](https://arxiv.org/abs/1602.07714) |
| 329010.0 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 279987.0 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 273895.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 106056.0 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 100069.16 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 85950.0 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 64758.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 29028.1 | Human | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |

