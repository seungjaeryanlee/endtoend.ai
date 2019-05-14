---
layout: page
title: Atari Yars Revenge Environment
permalink: /envs/gym/atari/yars-revenge/

redirect_from:
 - /envs/gym/atari-2600/yars-revenge/
 - /env/gym/atari/yars-revenge/
 - /env/gym/atari-2600/yars-revenge/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/yars-revenge.mp4' | absolute_url }}" type="video/mp4">
</video>

The player controls an insect-like creature called a Yar who must nibble or shoot through a barrier in order to fire his Zorlon Cannon into the breach. The objective is to destroy the evil Qotile, which exists on the other side of the barrier. The Qotile can attack the Yar, even if the barrier is undamaged, by turning into the Swirl and shooting across the screen. In early levels the player is warned before the Swirl is fired, and he can retreat to a safe distance to dodge the attack. The Yar can hide from a pursuing destroyer missile within a "neutral zone" in the middle of the screen, but the Yar cannot shoot while in the zone. The Swirl can kill the Yar anywhere, even inside the Neutral Zone.

To destroy the Qotile or the Swirl, the player has to either touch the Qotile or eat a piece of the shield to activate the Zorlon Cannon, aim the cannon by leading the with the Qotile or Swirl, then fire the cannon and fly the Yar out of the path of the cannon's shot. If the weapon finds its mark, the level ends. If the cannon blast hits a piece of the shield or misses, it is expended. The cannon itself is dangerous to the player, for once it is activated, the fire button launches it instead of firing the Yar's usual shots, and as the cannon tracks the Yar's vertical position, players effectively use the Yar itself as a target and therefore must immediately maneuver to avoid being hit by their own shot. The cannon shot can also rebound off the shield in later levels.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Yars%27_Revenge)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 93007.9 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 58145.9 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 47135.2 | **Human** | Deep Reinforcement Learning with Double Q-learning |
| 47135.2 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 25976.5 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 8267.7 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 7270.8 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 7157.5 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 6626.7 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 6270.6 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 5965.1 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 5615.5 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 5439.5 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 4687.4 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 4577.5 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 1476.9 | **Random** | Deep Reinforcement Learning with Double Q-learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 148855.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 125169.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 109607.5 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 102760 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 102557.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 86101 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 84231.14 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 80530.13 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 69618.1 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 61755 | NoisyNet A3C | Noisy Networks for Exploration |
| 54576.9 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 49622.1 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 49622.1 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 43120 | DuDQN | Noisy Networks for Exploration |
| 35050 | C51 | A Distributional Perspective on Reinforcement Learning |
| 32605 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 28379 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 26447 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 23915 | NoisyNet DQN | Noisy Networks for Exploration |
| 21596 | A3C | Noisy Networks for Exploration |
| 20648 | DQN | Noisy Networks for Exploration |
| 18098.9 | DQN | A Distributional Perspective on Reinforcement Learning |
| 18089.9 | DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 16608.6 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 14739.41 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 3092.9 | **Random** | Dueling Network Architectures for Deep Reinforcement Learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|

