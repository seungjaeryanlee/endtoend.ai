---
layout: page
title: OpenAI Gym Environments
permalink: /envs/gym
redirect_from: /env/gym

nav:
- name: Atari 2600
  permalink: '#atari-2600'
- name: MuJoCo
  permalink: '#mujoco'
---

OpenAI Gym is a toolkit for developing and comparing reinforcement learning algorithms. The `gym` library is  a collection of environments that makes no assumptions about the structure of your agent. Gym comes with a diverse suite of environments, ranging from [classic video games](#atari-2600) and [continuous control tasks](#mujoco).

To learn more about OpenAI Gym, check the official documentation [here](https://gym.openai.com/docs/).



## Atari 2600

![]({{ "assets/_pages/envs/gym/atari/breakout/breakout.gif" | absolute_url }})

**Atari 2600** is a video game console from Atari released on 1977. The game console includes popular games such as *Breakout*, *Ms. Pacman* and *Space Invaders*. Since Deep Q-Networks were introduced by Mnih et al. in 2013, Atari 2600 has been the standard environment to test new Reinforcement Learning algorithms. Atari 2600 has been a challenging testbed due to its high-dimensional video input (size 210 x 160, frequency 60 Hz) and the discrepancy of tasks between games.

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/envs/gym/atari">
Read more
</a>



## MuJoCo