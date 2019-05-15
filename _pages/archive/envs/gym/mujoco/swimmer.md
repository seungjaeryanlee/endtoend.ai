---
layout: page
title: MuJoCo Swimmer Environment
permalink: /envs/gym/mujoco/swimmer/

redirect_from:
 - /env/gym/mujoco/swimmer/

nav:
 - name: Overview
   permalink: '#overview'
 - name: Performances
   permalink: '#performances'
---


## Overview

<video style="max-width: 50%" autoplay loop mute controls>
    <source src='{{ "assets/_pages/envs/gym/mujoco/Swimmer.mp4" | absolute_url }}' >
</video>

Make a 2D robot swim.


## Performances of RL Agents {#performances}

We list various reinforcement learning algorithms that were tested in this environment. These results are from [RL Database](https://github.com/seungjaeryanlee/rldb). If this page was helpful, please consider giving a star!

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/seungjaeryanlee/rldb" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star seungjaeryanlee/rldb on GitHub">Star</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

| Result | Algorithm | Source |
|--------|-----------|--------|
| 297.0 | Trust-PCL | [Trust-PCL: An Off-Policy Trust Region Method for Continuous Control](https://arxiv.org/abs/1707.01891) |
| 288.1 | TRPO | [Trust-PCL: An Off-Policy Trust Region Method for Continuous Control](https://arxiv.org/abs/1707.01891) |
| 140.7 | A2C | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 138.0 | ACKTR | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 137.25 | TRPO+GAE | [Trust-PCL: An Off-Policy Trust Region Method for Continuous Control](https://arxiv.org/abs/1707.01891) |
| 136.4 | TRPO | [Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation](https://arxiv.org/abs/1708.05144) |
| 111.19 | PPO | [OpenAI Baselines ea68f3b](https://github.com/openai/baselines) |
| 94.96 | TRPO (MPI) | [OpenAI Baselines ea68f3b](https://github.com/openai/baselines) |

