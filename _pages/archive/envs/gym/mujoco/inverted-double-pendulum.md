---
layout: page
title: MuJoCo Inverted Double Pendulum Environment
permalink: /envs/gym/mujoco/inverted-double-pendulum/

redirect_from:
 - /env/gym/mujoco/inverted-double-pendulum/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video style="max-width: 50%" autoplay loop mute controls>
    <source src='{{ "assets/_pages/envs/gym/mujoco/InvertedDoublePendulum.mp4" | absolute_url }}' >
</video>

This is a harder version of InvertedPendulum, where the pole has another pole on top of it. The agent's goal is to balance a pole on a pole on a cart.

## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

| Result | Algorithm | Source |
|--------|-----------|--------|
| 9356.1 | A2C | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 9356.0 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 9355.52 | DDPG | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 9337.47 | TD3 | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 9320.0 | TRPO | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 9081.92 | ACKTR | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 8977.94 | PPO | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 8487.15 | SAC | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 8369.95 | Our DDPG | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 7102.91 | PPO | [OpenAI Baselines ea68f3b](https://github.com/openai/baselines) |
| 6731.63 | TRPO (MPI) | [OpenAI Baselines ea68f3b](https://github.com/openai/baselines) |
| 205.85 | TRPO | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |

