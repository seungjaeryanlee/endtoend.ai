---
layout: page
title: MuJoCo Walker2D Environment
permalink: /envs/gym/mujoco/walker2d/

redirect_from:
 - /env/gym/mujoco/walker2d/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video style="max-width: 50%" autoplay loop mute controls>
    <source src='{{ "assets/_pages/envs/gym/mujoco/Walker2d.mp4" | absolute_url }}' >
</video>

Make a two-dimensional bipedal robot walk forward as fast as possible.

## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

| Result | Algorithm | Source |
|--------|-----------|--------|
| 6874.1 | TRPO | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 6198.8 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 6028.73 | TRPO+GAE | [Trust-PCL: An Off-Policy Trust Region Method for Continuous Control](https://arxiv.org/abs/1707.01891) |
| 5874.9 | A2C | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 5027.2 | Trust-PCL | [Trust-PCL: An Off-Policy Trust Region Method for Continuous Control](https://arxiv.org/abs/1707.01891) |
| 4682.82 | TD3 | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 3424.95 | PPO | [OpenAI Baselines ea68f3b](https://github.com/openai/baselines) |
| 3317.69 | PPO | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 3098.11 | Our DDPG | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 2838.4 | TRPO | [Trust-PCL: An Off-Policy Trust Region Method for Continuous Control](https://arxiv.org/abs/1707.01891) |
| 2342.63 | TRPO (MPI) | [OpenAI Baselines ea68f3b](https://github.com/openai/baselines) |
| 2321.47 | TRPO | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 1843.85 | DDPG | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 1283.67 | SAC | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |
| 1216.7 | ACKTR | [Addressing Function Approximation Error in Actor-Critic Methods](https://arxiv.org/abs/1802.09477) |

