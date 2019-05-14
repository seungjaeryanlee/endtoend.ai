---
layout: page
title: Atari Defender Environment
permalink: /envs/gym/atari/defender/

redirect_from:
 - /envs/gym/atari-2600/defender/
 - /env/gym/atari/defender/
 - /env/gym/atari-2600/defender/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/defender.mp4' | absolute_url }}" type="video/mp4">
</video>

Defender is a two-dimensional side-scrolling shooting game set on the surface of an unnamed planet. The player controls a space ship as it navigates the terrain, flying either to the left or right. A joystick controls the ship's elevation, and five buttons control its horizontal direction and weapons. The object is to destroy alien invaders, while protecting astronauts on the landscape from abduction. Humans that are abducted return as mutants that attack the ship. Defeating the aliens allows the player to progress to the next level. Failing to protect the astronauts, however, causes the planet to explode and the level to become populated with mutants. Surviving the waves of mutants results in the restoration of the planet. Players are allotted three ships to progress through the game and are able to earn more by reaching certain scoring benchmarks. A ship is lost if it is hit by an enemy, or hit by an enemy projectile, or if a hyperspace jump goes wrong (as they randomly do). After exhausting all ships, the game ends.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Defender_(1981_video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 233021.5 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 56533.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 47671.3 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 36242.5 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 34415.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 33996.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 32246.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 27510.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 23666.5 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 21093.5 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 20634.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 15917.5 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 14296.0 | **Human** | Deep Reinforcement Learning with Double Q-learning |
| 14296.0 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 8531.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 1965.5 | **Random** | Deep Reinforcement Learning with Double Q-learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 223025.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 185203.0 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 181074.3 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 113128 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 58718.25 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 55492 | NoisyNet A3C | Noisy Networks for Exploration |
| 55105.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 53537 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 52917 | A3C | Noisy Networks for Exploration |
| 47887 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 47092 | C51 | A Distributional Perspective on Reinforcement Learning |
| 42253 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 42214.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 42120 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 41324.5 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 37896.8 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 37275 | DuDQN | Noisy Networks for Exploration |
| 35338.5 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 23633.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 23633.0 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 20525 | NoisyNet DQN | Noisy Networks for Exploration |
| 18688.9 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 18303 | DQN | Noisy Networks for Exploration |
| 16667.5 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 2874.5 | **Random** | Dueling Network Architectures for Deep Reinforcement Learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|

