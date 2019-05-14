---
layout: page
title: Atari Amidar Environment
permalink: /envs/gym/atari/amidar/

redirect_from:
 - /envs/gym/atari-2600/amidar/
 - /env/gym/atari/amidar/
 - /env/gym/atari-2600/amidar/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/amidar.mp4' | absolute_url }}" type="video/mp4">
</video>

As in Pac-Man, the player is opposed by enemies who kill on contact. The enemies gradually increase in number as the player advances from one level to the next, and their speed also increases. On odd-numbered levels, the player controls an ape (in some versions labeled "Copier"), and must collect coconuts while avoiding headhunters (labeled "Police" and "Thief"). On even-numbered levels, the player controls a paint roller (labeled "Rustler"), and must paint over each spot of the board while avoiding pigs (labeled "Cattle" and "Thief"). Each level is followed by a short bonus stage.

Whenever a rectangular portion of the board is cleared (either by collecting all surrounding coconuts, or painting all surrounding edges), the rectangle is colored in, and in the even levels, bonus points are awarded (In odd-numbered levels, the player collects points for each coconut eaten). When the player clears all four corners of the board, he is briefly empowered to kill the enemies by touching them (just as when Pac-Man uses a "power pill"). Enemies killed in this way fall to the bottom of the screen and revitalise themselves after a few moments.

The game controls consist of a joystick and a single button labeled "Jump," which can be used up to three times, resetting after a level is cleared or the player loses a life. Pressing the jump button does not cause the player to jump, but causes all the enemies to jump, enabling the player to walk under them.

Extra lives are given at 50,000 points, and per 80,000 scored up to 930,000; after that, no more lives.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Amidar)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 1540.4 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 283.9 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 263.9 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 238.4 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 237.7 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 218.4 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 202.8 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 189.15 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 188.2 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 173.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 172.7 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 169.1 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 133.4 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 129.1 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 98.9 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 11.8 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 5131.2 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 3537 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 2946 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 2726 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 2354.5 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 2296.8 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 2296 | DuDQN | Noisy Networks for Exploration |
| 1793.3 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 1735 | C51 | A Distributional Perspective on Reinforcement Learning |
| 1719.5 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 1675.8 | **Human** | Human-level control through deep reinforcement learning |
| 1641 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 1610 | NoisyNet DQN | Noisy Networks for Exploration |
| 1554.79 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 1546.8 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 1267.9 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1189.7 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 1059.4 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 1015.8 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 978 | DQN | A Distributional Perspective on Reinforcement Learning |
| 924 | DQN | Noisy Networks for Exploration |
| 904 | A3C | Noisy Networks for Exploration |
| 833 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 739.5 | DQN | Human-level control through deep reinforcement learning |
| 702.1 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 497.62 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 491 | NoisyNet A3C | Noisy Networks for Exploration |
| 183.6 | Contingency | Human-level control through deep reinforcement learning |
| 136.82 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 103.4 | Linear | Human-level control through deep reinforcement learning |
| 5.8 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 827.6 | ACER | Proximal Policy Optimization Algorithm |
| 674.6 | PPO | Proximal Policy Optimization Algorithm |
| 380.8 | A2C | Proximal Policy Optimization Algorithm |

