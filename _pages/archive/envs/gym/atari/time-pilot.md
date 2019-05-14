---
layout: page
title: Atari Time Pilot Environment
permalink: /envs/gym/atari/time-pilot/

redirect_from:
 - /envs/gym/atari-2600/time-pilot/
 - /env/gym/atari/time-pilot/
 - /env/gym/atari-2600/time-pilot/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/time-pilot.mp4' | absolute_url }}" type="video/mp4">
</video>

The player assumes the role of a pilot of a futuristic fighter jet, trying to rescue fellow pilots trapped in different time eras. In each level the player must fight off hordes of enemy craft then defeat a much stronger enemy ship. The player's plane always remains in the center of the screen.

The player travels through five time periods, rescuing stranded fellow pilots. The player must fight off droves of enemy craft while picking up parachuting friendly pilots. Once 56 enemy craft are defeated, initially 25 on the MSX platform and increasing by 5 after each game cycle (finishing the last battle against the UFOs), the player must defeat the mothership for the time period. Once she is destroyed, any remaining enemy craft are also eliminated and the player time-travels to the next level. All the levels have a blue sky and clouds as the background except the last level, which has space and asteroids instead. The specific eras visited, the common enemies, and the motherships are the following:

1. 1910: biplanes and a blimp
2. 1940: WWII monoplanes and a B-25
3. 1970: helicopters and a large, blue CH-46
4. 1982 (Konami version)/1983 (Centuri version): jets and a B-52
5. 2001: UFOs

The mothership is destroyed with seven direct hits. Once all the eras have been visited, the levels start over again but are harder and faster. The Game Boy Advance version of Time Pilot in Konami Arcade Classics includes a hidden sixth era, 1,000,000 BC, where the player must destroy vicious pterodactyls in order to return to the early 20th century.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Time_Pilot)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 27202.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 12679.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 11190.5 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 8267.8 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 7684.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 7448.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 6608.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 6601.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 5963.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 5825.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 5650.0 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 5640.0 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 5391.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 5375.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 4871.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 3273.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 48481.5 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 22286.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 19401 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 18871.5 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 18841.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 17301 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 14094 | DuDQN | Noisy Networks for Exploration |
| 12926.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 12236 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 11666.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 11666.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 11124 | NoisyNet A3C | Noisy Networks for Exploration |
| 10659.33 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 10345 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 10294 | A3C | Noisy Networks for Exploration |
| 9344 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 8329 | C51 | A Distributional Perspective on Reinforcement Learning |
| 7964.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 7875.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 7553.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 7035 | NoisyNet DQN | Noisy Networks for Exploration |
| 6617.5 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 6167 | DQN | Noisy Networks for Exploration |
| 5947 | DQN | Human-level control through deep reinforcement learning |
| 5925.0 | **Human** | Human-level control through deep reinforcement learning |
| 5229.2 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 4870.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 3747.5 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 3741 | Linear | Human-level control through deep reinforcement learning |
| 3568.0 | **Random** | Human-level control through deep reinforcement learning |
| 24.9 | Contingency | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 4342.0 | PPO | Proximal Policy Optimization Algorithm |
| 4175.7 | ACER | Proximal Policy Optimization Algorithm |
| 2898.0 | A2C | Proximal Policy Optimization Algorithm |

