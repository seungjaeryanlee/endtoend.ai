---
layout: page
title: Atari Krull Environment
permalink: /envs/gym/atari/krull/

redirect_from:
 - /envs/gym/atari-2600/krull/
 - /env/gym/atari/krull/
 - /env/gym/atari-2600/krull/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/krull.mp4' | absolute_url }}" type="video/mp4">
</video>

The game generally follows the plot of the movie, and takes place on four separate screens. The first level begins with the player, as Colwyn, at his wedding to Lyssa, which is interrupted by the extraterrestrial Slayers. The game continues to generate new Slayers for the player to fight until he is overwhelmed and Lyssa is abducted to the Black Fortress.

The player then traverses the Iron Desert on a Fire Mare, stocking up on Colwyn's magical throwing weapon, the Glaive (in the film there is only one), by pressing the button each time the horse rides over one.

The next level takes place in the lair of the Widow of the Web. The player is required to jump between moving threads of web, working their way upward towards the Widow at the top of the screen, while avoiding a giant spider. After completing this task, the Widow reveals the location of the Black Fortress, and the player again rides a Fire Mare through the Iron Desert to reach it. If the player fails to arrive at the given location at the correct time of day, according to a timer at the top of the screen, he loses a life and must return to the Widow to find out the Fortress's new location.

Upon reaching the Black Fortress, the player must penetrate the energy barrier surrounding Lyssa with the Glaive (of which the player has a limited number), while the Beast attempts to block the player's shots and hit him with fireballs. If the Glaive hits the Beast, or is not caught on the rebound by the player, that Glaive is lost. If all of the player's Glaives are lost, he is expelled from the Fortress and must return to the Widow of the Web level, discover the new location of the Black Fortress, and traverse the Iron Desert again.

If the player manages to break through the barrier surrounding Lyssa, she transforms into a fireball which the player can throw at the Beast. If the fireball hits, the player wins, and the game starts over at a higher level of difficulty.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Krull_(video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 11209.5 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 8066.6 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 8051.6 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 7658.6 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 7406.5 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 6872.8 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 6796.1 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 6757.8 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 6715.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 6363.09 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 6130.4 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 5911.4 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 5560.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 3864.0 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 2109.1 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 1151.9 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 22849 | NoisyNet A3C | Noisy Networks for Exploration |
| 11451.9 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 11447 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 11139 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 10807.8 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 10754 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 10733 | DuDQN | Noisy Networks for Exploration |
| 10707 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 10374.4 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 10237.8 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 9930.8 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 9896.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 9885.9 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 9735 | C51 | A Distributional Perspective on Reinforcement Learning |
| 9686.9 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 9422 | A3C | Noisy Networks for Exploration |
| 9247.6 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 8805 | NoisyNet DQN | Noisy Networks for Exploration |
| 8741.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 8422.3 | DQN | A Distributional Perspective on Reinforcement Learning |
| 8343 | DQN | Noisy Networks for Exploration |
| 8147.4 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 7920.5 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 7882.0 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 4396.7 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 3805 | DQN | Human-level control through deep reinforcement learning |
| 3372 | Linear | Human-level control through deep reinforcement learning |
| 3341 | Contingency | Human-level control through deep reinforcement learning |
| 2665.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 2394.6 | **Human** | Human-level control through deep reinforcement learning |
| 1598.0 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 8367.4 | A2C | Proximal Policy Optimization Algorithm |
| 7942.3 | PPO | Proximal Policy Optimization Algorithm |
| 7268.4 | ACER | Proximal Policy Optimization Algorithm |

