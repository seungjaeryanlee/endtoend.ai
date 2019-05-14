---
layout: page
title: Atari Ice Hockey Environment
permalink: /envs/gym/atari/ice-hockey/

redirect_from:
 - /envs/gym/atari-2600/ice-hockey/
 - /env/gym/atari/ice-hockey/
 - /env/gym/atari-2600/ice-hockey/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/ice-hockey.mp4' | absolute_url }}" type="video/mp4">
</video>

Ice Hockey is a game of two-on-two ice hockey. One player on each team is the goalie, and the other plays offensive (although, the goalie is not confined to the goal). As in the real sport, the object of the game is to take control of the puck and shoot it into the opposing goal to score points. When the puck is in player control, it moves left and right along the blade of the hockey stick. The puck can be shot at any of 32 angles, depending on the position of the puck when it's shot.

Human players take control of the skater in control of (or closest to) the puck. The puck can be stolen from its holder; shots can also be blocked by the blade of the hockey stick.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Ice_Hockey_%281981_video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 0.5 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 0.5 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| -0.1 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -0.2 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| -0.7 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -1.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| -1.3 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| -1.7 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| -1.72 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| -2.5 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| -2.8 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| -3.6 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| -3.8 | Prioritized DQN (rank) | Prioritized Experience Replay |
| -3.8 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| -4.7 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| -9.7 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 15.7 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 10.7 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 3.48 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 3.4 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 3 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 1.3 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1.1 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 0.9 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 0.9 | **Human** | Human-level control through deep reinforcement learning |
| 0.5 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 0.2 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 0 | DuDQN | Noisy Networks for Exploration |
| -0.4 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| -0.61 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| -1.6 | DQN | Human-level control through deep reinforcement learning |
| -1.7 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| -1.9 | DQN | A Distributional Perspective on Reinforcement Learning |
| -2 | DQN | Noisy Networks for Exploration |
| -2 | A3C | Noisy Networks for Exploration |
| -2.4 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| -2.7 | DDQN | A Distributional Perspective on Reinforcement Learning |
| -3 | NoisyNet DQN | Noisy Networks for Exploration |
| -3 | NoisyNet A3C | Noisy Networks for Exploration |
| -3.2 | Contingency | Human-level control through deep reinforcement learning |
| -3.5 | C51 | A Distributional Perspective on Reinforcement Learning |
| -3.6 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| -4.2 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| -5.25 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| -9.5 | Linear | Human-level control through deep reinforcement learning |
| -11.2 | **Random** | Human-level control through deep reinforcement learning |
| -13.55 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| -3.5 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| -4.2 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| -4.2 | PPO | Proximal Policy Optimization Algorithm |
| -4.4 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| -5.4 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| -5.9 | ACER | Proximal Policy Optimization Algorithm |
| -6.4 | A2C | Proximal Policy Optimization Algorithm |

