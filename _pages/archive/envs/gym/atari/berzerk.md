---
layout: page
title: Atari Berzerk Environment
permalink: /envs/gym/atari/berzerk/

redirect_from:
 - /envs/gym/atari-2600/berzerk/
 - /env/gym/atari/berzerk/
 - /env/gym/atari-2600/berzerk/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/berzerk.mp4' | absolute_url }}" type="video/mp4">
</video>

The player controls a green stick man. Using a joystick and a firing button that activates a laser-like weapon, the player navigates a simple maze filled with many robots, who fire lasers back at the player character. A player can be killed by being shot, by running into a robot or an exploding robot, coming into contact with the electrified walls of the maze itself, or by being touched by the player's nemesis, Evil Otto.

The function of Evil Otto, represented by a bouncing smiley face, is to quicken the pace of the game. Otto is unusual, with regard to games of the period, in that there is no way to kill him. Otto can go through walls with impunity and is attracted to the player character. If robots remain in the maze Otto moves slowly, about half as fast as the humanoid, but he speeds up to match the humanoid's speed once all the robots are killed. Evil Otto moves exactly the same speed as the player going left and right but he can move faster than the player going up and down; thus, no matter how close Otto is, the player can escape as long as they can avoid moving straight up or down.

The player advances by escaping from the maze through an opening in the far wall. Each robot destroyed is worth 50 points. Ideally, all the robots in the current maze have been destroyed before the player escapes, thus gaining the player a per-maze bonus (ten points per robot). The game has 65,536 rooms (256x256 grid), but due to limitations of the random number generation there are fewer than 1024 maze layouts (876 unique). It has only one controller, but two-player games can be accomplished by alternating at the joystick. The game is most difficult when the player enters a new maze, as there is only a short interval between entering the maze and all the robots in range firing at the player. For the beginner, this often means several deaths in rapid succession, as each death means starting a new maze layout.

As a player's score increases, the colors of the enemy robots change, and the robots can have more bullets on the screen at the same time. Once they reach the limit of simultaneous onscreen bullets, they cannot fire again until one or more of their bullets detonates; the limit applies to the robots as a group, not as individuals.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Berzerk_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 2237.5 | **Human** | Deep Reinforcement Learning with Double Q-learning |
| 2237.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 2178.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1793.4 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1433.4 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 1165.6 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 1011.1 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 1000.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 910.6 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 865.9 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 862.2 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 817.9 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 644.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 635.8 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 493.4 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 196.1 | **Random** | Deep Reinforcement Learning with Double Q-learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 34798 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 3409.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 3117 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 2630.4 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 2545.6 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 2303.1 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1896 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 1852.7 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1645 | C51 | A Distributional Perspective on Reinforcement Learning |
| 1641.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1515.7 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1472.6 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1421.8 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1235 | NoisyNet A3C | Noisy Networks for Exploration |
| 1225.4 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 1122 | DuDQN | Noisy Networks for Exploration |
| 1053 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 1022 | A3C | Noisy Networks for Exploration |
| 927.2 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 905 | NoisyNet DQN | Noisy Networks for Exploration |
| 888.3 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 647.8 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 634 | DQN | Noisy Networks for Exploration |
| 585.6 | DQN | A Distributional Perspective on Reinforcement Learning |
| 585.6 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 123.7 | **Random** | Dueling Network Architectures for Deep Reinforcement Learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|

