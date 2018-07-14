---
layout: page
title: RL Environments
permalink: /env

nav:
- name: Atari 2600
  permalink: '#atari-2600'
---

Reinforcement Learning is a study of an agent learning through interactions with the *environment*.  Thus, to test and compare results of different reinforcement learning algorithms, we need *testbed environments*. By far the most commonly used testbed has been 57 *Atari 2600* games. However, different environments require different exploration schemes and different algorithms. Thus, it is important to have various environments.

We attempt to provide a high-quality guide for Reinforcement Learning environments.



## Atari 2600

Atari 2600 is a video game console from Atari released on 1977. The game console includes popular games such as *Breakout*, *Ms. Pacman* and *Space Invaders*. Since Deep Q-Networks were introduced by Mnih et al. in 2013, Atari 2600 has been the standard environment to test new Reinforcement Learning algorithms. Atari 2600 has been a challenging testbed due to its high-dimensional video input (size 210 x 160, frequency 60 Hz) and the discrepancy of tasks between games.

You can find the installation guide and state-of-the-art results for the Atari 2600 environment [here](/env/atari).




