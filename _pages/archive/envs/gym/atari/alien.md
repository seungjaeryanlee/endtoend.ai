---
layout: page
title: Atari Alien Environment
permalink: /envs/gym/atari/alien/

redirect_from:
 - /envs/gym/atari-2600/alien/
 - /env/gym/atari/alien/
 - /env/gym/atari-2600/alien/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/alien.mp4' | absolute_url }}" type="video/mp4">
</video>

In this game based, loosely, on the movie of the same name, you have to move through a maze (the halls of your ship in the manual), ala Pac-Man, collecting dots (destroying alien eggs).

If you collect the power dot (pulsar), you can kill any of the three aliens, for a short time. There are only three enemies in the maze at a time, there is a bonus item at times and only one power dot (pulsar) at a time. When you grab the pulsar, it will next appear in one of two other spots.

After you clear one level, you get a bonus game. You have to move up the screen to the prize at the top past several aliens, reminiscent of Freeway. You do not lose a man if you fail but you only have eight seconds to do it then you are off the the next, harder level.

*Description from [RetroGames](https://www.retrogames.cz/play_251-Atari2600.php)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 6371.3 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 6022.9 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1997.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1486.5 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 1334.7 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 1191.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 1033.4 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 945.3 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 900.5 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 823.7 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 813.54 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 621.6 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 570.2 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 518.4 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 182.1 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 128.3 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 15962.1 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 12689.1 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 9983 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 9491.7 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 7127.7 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 7022 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 6875.4 | **Human** | Human-level control through deep reinforcement learning |
| 6482.1 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 6163 | DuDQN | Noisy Networks for Exploration |
| 5778 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 4871 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 4461.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 4199.4 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 4055.8 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 3941.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 3747.7 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 3197.1 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 3166 | C51 | A Distributional Perspective on Reinforcement Learning |
| 3069 | DQN | Human-level control through deep reinforcement learning |
| 2907.3 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 2620.53 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 2404 | DQN | Noisy Networks for Exploration |
| 2403 | NoisyNet DQN | Noisy Networks for Exploration |
| 2344.6 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 2027 | A3C | Noisy Networks for Exploration |
| 1899 | NoisyNet A3C | Noisy Networks for Exploration |
| 1620.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 1536.05 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 939.2 | Linear | Human-level control through deep reinforcement learning |
| 227.8 | **Random** | Human-level control through deep reinforcement learning |
| 103.2 | Contingency | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 1850.3 | PPO | Proximal Policy Optimization Algorithm |
| 1655.4 | ACER | Proximal Policy Optimization Algorithm |
| 1141.7 | A2C | Proximal Policy Optimization Algorithm |

