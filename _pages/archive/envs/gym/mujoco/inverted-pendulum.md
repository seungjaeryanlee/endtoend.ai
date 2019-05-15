---
layout: page
title: MuJoCo Inverted Pendulum Environment
permalink: /envs/gym/mujoco/inverted-pendulum/

redirect_from:
 - /env/gym/mujoco/inverted-pendulum/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video style="max-width: 50%" autoplay loop mute controls>
    <source src='{{ "assets/_pages/envs/gym/mujoco/InvertedPendulum.mp4" | absolute_url }}' >
</video>

This is a MuJoCo version of `CartPole`. The agent’s goal is to balance a pole on a cart.

## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

| Result | Algorithm | Source |
|--------|-----------|--------|
| 1000.0 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 1000.0 | A2C | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 1000.0 | TRPO | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 1000.0 | ACKTR | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 1000.0 | DDPG | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 1000.0 | Our DDPG | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 1000.0 | PPO | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 1000.0 | SAC | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 1000.0 | TD3 | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 985.4 | TRPO | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 905.1 | TRPO (MPI) | [OpenAI Baselines ea68f3b](https://github.com/openai/baselines) |
| 809.43 | PPO | [OpenAI Baselines ea68f3b](https://github.com/openai/baselines) |

