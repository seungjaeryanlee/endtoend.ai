---
layout: page
title: Atari Surround Environment
permalink: /envs/gym/atari/surround/

redirect_from:
 - /envs/gym/atari-2600/surround/
 - /env/gym/atari/surround/
 - /env/gym/atari-2600/surround/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/surround.mp4' | absolute_url }}" type="video/mp4">
</video>

Like its predecessor Blockade, the object of Surround is to maneuver a square across the screen, leaving a trail behind. A player wins by forcing the other player to crash into one of the trails. Twelve game variations include options allow for speed-up, diagonal movement, wrap-around, and "erase" (the choice to not draw at a given moment). In addition, the sprites can be set to operate at a slower speed, or progressively speed up through five speeds.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Surround_(video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 7.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 5.9 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 5.4 | **Human** | Deep Reinforcement Learning with Double Q-learning |
| 5.4 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 4.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 4.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1.9 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| -0.2 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| -0.9 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| -5.3 | Prioritized DQN (rank) | Prioritized Experience Replay |
| -6.0 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -7.6 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| -8.3 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| -9.6 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| -9.7 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| -9.7 | **Random** | Deep Reinforcement Learning with Double Q-learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 10 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 9.7 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 9.7 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 9.4 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 8.2 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 7.56 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 7.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 6.8 | C51 | A Distributional Perspective on Reinforcement Learning |
| 6.7 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 6.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 6.2 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 4.4 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 4.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1.2 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1 | NoisyNet A3C | Noisy Networks for Exploration |
| 1 | DuDQN | Noisy Networks for Exploration |
| 0.9 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| -1 | NoisyNet DQN | Noisy Networks for Exploration |
| -5.6 | DQN | A Distributional Perspective on Reinforcement Learning |
| -5.6 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| -6 | DQN | Noisy Networks for Exploration |
| -8 | A3C | Noisy Networks for Exploration |
| -8.13 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| -8.51 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| -10.0 | **Random** | Dueling Network Architectures for Deep Reinforcement Learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|

