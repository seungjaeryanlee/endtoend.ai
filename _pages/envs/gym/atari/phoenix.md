---
layout: page
title: Atari Phoenix Environment
permalink: /envs/gym/atari/phoenix/

redirect_from:
 - /envs/gym/atari-2600/phoenix/
 - /env/gym/atari/phoenix/
 - /env/gym/atari-2600/phoenix/

nav:
 - name: Overview
   permalink: '#overview'
 - name: State of the Art
   permalink: '#state-of-the-art'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/phoenix.mp4' | absolute_url }}" type="video/mp4">
</video>

The player controls a spaceship that moves horizontally at the bottom of the screen, firing upward. Enemies, typically one of two types of birds, appear on the screen above the player's ship, shooting at it and periodically diving towards it in an attempt to crash into it. The ship is equipped with a shield that can be used to zap any of the alien creatures that attempt to crash into the spaceship. The player cannot move while the shield is active and must wait approximately five seconds before using it again.

The player starts with three or six lives, depending on the settings.

Each level has five separate rounds. The player must complete a round to advance to the next.

Rounds 1 and 2 – The player must destroy a formation of alien birds. While in formation, some of the birds fly down kamikaze style, in an attempt to destroy the player's spaceship by crashing into it. Hitting a bird flying diagonally awards a bonus score. The birds are yellow in round 1, pink in round 2. The player's spaceship is given rapid fire for round 2, where the birds fly somewhat more unpredictably.
Rounds 3 and 4 – Flying eggs float on the screen and seconds later hatch, revealing larger alien birds, resembling phoenices, which swoop down at the player's spaceship. The only way to fully destroy one of these birds is by hitting it in its belly; shooting one of its wings merely destroys that wing, and if both wings are destroyed, they will regenerate. From time to time the birds may also revert to the egg form for a brief period. The birds are blue in round 3, pink in round 4.
Round 5 – The player is pitted against the mothership, which is controlled by an alien creature sitting in its center. To complete this round, the player must create a hole in the conveyor belt-type shield to get a clear shot at the alien. Hitting the alien with a single shot ends the level. The mothership fires missiles at the player's ship, moves slowly down towards it, and has alien birds (from rounds 1 and 2) protecting it. Defeating all of the birds will produce a new wave.
The game continues with increasing speed and unpredictability of the bird and phoenix flights.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Phoenix_%28video_game%29)*


## State of the Art

### Human Starts

| Result | Method | Type | Score from |
|--------|--------|------|------------|
| 188788.5 | ApeX DQN | DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 103061.6 | RainbowDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 74786.7 | A3C LSTM | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 63597.0 | DuelingPERDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 52894.1 | A3C FF (4 days) | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 31358.3 | DistributionalDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 28181.8 | A3C FF (1 day) | PG | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| 27430.1 | PERDDQN (prop) | DQN | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 20410.5 | DuelingDDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 16903.6 | PERDDQN (rank) | DQN | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 16107.8 | PERDQN (rank) | DQN | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 15505.0 | NoisyNetDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 12366.5 | DDQN | DQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 7484.8 | DQN2015 | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| **6686.2** | **Human** | Human | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| **1134.4** | **Random** | Random | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| -9001.0 | DQN2015 | DQN | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |
| -9001.0 | GorilaDQN | DQN | [Asynchronous Methods for Deep Learning](https://arxiv.org/abs/1602.01783) |

### No-op Starts

| Result | Method | Type | Score from |
|--------|--------|------|------------|
| 224491.1 | ApeX DQN | DQN | [Distributed Prioritized Experience Replay](https://arxiv.org/abs/1803.00933) |
| 133433.7 | ACKTR | PG | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 108528.6 | RainbowDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 70324.3 | DuelingPERDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 50338.0 | NoisyNet-A3C | PG | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 34775.0 | DistributionalDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 32808.3 | PERDDQN (prop) | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 23092.2 | DuelingDDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 18992.7 | PER | DQN | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 18992.7 | PERDDQN (rank) | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 17490.0 | C51 | Misc | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 16974.3 | NoisyNetDQN | DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 16028.0 | NoisyNet-DQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 12252.5 | DDQN | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 10379.0 | NoisyNet-DuelingDQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 9704.0 | DQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 9476.0 | A3C | PG | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 8485.2 | DQN2015 | DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 8215.0 | DuelingDQN | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| **7242.6** | **Human** | Human | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 6202.5 | DDQN+PopArt | DQN | [Learning values across many orders of magnitude](https://arxiv.org/abs/1602.07714) |
| **761.4** | **Random** | Random | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |

