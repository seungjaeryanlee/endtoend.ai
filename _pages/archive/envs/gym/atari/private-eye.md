---
layout: page
title: Atari Private Eye Environment
permalink: /envs/gym/atari/private-eye/

redirect_from:
 - /envs/gym/atari-2600/private-eye/
 - /env/gym/atari/private-eye/
 - /env/gym/atari-2600/private-eye/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/private-eye.mp4' | absolute_url }}" type="video/mp4">
</video>

n Private Eye, players assume the role of Pierre Touché, a private investigator who has been assigned the task of capturing the criminal mastermind, Henri Le Fiend. Le Fiend is implicated in a number of crimes across the city, and the player must find the clues and the stolen property in order to successfully arrest Le Fiend.

The game consists of four separate cases. Using a specially-built Model A that can jump over obstacles, players must search the city for a specific clue to the crime and for the object stolen in the crime. Each item must then be returned to its point of origin; the clue is taken to a business to verify it came from there, and the stolen object is returned to its rightful owner. These items may be discovered in any order, but players may carry only one item at a time. When both items have been located and returned, then the player must locate and capture Le Fiend, and finally take him to jail, successfully closing the case.

However, the city is full of street thugs who will attack the player. If the player is hit while carrying an item (either the clue or the stolen property), the item is lost and must be re-located. Further, each case has a statute of limitations, which serves as the game's time limit. To win the game, the player must locate and verify the clue, locate and return the stolen property, and lastly locate Le Fiend and take him to jail within the time allotted.

The player starts with 1000 "merit points". Points are lost whenever the player hits an obstacle or is attacked by a thug, and are awarded whenever an item is located, subsequently returned, and when a thug (or Le Fiend himself) is nabbed. Each case represents a separate game variation; when the case is solved or time runs out, the game ends. A fifth variation requires the player to solve all four crimes at the same time.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Q*bert)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 64169.1 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 5717.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 2598.55 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 2202.3 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 1704.4 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1277.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 670.7 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 662.8 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |
| 421.1 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 346.3 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 298.2 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 292.6 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 206.9 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 194.4 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 179.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| -575.5 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 69571.3 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 69571.3 | **Human** | Human-level control through deep reinforcement learning |
| 15198.0 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 15188.8 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 15177.1 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 15172.9 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 15095 | C51 | A Distributional Perspective on Reinforcement Learning |
| 4234.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 3781 | A3C | Noisy Networks for Exploration |
| 3712 | NoisyNet DQN | Noisy Networks for Exploration |
| 2361 | DQN | Noisy Networks for Exploration |
| 1788 | DQN | Human-level control through deep reinforcement learning |
| 748.6 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 684.3 | Linear | Human-level control through deep reinforcement learning |
| 670.1 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 350 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 279 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 227 | DuDQN | Noisy Networks for Exploration |
| 206.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 200 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 146.7 | DQN | A Distributional Perspective on Reinforcement Learning |
| 146 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 129.7 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 103.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 100 | NoisyNet A3C | Noisy Networks for Exploration |
| 98.5 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 92.42 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 86 | Contingency | Human-level control through deep reinforcement learning |
| 24.9 | **Random** | Human-level control through deep reinforcement learning |
| 0.0 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 8666 | RND | Exploration by Random Network Distillation |
| 182.0 | ACER | Proximal Policy Optimization Algorithm |
| 105 | PPO | Exploration by Random Network Distillation |
| 91.3 | A2C | Proximal Policy Optimization Algorithm |
| 69.5 | PPO | Proximal Policy Optimization Algorithm |
| 33 | Dynamics | Exploration by Random Network Distillation |

