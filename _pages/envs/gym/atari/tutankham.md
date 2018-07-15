---
layout: page
title: Atari Tutankham Environment
permalink: /envs/gym/atari/tutankham

redirect_from:
 - /envs/gym/atari-2600/tutankham
 - /env/gym/atari/tutankham
 - /env/gym/atari-2600/tutankham

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
| 156.3 | A3C | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 156.3 | A3C FF, 4 days | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 144.2 | A3C LSTM | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 138.3 | Human | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 127.7 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 126.9 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 124.3 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 123.3 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 118.45 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 108.6 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 96.5 | Prioritized DQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 92.2 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 92.2 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 56.9 | Prioritized DDQN (rank-based) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 48.0 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 45.6 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 33.6 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 33.6 | Prioritized DDQN (proportional) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 32.4 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 26.1 | A3C FF, 1 day | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 12.7 | Random | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |

### No-op Starts

| Result | Method | Score from |
|--------|--------|------------|
| 314.3 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 280.8 | ACER | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 280 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 272.6 | Ape-X DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 269 | NoisyNet-Dueling | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 254.4 | PPO | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 249.4 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 245.9 | Prioritized Dueling DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 244.97 | GorilaDQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 241.0 | RainbowDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 232 | NoisyNet-DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 231.6 | Noisy DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 218.4 | DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 211.4 | Dueling DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 206.8 | A2C | [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347) |
| 190.6 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 186.7 | DQN2015 | [Human-level control through deep reinforcement learning](https://web.stanford.edu/class/psych209/Readings/MnihEtAlHassibis15NatureControlDeepRL.pdf) |
| 183.9 | DDQN+PopArt | [Learning values across many orders of magnitude](https://arxiv.org/abs/1602.07714) |
| 167.6 | Human | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 164 | NoisyNet-A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 87.2 | Prioritized DDQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 68.1 | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |

