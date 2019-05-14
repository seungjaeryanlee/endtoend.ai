---
layout: page
title: Atari Venture Environment
permalink: /envs/gym/atari/venture/

redirect_from:
 - /envs/gym/atari-2600/venture/
 - /env/gym/atari/venture/
 - /env/gym/atari-2600/venture/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/venture.mp4' | absolute_url }}" type="video/mp4">
</video>

The goal of Venture is to collect treasure from a dungeon. Winky is equipped with a bow and arrow and explores a dungeon with rooms and hallways. The hallways are patrolled by large, tentacled monsters named Hallmonsters, which cannot be killed, injured, or stopped in any way. Once in a room, Winky may kill monsters, avoid traps and gather treasures. If they stay in any room too long, a Hallmonster will enter the room, chase and kill them. In this way, the Hallmonsters serve the same role as "Evil Otto" in the arcade game Berzerk. The more quickly the player finishes each level, the higher their score.

The goal of each room is only to steal the room's treasure. In most rooms, it is possible (though difficult) to steal the treasure without defeating the monsters within. Some rooms have traps that are only sprung when the player picks up the treasure. For instance, in "The Two-Headed Room", two 2-headed ettins appear the moment the player picks up the prize.

Winky dies if he touches a monster or Hallmonster. Dead monsters decay over time and their corpses may block room exits, delaying Winky and possibly allowing the Hallmonster to enter. Shooting a corpse causes it to regress back to its initial death phase. The monsters themselves move in specific patterns but may deviate to chase the player, and the game's AI allows them to dodge the player's shots with varying degrees of "intelligence" (for example, the snakes of "The Serpent Room" are relatively slow to dodge arrows, the trolls of "The Troll Room" are quite adept at evasion).

The game consists of three different dungeon levels with different rooms. After clearing all the rooms in a level the player advances to the next. After three levels the room pattern and monsters repeat, but at a higher speed and with a different set of treasures.

The different dungeons in each level are as follows:

 * Level 1 - The Wall Room, The Serpent Room, The Skeleton Room, The Goblin Room
 * Level 2 - The Two-Headed Room, The Dragon Room, The Spider Room, The Troll Room
 * Level 3 - The Genie Room, The Demon Room, The Cyclops Room, The Bat Room


*Description from [Wikipedia](https://en.wikipedia.org/wiki/Venture_(video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 1039.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 523.4 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 462.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 244.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 200.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 110.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 94.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 75.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 54.0 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 45.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 29.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 25.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 23.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 21.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 19.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 18.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 1653.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1597.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1520 | C51 | A Distributional Perspective on Reinforcement Learning |
| 1433 | DuDQN | Noisy Networks for Exploration |
| 1318 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 1245.33 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 1187.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 1187.5 | **Human** | Human-level control through deep reinforcement learning |
| 1107.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 815 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 497.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 497.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 380.0 | DQN | Human-level control through deep reinforcement learning |
| 319 | DQN | Noisy Networks for Exploration |
| 163.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 97 | NoisyNet DQN | Noisy Networks for Exploration |
| 93.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 66 | Linear | Human-level control through deep reinforcement learning |
| 48.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 43.9 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 5.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1.0 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 0.6 | Contingency | Human-level control through deep reinforcement learning |
| 0.0 | **Random** | Human-level control through deep reinforcement learning |
| 0 | A3C | Noisy Networks for Exploration |
| 0 | NoisyNet A3C | Noisy Networks for Exploration |
| 0.0 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 0.0 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 0.0 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 0.0 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 1859 | RND | Exploration by Random Network Distillation |
| 1712 | Dynamics | Exploration by Random Network Distillation |
| 0 | PPO | Exploration by Random Network Distillation |
| 0.0 | A2C | Proximal Policy Optimization Algorithm |
| 0.0 | ACER | Proximal Policy Optimization Algorithm |
| 0.0 | PPO | Proximal Policy Optimization Algorithm |

