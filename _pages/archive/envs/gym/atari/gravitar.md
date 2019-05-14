---
layout: page
title: Atari Gravitar Environment
permalink: /envs/gym/atari/gravitar/

redirect_from:
 - /envs/gym/atari-2600/gravitar/
 - /env/gym/atari/gravitar/
 - /env/gym/atari-2600/gravitar/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/gravitar.mp4' | absolute_url }}" type="video/mp4">
</video>

The player controls a small blue spacecraft. The game starts in a fictional solar system with several planets to explore. If the player moves his ship into a planet, he will be taken to a side-view landscape. Unlike many other shooting games, gravity plays a fair part in Gravitar: the ship will be pulled slowly to the deadly star in the overworld, and downward in the side-view levels.

The player has five buttons: two to rotate the ship left or right, one to shoot, one to activate the thruster, and one for both a tractor beam and force field. Gravitar, Asteroids, Asteroids Deluxe and Space Duel all used similar 5-button controlling system.

In the side-view levels, the player has to destroy red bunkers that shoot constantly, and can also use the tractor beam to pick up blue fuel tanks. Once all of the bunkers are destroyed, the planet will blow up, and the player will earn a bonus. Once all planets are destroyed, the player will move onto another solar system.

The player will lose a life if he crashes into the terrain or gets hit by an enemy's shot, and the game will end immediately if fuel runs out.

Gravitar has 12 different planets. Red Planet is available in all 3 phases in the universe; it contains a reactor. Shooting the reactor core activates a link. Escaping the reactor successfully moves the player to the next phase of planets, awards bonus points and 7500 units of fuel. Reactor escape time reduces after each phase and eventually becomes virtually impossible to complete.

After completing all 11 planets (or alternatively completing the reactor three times) the player enters the second universe and the gravity will reverse. Instead of dragging the ship towards the planet surface, the gravity pushes it away. In the third universe the landscape becomes invisible and the gravity is positive again. The final, fourth universe, has invisible landscape and reverse gravity. After completing the fourth universe the game starts over. However, the reactor escape time will never reset back to high levels again

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Gravitar)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3116.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 567.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 538.37 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 422.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 351.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 320.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 303.5 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 297.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 269.5 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 269.5 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 245.5 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |
| 218.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 216.5 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 200.5 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 170.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 167.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3351.4 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 2672.0 | **Human** | Human-level control through deep reinforcement learning |
| 2209 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 2041.8 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1804.8 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1682 | DuDQN | Noisy Networks for Exploration |
| 1419.3 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1073.8 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1054.58 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 995 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 911 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 681.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 588.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 546 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 473.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 447 | NoisyNet DQN | Noisy Networks for Exploration |
| 440 | C51 | A Distributional Perspective on Reinforcement Learning |
| 429 | Contingency | Human-level control through deep reinforcement learning |
| 412.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 387.7 | Linear | Human-level control through deep reinforcement learning |
| 379 | A3C | Noisy Networks for Exploration |
| 366 | DQN | Noisy Networks for Exploration |
| 359.5 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 314 | NoisyNet A3C | Noisy Networks for Exploration |
| 306.7 | DQN | Human-level control through deep reinforcement learning |
| 282.5 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 238.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 211.5 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 173.0 | **Random** | Human-level control through deep reinforcement learning |
| 170.5 | DDQN | Deep Reinforcement Learning with Double Q-learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3906 | RND | Exploration by Random Network Distillation |
| 3426 | PPO | Exploration by Random Network Distillation |
| 3371 | Dynamics | Exploration by Random Network Distillation |
| 737.2 | PPO | Proximal Policy Optimization Algorithm |
| 225.3 | ACER | Proximal Policy Optimization Algorithm |
| 194.0 | A2C | Proximal Policy Optimization Algorithm |

