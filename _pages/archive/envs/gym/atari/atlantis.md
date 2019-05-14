---
layout: page
title: Atari Atlantis Environment
permalink: /envs/gym/atari/atlantis/

redirect_from:
 - /envs/gym/atari-2600/atlantis/
 - /env/gym/atari/atlantis/
 - /env/gym/atari-2600/atlantis/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/atlantis.mp4' | absolute_url }}" type="video/mp4">
</video>

The player controls the last defenses of the City of Atlantis against the Gorgon invaders. The city has seven bases, which are vulnerable to attack. Three of these have firepower capabilities to destroy the Gorgon ships before they manage to fire death rays at one of the settlements. The gun bases have fixed cannons; the center base fires straight up, while the far left and far right bases fire diagonally upwards across the screen. The center cannon also creates a shield that protects the settlements from the death rays, so once the center cannon is destroyed, the remaining settlements become vulnerable to attack. The enemy ships pass back and forth from left to right four times before they enter firing range, giving an ample opportunity to blow them away. Lost bases can be regained by destroying enough Gorgon ships.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Atlantis_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 911091.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 875822.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 814684.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 772392.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 629166.5 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 593642.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 445360.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 423252.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 330647.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 319688.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 289803.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 260556.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 207526.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 76108.0 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 26575.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 13463.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 3433182.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 1046625 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 978200 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 972175 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 971850 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 968179.5 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 923733 | NoisyNet DQN | Noisy Networks for Exploration |
| 902742 | DuDQN | Noisy Networks for Exploration |
| 876000 | DQN | Noisy Networks for Exploration |
| 849967.5 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 841075 | C51 | A Distributional Perspective on Reinforcement Learning |
| 826659.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 773355.5 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 465700 | NoisyNet A3C | Noisy Networks for Exploration |
| 460430.5 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 422700 | A3C | Noisy Networks for Exploration |
| 395762.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 382572.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 308258 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 302831.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 279987.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 273895.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 106056.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 100069.16 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 85641 | DQN | Human-level control through deep reinforcement learning |
| 64758.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 62687 | Linear | Human-level control through deep reinforcement learning |
| 29028.1 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 29028.1 | **Human** | Human-level control through deep reinforcement learning |
| 12850.0 | **Random** | Human-level control through deep reinforcement learning |
| 852.9 | Contingency | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 2311815.0 | PPO | Proximal Policy Optimization Algorithm |
| 1841376.0 | ACER | Proximal Policy Optimization Algorithm |
| 729265.3 | A2C | Proximal Policy Optimization Algorithm |

