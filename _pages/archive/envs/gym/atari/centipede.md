---
layout: page
title: Atari Centipede Environment
permalink: /envs/gym/atari/centipede/

redirect_from:
 - /envs/gym/atari-2600/centipede/
 - /env/gym/atari/centipede/
 - /env/gym/atari-2600/centipede/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/centipede.mp4' | absolute_url }}" type="video/mp4">
</video>

The player is represented by a small, "somewhat humanoid head" at the bottom of the screen, later depicted as a caped, elf-like character on the Atari 2600, Atari 5200 and Atari 7800 cartridge graphics (though described as being a garden gnome in the trivia section of the cell phone interpretation). The player moves the character about the bottom area of the screen with a trackball and fires laser shots at a centipede advancing from the top of the screen down through a field of mushrooms. Shooting any section of the centipede creates a mushroom; shooting one of the middle segments splits the centipede into two pieces at that point. Each piece then continues independently on its way down the board, with the first section of the rear piece becoming a new head. If the head is destroyed, the section behind it becomes the next head.

The centipede starts at the top of the screen, traveling either left or right. When it hits a mushroom or the edge of the screen, it drops one level and switches direction. Thus, more mushrooms on the screen cause the centipede to descend more rapidly. The player can destroy mushrooms by shooting them, but each takes four hits to destroy.

If the centipede reaches the bottom of the screen, it moves back and forth within the player area and one-segment "head" centipedes are periodically added. This continues until the player has eliminated both the original centipede and all heads. When all the centipede's segments are destroyed, a new centipede forms at the top of the screen. Every time a centipede is eliminated, however, the next one is one segment shorter and is accompanied by one additional, fast-moving "head" centipede.

The player is also menaced by other creatures besides the centipedes. Fleas drop vertically, leaving additional mushrooms in their path; they appear when fewer than five mushrooms are in the player movement area, though the number required increases with level of difficulty. Spiders move across the player area in a zig-zag fashion and occasionally eat some of the mushrooms. Scorpions move horizontally across the screen and poison every mushroom they touch, but these never appear in the player movement region. A centipede touching a poisoned mushroom hurtles straight down toward the player area, then returns to normal behavior upon reaching it.

A player loses a life when hit by a centipede or another enemy, such as a spider or a flea, after which any poisoned or partially damaged mushrooms revert to normal. Points are awarded for each regenerated mushroom. A game ends if all lives are gone.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Centipede_%28video_game%29)*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 10321.9 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 7476.9 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 7160.9 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 6296.87 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 5570.2 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 5166.6 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 4881.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 3853.5 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 3773.1 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 3755.8 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 3489.1 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 3421.9 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 3306.5 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 2959.4 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 1997.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 1925.5 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 12447 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 12017.0 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 11963.2 | **Human** | Human-level control through deep reinforcement learning |
| 11561 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 11049.75 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 9646 | C51 | A Distributional Perspective on Reinforcement Learning |
| 9163 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 9015.5 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 8803 | Linear | Human-level control through deep reinforcement learning |
| 8432.3 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 8309 | DQN | Human-level control through deep reinforcement learning |
| 8282 | NoisyNet A3C | Noisy Networks for Exploration |
| 8167.3 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 7687.5 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 7596 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 7561.4 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 7267.2 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 7125.28 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 6440 | DQN | Noisy Networks for Exploration |
| 5528.13 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 5409.4 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 5350 | A3C | Noisy Networks for Exploration |
| 4916.84 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 4657.7 | DQN | A Distributional Perspective on Reinforcement Learning |
| 4647 | Contingency | Human-level control through deep reinforcement learning |
| 4269 | NoisyNet DQN | Noisy Networks for Exploration |
| 4166 | DuDQN | Noisy Networks for Exploration |
| 4139.4 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 3422.0 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 3402.8 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 2090.9 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 8904.8 | ACER | Proximal Policy Optimization Algorithm |
| 5268.1 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 4386.4 | PPO | Proximal Policy Optimization Algorithm |
| 4319.2 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 3653 | DQN Ours | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 3534 | DRQN | Deep Recurrent Q-Learning for Partially Observable MDPs |
| 3496.5 | A2C | Proximal Policy Optimization Algorithm |

