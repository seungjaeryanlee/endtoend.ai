---
layout: page
title: Atari Q*Bert Environment
permalink: /envs/gym/atari/qbert/

redirect_from:
 - /envs/gym/atari-2600/qbert/
 - /env/gym/atari/qbert/
 - /env/gym/atari-2600/qbert/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/qbert.mp4' | absolute_url }}" type="video/mp4">
</video>

The game is played using a single, diagonally mounted four-way joystick. The player controls Q*bert, who starts each game at the top of a pyramid made of 28 cubes, and moves by hopping diagonally from cube to cube. Landing on a cube causes it to change color, and changing every cube to the target color allows the player to progress to the next stage.

At the beginning, jumping on every cube once is enough to advance. In later stages, each cube must be hit twice to reach the target color. Other times, cubes change color every time Q*bert lands on them, instead of remaining on the target color once they reach it. Both elements are then combined in subsequent stages. Jumping off the pyramid results in the character's death.

A square video game screenshot that is a digital representation of a multicolored pyramid of cubes in front of a black background. An orange spherical character, a red ball, and a purple coiled snake are on the cubes. Multicolored discs are adjacent to the left and right sides of the pyramid. Above the pyramid are statistics related to gameplay.
The eponymous Q*bert hops diagonally down the pyramid to avoid Coily, who is pursuing him. The game tracks the player's progress above the pyramid.
The player is impeded by several enemies, introduced gradually to the game:

 * **Coily** – Coily first appears as a purple egg that bounces to the bottom of the pyramid and then transforms into a snake that chases after Q*bert.
 * **Ugg and Wrongway** – Two purple creatures that hop along the sides of the cubes in an Escheresque manner. Starting at either the bottom left or bottom right corner, they keep moving toward the top right or top left side of the pyramid respectively, and fall off the pyramid when they reach the end.
 * **Slick and Sam** – Two green creatures that descend down the pyramid and revert cubes whose color has already been changed.

A collision with purple enemies is fatal to the character, whereas the green enemies are removed from the board upon contact. Colored balls occasionally appear at the second row of cubes and bounce downward; contact with a red ball is lethal to Q*bert, while contact with a green one immobilizes the on-screen enemies for a limited time. Multicolored floating discs on either side of the pyramid serve as an escape from danger, particularly Coily. When Q*bert jumps on a disc, it transports him to the top of the pyramid. If Coily is in close pursuit of the character, he will jump after Q*bert and fall to his death, awarding bonus points. This causes all enemies and balls on the screen to disappear, though they start to return after a few seconds.

Points are awarded for each color change (25), defeating Coily with a flying disc (500), remaining discs at the end of a stage (at higher stages, 50 or 100) and catching green balls (100) or Slick and Sam (300 each). Bonus points are also awarded for completing a screen, starting at 1,000 for the first screen of Level 1 and increasing by 250 for each subsequent completion. Extra lives are granted for reaching certain scores, which are set by the machine operator.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Private_Eye_(Atari_2600_video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 21307.5 | A3C LSTM | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 18397.6 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 15148.8 | A3C FF | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 15035.9 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 14175.8 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 14063.0 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 13752.3 | A3C FF 1 day | [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783) |
| 12740.5 | Prioritized DQN (rank) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 12085.0 | **Human** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 11277.0 | Prioritized DDQN (prop, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 11020.8 | DDQN (tuned) | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 10713.3 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 9944.0 | Prioritized DDQN (rank, tuned) | [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952) |
| 7089.83 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 4589.8 | DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 183.0 | **Random** | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 572510 | QR-DQN-1 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 351200.12 | IMPALA (deep) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 33817.5 | Rainbow | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 27121 | NoisyNet DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 26646 | QR-DQN-0 | [Distributional Reinforcement Learning with Quantile Regression](https://arxiv.org/abs/1710.10044) |
| 25750 | IQN | [Implicit Quantile Networks for Distributional Reinforcement Learning](https://arxiv.org/abs/1806.06923) |
| 23784 | C51 | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 23151.5 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 22956.5 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 21509.2 | Reactor | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 21222.5 | Reactor ND | [The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning](https://arxiv.org/abs/1704.04651) |
| 19819 | DuDQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 19220.3 | DuDQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 18901.25 | IMPALA (shallow) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 18760.3 | PDD DQN | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 18586 | A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 17896 | NoisyNet A3C | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 16956.0 | Distributional DQN | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 15967.4 | A2C | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 15545 | NoisyNet DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 15088.5 | DDQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 14875.0 | DDQN | [Deep Reinforcement Learning with Double Q-learning](https://arxiv.org/abs/1509.06461) |
| 13455.0 | **Human** | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 13455.0 | **Human** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1511.06581) |
| 13117.3 | DQN | [A Distributional Perspective on Reinforcement Learning](https://arxiv.org/abs/1707.06887) |
| 11241 | DQN | [Noisy Networks for Exploration](https://arxiv.org/abs/1706.10295) |
| 10815.55 | Gorila DQN | [Massively Parallel Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1507.04296) |
| 10717.38 | IMPALA (deep, multitask) | [IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures](https://arxiv.org/abs/1802.01561) |
| 10596 | DQN | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1802.01561) |
| 971.8 | TRPO | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 960.3 | Contingency | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1708.05144) |
| 613.5 | Linear | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1708.05144) |
| 163.9 | **Random** | [Human-level control through deep reinforcement learning](https://arxiv.org/abs/1708.05144) |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 20025 | UCC-I | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 18900 | **Human** | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 18880.469 | ACER | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1312.5602) |
| 15316.6 | ACER | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 14510.0 | PPO | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1707.06347) |
| 14293.3 | PPO | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 10065.7 | A2C | [Proximal Policy Optimization Algorithm](https://arxiv.org/abs/1707.06347) |
| 9569.575 | ACKTR | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1707.06347) |
| 7732.5 | TRPO - vine | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 7184.73 | PPO (MPI) | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 7012.06 | PPO | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 6433.38 | ACER | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1502.05477) |
| 5742.333 | A2C | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1502.05477) |
| 4500 | DQN2013 Best | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 4429.3 | ACKTR | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1312.5602) |
| 3254.83 | DQN | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1312.5602) |
| 2486.18 | TRPO (MPI) | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1312.5602) |
| 2047.07 | A2C | [OpenAI Baselines cbd21ef](https://arxiv.org/abs/1312.5602) |
| 1973.5 | TRPO - single path | [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477) |
| 1952 | DQN2013 | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 1800 | HNeat Best | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 1325 | HNeat Pixel | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 960 | Contingency | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 644.345 | DQN | [RL Baselines Zoo b76641e](https://arxiv.org/abs/1312.5602) |
| 614 | Sarsa | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |
| 157 | **Random** | [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602) |

