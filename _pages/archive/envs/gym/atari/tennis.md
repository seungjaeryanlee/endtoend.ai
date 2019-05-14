---
layout: page
title: Atari Tennis Environment
permalink: /envs/gym/atari/tennis/

redirect_from:
 - /envs/gym/atari-2600/tennis/
 - /env/gym/atari/tennis/
 - /env/gym/atari-2600/tennis/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/tennis.mp4' | absolute_url }}" type="video/mp4">
</video>

Tennis offers singles matches for one or two players; one player is colored pink, the other blue. The game has two user-selectable speed levels. When serving and returning shots, the tennis players automatically swing forehand or backhand as the situation demands, and all shots automatically clear the net and land in bounds.

The first player to win one six-game set is declared the winner of the match (if the set ends in a 6-6 tie, the set restarts from 0-0). This differs from professional tennis, in which player must win at least two out of three six-game sets.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Tennis_(1981_video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 22.6 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 11.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 4.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| -0.69 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| -2.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| -2.2 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -2.3 | Prioritized DQN (rank) | Prioritized Experience Replay |
| -2.3 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| -5.3 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| -6.3 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| -6.4 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| -6.7 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| -7.8 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| -10.2 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| -13.2 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| -21.4 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 23.7 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 23.6 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 23.6 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 23.6 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 23.6 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 23.4 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 23.3 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 23.1 | C51 | A Distributional Perspective on Reinforcement Learning |
| 12.2 | DQN | A Distributional Perspective on Reinforcement Learning |
| 10.87 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 8 | DQN | Noisy Networks for Exploration |
| 5.1 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 5.1 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1.7 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 0.55 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 0.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 0 | Contingency | Human-level control through deep reinforcement learning |
| 0 | NoisyNet DQN | Noisy Networks for Exploration |
| 0 | NoisyNet A3C | Noisy Networks for Exploration |
| 0 | DuDQN | Noisy Networks for Exploration |
| 0 | NoisyNet DuDQN | Noisy Networks for Exploration |
| -0.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -0.1 | Linear | Human-level control through deep reinforcement learning |
| -1.89 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| -2.5 | DQN | Human-level control through deep reinforcement learning |
| -6 | A3C | Noisy Networks for Exploration |
| -8.12 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| -8.3 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| -8.9 | **Human** | Human-level control through deep reinforcement learning |
| -23.8 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| -14.8 | PPO | Proximal Policy Optimization Algorithm |
| -17.6 | ACER | Proximal Policy Optimization Algorithm |
| -22.2 | A2C | Proximal Policy Optimization Algorithm |

