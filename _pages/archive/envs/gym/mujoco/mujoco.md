---
layout: page
title: MuJoCo Environments
permalink: /envs/gym/mujoco/
redirect_from: /env/gym/mujoco/

nav:
- name: Overview
  permalink: '#overview'
- name: Environments
  permalink: '#environments'
- name: State of the Art
  permalink: '#state-of-the-art'
- name: Installation
  permalink: '#installation'
---

## Overview

![]({{ "assets/_pages/envs/gym/mujoco.gif" | absolute_url }})

**MuJoCo** (**Mu**lti-**Jo**int dynamics with **Co**ntact) is a proprietary physics engine for detailed, efficient rigid body simulations with contacts. MuJoCo can be used to create environments with continuous control tasks such as walking or running. Thus, many policy gradient methods (TRPO, PPO) have been tested on various MuJoCo environments.




## Environments

OpenAI Gym has 10 MuJoCo environments available, ranging from simple tasks such as inverted pendulums (CartPole) to humanoids.

### InvertedPendulum

This is a MuJoCo version of  `CartPole`. The agent's goal is to balance a pole on a cart.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/InvertedPendulum.mp4" | absolute_url }}' ></video>

### InvertedDoublePendulum

This is a harder version of InvertedPendulum, where the pole has another pole on top of it. The agent's goal is to balance a pole on a pole on a cart.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/InvertedDoublePendulum.mp4" | absolute_url }}' ></video>

### Reacher

Make a 2D robot reach to a randomly located target.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Reacher.mp4" | absolute_url }}' ></video>

### Hopper

Make a two-dimensional one-legged robot hop forward as fast as possible.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Hopper.mp4" | absolute_url }}' ></video>

### Swimmer

Make a 2D robot swim.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Swimmer.mp4" | absolute_url }}' ></video>

### Walker2d

Make a two-dimensional bipedal robot walk forward as fast as possible.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Walker2d.mp4" | absolute_url }}' ></video>

### Ant

Make a four-legged creature walk forward as fast as possible.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Ant.mp4" | absolute_url }}' ></video>

### HalfCheetah

Make a 2D cheetah robot run.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/HalfCheetah.mp4" | absolute_url }}' ></video>

### Humanoid

Make a three-dimensional bipedal robot walk forward as fast as possible, without falling over.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Humanoid.mp4" | absolute_url }}' ></video>

### HumanoidStandup

Make a three-dimensional bipedal robot standup as fast as possible.

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/HumanoidStandup.mp4" | absolute_url }}' ></video>



## State of the Art

There are many papers that have experimented with the MuJoCo continuous control environment, but most papers decided not include exact scores and instead used performance curves. Thus, all results were taken from [*Deep Reinforcement Learning that Matters*](https://arxiv.org/abs/1709.06560), a paper on reproducing state-of-the-art policy gradient methods.

*If you know other papers that report results on the MuJoCo environment, please [email me](mailto:seungjaeryanlee@gmail.com)!*



### HalfCheetah-v1

| Bootstrap Mean | 95% Confidence Bounds | Algorithm |
| -------------- | --------------------- | --------- |
| 5037.26        | (3664.11, 6574.01)    | DDPG      |
| 3888.85        | (2288.13, 5131.96)    | ACKTR     |
| 3043.1         | (1920.4, 4165.86)     | PPO       |
| 1254.55        | (999.52, 1464.86)     | TRPO      |



### Hopper-v1

| Bootstrap Mean | 95% Confidence Bounds | Algorithm |
| -------------- | --------------------- | --------- |
| 2965.33        | (2854.66, 3076.00)    | TRPO      |
| 2715.72        | (2589.06, 2847.93)    | PPO       |
| 2546.89        | (1875.79, 3217.98)    | ACKTR     |
| 1632.13        | (607.98, 2370.21)     | DDPG      |



### Walker2d-v1

| Bootstrap Mean | 95% Confidence Bounds | Algorithm |
| -------------- | --------------------- | --------- |
| 3072.97        | (2957.94, 3183.10)    | TRPO      |
| 2926.92        | (2514.83, 3361.43)    | PPO       |
| 2285.49        | (1246.00, 3235.96)    | ACKTR     |
| 1582.04        | (901.66, 2174.66)     | DDPG      |



### Swimmer-v1

| Bootstrap Mean | 95% Confidence Bounds | Algorithm |
| -------------- | --------------------- | --------- |
| 214.69         | (141.52, 287.92)      | TRPO      |
| 107.88         | (101.13, 118.56)      | PPO       |
| 50.22          | (42.47, 55.37)        | ACKTR     |
| 31.92          | (21.68, 46.23)        | DDPG      |



## Installation

### Prerequisites

To install the MuJoCo environment, you need the OpenAI Gym toolkit. Read [this page](/envs/gym) to learn how to install OpenAI Gym.

You also need to purchase MuJoCo license. MuJoCo offers a 30-day trial license for everyone, and a free license for students using MuJoCo for personal projects only. Visit their [license page](https://www.roboti.us/license.html) for more information.

### Install MuJoCo binary 

1. Download the MuJoCo version 1.50 binaries for [Linux](https://www.roboti.us/download/mjpro150_linux.zip), [OSX](https://www.roboti.us/download/mjpro150_osx.zip), or [Windows](https://www.roboti.us/download/mjpro150_win64.zip).
2. Unzip the downloaded `mjpro150` directory into `~/.mujoco/mjpro150`, and place your license key (the `mjkey.txt` file from your email) at `~/.mujoco/mjkey.txt`.

### Install MuJoCo package

If you did a full install of OpenAI Gym, the MuJoCo package should already be installed. Otherwise, you can install the MuJoCo environments with a single `pip` command:

```bash
pip3 install gym[mujoco]
```

### Test Installation

You can try rendering the `Humanoid-v2` environment to make sure the MuJoCo environment was correctly installed.

```python
import gym
env = gym.make('Humanoid-v2')
env.reset()
env.render()
```
