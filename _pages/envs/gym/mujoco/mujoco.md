---
layout: page
title: MuJoCo Environments
permalink: /envs/gym/mujoco
redirect_from: /env/gym/mujoco

nav:
- name: Overview
  permalink: '#overview'
- name: Installation
  permalink: '#installation'
- name: Environments
  permalink: '#environments'
---

## Overview

![]({{ "assets/_pages/envs/gym/mujoco.gif" | absolute_url }})

**MuJoCo** (**Mu**lti-**Jo**int dynamics with **Co**ntact) is a proprietary physics engine for detailed, efficient rigid body simulations with contacts. MuJoCo can be used to create environments with continuous control tasks such as walking or running, so many policy gradient methods have been tested primarily on various MuJoCo environments.



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



## Environments

OpenAI Gym has 10 MuJoCo environments available, ranging from simple tasks such as inverted pendulums (CartPole) to humanoids.

### InvertedPendulum

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/InvertedPdulum.mp4" | absolute_url }}' ></video>

This is a MuJoCo version of  `CartPole-v0`. The agent's goal is to balance a pole on a cart.

### InvertedDoublePendulum

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/InvertedDoublePendulum.mp4" | absolute_url }}' ></video>

This is a harder version of InvertedPendulum, where the pole has another pole on top of it. The agent's goal is to balance a pole on a pole on a cart.

### Reacher

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Reacher.mp4" | absolute_url }}' ></video>

The agent is a 2D "arm", two rigid poles connected by a joint with one end fixed. The 

### Hopper

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Hopper.mp4" | absolute_url }}' ></video>

### Swimmer

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Swimmer.mp4" | absolute_url }}' ></video>

### Walker2d

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Walker2d.mp4" | absolute_url }}' ></video>

### Ant

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Ant.mp4" | absolute_url }}' ></video>

### HalfCheetah

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/HalfCheetah.mp4" | absolute_url }}' ></video>

### Humanoid

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/Humanoid.mp4" | absolute_url }}' ></video>

### HumanoidStandup

<video style="max-width: 50%" autoplay loop mute controls><source src='{{ "assets/_pages/envs/gym/mujoco/HumanoidStandup.mp4" | absolute_url }}' ></video>

