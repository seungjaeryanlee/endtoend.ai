---
layout: page
title: Atari Kung-Fu Master Environment
permalink: /envs/gym/atari/kung-fu-master/

redirect_from:
 - /envs/gym/atari-2600/kung-fu-master/
 - /env/gym/atari/kung-fu-master/
 - /env/gym/atari-2600/kung-fu-master/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video autoplay muted loop controls>
  <source src="{{ 'assets/_pages/envs/gym/atari/kung-fu-master.mp4' | absolute_url }}" type="video/mp4">
</video>

The player controls Thomas with a four-way joystick and two attack buttons for punching and kick. Unlike more conventional side-scrolling games, the joystick is used not only to crouch, but also to jump. Punches and kicks can be performed from a standing, crouching or jumping position. Punches award more points than kicks and do more damage, but their range is shorter.

Underlings encountered by the player include Grippers, who can grab Thomas and drain his energy until shaken off; Knife Throwers, who can throw at two different heights and must be hit twice; and Tom Toms, short fighters who can either grab Thomas or somersault to strike his head when he is crouching. On even-numbered floors, the player must also deal with falling balls and pots, snakes, poisonous moths, fire-breathing dragons, and exploding confetti balls.

The temple has five floors, each ending with a different boss who are "sons of the devil" which are the Stick Fighter of the first floor, the Boomerang Fighter of the second floor, the Strongman of the third floor, the Black Magician of the fourth floor and Mr. X of the final floor who must all be defeated before Thomas can climb the stairs to the next floor so he can rescue Silvia. Thomas must complete each floor within a fixed time; if time runs out or his energy is completely drained, he loses one life and must replay the entire floor. If a boss defeats Thomas, the boss laughs. Although there are five bosses, the game only uses two different synthesized laughs. (The NES version uses a third, high-pitched synthesized laugh for the Black Magician, the fourth boss.)

Once the player has completed all five floors, the game restarts with a more demanding version of the Devil's Temple, although the essential details remain unchanged. A visual indication of the current house is displayed on the screen. For each series of five completed floors, a dragon symbol appears in the upper-right corner of the screen. After three dragons have been added, the dragon symbols blink.

*Description from [Wikipedia](https://en.wikipedia.org/wiki/Kung-Fu_Master_(video_game))*


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

### Human Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 40835.0 | A3C LSTM | Asynchronous Methods for Deep Reinforcement Learning |
| 37484.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 33890.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 31676.0 | Prioritized DDQN (rank, tuned) | Prioritized Experience Replay |
| 31244.0 | Prioritized DDQN (prop, tuned) | Prioritized Experience Replay |
| 30207.0 | DDQN (tuned) | Deep Reinforcement Learning with Double Q-learning |
| 28999.8 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 28819.0 | A3C FF | Asynchronous Methods for Deep Reinforcement Learning |
| 24288.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 22771.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 20786.8 | **Human** | Massively Parallel Methods for Deep Reinforcement Learning |
| 20620.0 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 20181.0 | Prioritized DQN (rank) | Prioritized Experience Replay |
| 11875.0 | DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 3046.0 | A3C FF 1 day | Asynchronous Methods for Deep Reinforcement Learning |
| 304.0 | **Random** | Massively Parallel Methods for Deep Reinforcement Learning |


### No-op Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 76642 | QR-DQN-1 | Distributional Reinforcement Learning with Quantile Regression |
| 73512 | IQN | Implicit Quantile Networks for Distributional Reinforcement Learning |
| 71514 | QR-DQN-0 | Distributional Reinforcement Learning with Quantile Regression |
| 65836.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 61621.5 | Reactor ND | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 59799.5 | Reactor | The Reactor: A fast and sample-efficient Actor-Critic agent for Reinforcement Learning |
| 55790 | NoisyNet A3C | Noisy Networks for Exploration |
| 52181.0 | Rainbow | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 48375.0 | PDD DQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 48192 | C51 | A Distributional Perspective on Reinforcement Learning |
| 43375.5 | IMPALA (deep) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 43009.0 | Distributional DQN | Rainbow: Combining Improvements in Deep Reinforcement Learning |
| 42259.0 | IMPALA (shallow) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 41905.0 | IMPALA (deep, multitask) | IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures |
| 41672 | NoisyNet DuDQN | Noisy Networks for Exploration |
| 37422 | A3C | Noisy Networks for Exploration |
| 36310 | NoisyNet DQN | Noisy Networks for Exploration |
| 34954.0 | ACKTR | Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation |
| 34294.0 | DuDQN | Dueling Network Architectures for Deep Reinforcement Learning |
| 30444 | DQN | Noisy Networks for Exploration |
| 30316 | DuDQN | Noisy Networks for Exploration |
| 29710.0 | DDQN | A Distributional Perspective on Reinforcement Learning |
| 29486.0 | DDQN | Deep Reinforcement Learning with Double Q-learning |
| 29151 | Contingency | Human-level control through deep reinforcement learning |
| 27543.33 | Gorila DQN | Massively Parallel Methods for Deep Reinforcement Learning |
| 26059.0 | DQN | A Distributional Perspective on Reinforcement Learning |
| 23270 | DQN | Human-level control through deep reinforcement learning |
| 22736.3 | **Human** | Dueling Network Architectures for Deep Reinforcement Learning |
| 22736.2 | **Human** | Human-level control through deep reinforcement learning |
| 19544 | Linear | Human-level control through deep reinforcement learning |
| 258.5 | **Random** | Human-level control through deep reinforcement learning |


### Normal Starts

| Result | Algorithm | Source |
|--------|-----------|--------|
| 27599.3 | ACER | Proximal Policy Optimization Algorithm |
| 24900.3 | A2C | Proximal Policy Optimization Algorithm |
| 23310.3 | PPO | Proximal Policy Optimization Algorithm |

