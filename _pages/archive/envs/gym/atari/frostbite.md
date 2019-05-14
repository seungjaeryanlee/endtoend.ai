---
layout: page
title: Atari Frostbite Environment
permalink: /envs/gym/atari/frostbite/

redirect_from:
 - /envs/gym/atari-2600/frostbite/
 - /env/gym/atari/frostbite/
 - /env/gym/atari-2600/frostbite/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/frostbite.mp4' | absolute_url }}" type="video/mp4">
</video>

The bottom two thirds of the screen are covered by a mass of water with four rows of ice blocks floating horizontally. The player moves by jumping from one row to another while trying to avoid various kinds of foes including crabs and birds. There are also fish which grant extra points.

On the top of the screen is the shore where the player must build the Igloo. From the fourth level onwards there is also a polar bear walking around on the shore which must be avoided.

The game levels alternate between large ice blocks and little ice pieces. The levels with the little pieces are actually easier, since one can walk left or right over them without falling in the water.

Each time the player jumps on a piece of ice in a row its color changes from white to blue and the player gets an ice block in the Igloo on the shore. The player has the ability to change the direction in which the ice is flowing by pressing the fire button, but that costs a piece of the Igloo.

After the player has jumped on all the pieces on the screen, they all turn back to white and one can jump on them again. When all the 15 ice blocks required for building the Igloo are gathered, the player has to get back to the shore and get inside it, thus proceeding to the next level. On every level the enemies and the ice blocks move slightly faster than in the previous level making the game more difficult.

Each level must be completed in 45 seconds, (represented as the declining temperature,) else the eskimo dies frozen. The faster the level is completed the more bonus points are awarded to the player. If player makes it past level 20, a "magic" fish will appear between the temperature gage and the number of lives remaining, this serves no real purpose other than as an Easter egg to the game.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Frostbite_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 4202.8 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 4141.1 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 4038.4 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 3510.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 2930.2 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 2813.9 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 2332.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1448.1 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 426.6 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 288.7 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 258.3 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 197.6 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 190.5 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 180.1 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 157.4 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 66.4 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 9590.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 8042.1 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 7932.2 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 7413.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 7136.7 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 4839 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 4672.8 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 4384 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 4334.7 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 4334.7 | **Human** | Human-level control through deep reinforcement learning |
| 4324 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 3965 | C51 | A Distributional Perspective on Reinforcement Learning |
| 3938.2 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 2923 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 2807 | DuDQN | Noisy Networks for Exploration |
| 2744.15 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1683.3 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 1000 | DQN | Noisy Networks for Exploration |
| 797.4 | DQN | A Distributional Perspective on Reinforcement Learning |
| 753 | NoisyNet DQN | Noisy Networks for Exploration |
| 605.16 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 328.3 | DQN | Human-level control through deep reinforcement learning |
| 317.75 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 288 | A3C | Noisy Networks for Exploration |
| 269.65 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 261 | NoisyNet A3C | Noisy Networks for Exploration |
| 241.5 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 216.9 | Linear | Human-level control through deep reinforcement learning |
| 180.9 | Contingency | Human-level control through deep reinforcement learning |
| 65.2 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 2875 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 519 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 436 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 414 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 314.2 | PPO | Proximal Policy Optimization Algorithm |
| 285.6 | ACER | Proximal Policy Optimization Algorithm |
| 261.8 | A2C | Proximal Policy Optimization Algorithm |

