---
layout: page
title: Atari Environments
permalink: /envs/atari
redirect_from:
 - /envs/atari-2600
 - /env/atari
 - /env/atari-2600

nav:
 - name: Overview
   permalink: '#overview'
 - name: Installation
   permalink: '#installation'
 - name: State of the Art
   permalink: '#state-of-the-art'
 - name: Environments
   permalink: '#environments'
 - name: References
   permalink: '#references'
---

## Overview

Atari 2600 is a video game console from Atari that was released in 1977. The game console included popular games such as *Breakout*, *Ms. Pacman* and *Space Invaders*. Since Deep Q-Networks were introduced by Mnih et al. in 2013, Atari 2600 has been the standard environment to test new Reinforcement Learning algorithms. Atari 2600 has been a challenging testbed due to its high-dimensional video input (size 210 x 160, frequency 60 Hz) and the discrepancy of tasks between games.

The Atari 2600 environments was originally provided through the [Arcade Learning Environment (ALE)](https://github.com/mgbellemare/Arcade-Learning-Environment). The environments have been wrapped by OpenAI Gym to create a more standardized interface. The OpenAI Gym provides 59 Atari 2600 games as environments. For a full list of environments, check [below](#environments).



## Installation

### Prerequisites

To install the Atari 2600 environment, you need the OpenAI Gym toolkit. Read [this page](/envs/gym) to learn how to install OpenAI Gym.

### Installation via pip

If you did a full install of OpenAI Gym, the Atari 2600 should already be installed. Otherwise, you can install the Atari 2600 environment with a single `pip` command:

```bash
pip3 install gym[atari]
```

### Test Installation

You can run a simple random agent to make sure the Atari 2600 environment was correctly installed.

```python
import gym
env = gym.make('Pong-v0')
done = False
while not done:
    _, _, done, _ = env.step(env.action_space.sample())
    env.render()
env.close()
```



## State of the Art

These are the published state-of-the-art results for Atari 2600 testbed. For better comparison of algorithms,  we only included results that include majority of the 59 games available.

State of the Art results for individual Atari 2600 games can be found in [their respective pages](#environments).

| Median (No-op starts) | Median (Human starts) | Method | Notes |
| --------------------- | --------------------- | ------ | ----- |
|                       |                       |        |       |



## Environments

OpenAI Gym provides 59 Atari 2600 games. You can find their names in [OpenAI Gym environments page](https://gym.openai.com/envs/#atari), but unfortunately they only provide basic documentation.

- AirRaid
- Alien
- Amidar
- Assault
- Asterix
- Asteroids
- Atlantis
- Bank Heist
- Battle Zone
- Beam Rider
- Berzerk
- Bowling
- Boxing
- Breakout
- Carnival
- Centipede
- Chopper Command
- Crazy Climber
- Demon Attack
- Double Dunk
- Elevator Action
- Enduro
- Fishing Derby
- Freeway
- Frostbite
- Gopher
- Gravitar
- Ice Hockey
- James Bond
- Journey Escape
- Kangaroo
- Krull
- Kung Fu Master
- Montezuma's Revenge
- Ms. Pacman
- Name This Game
- Phoenix
- Pitfall
- Pong
- Pooyan
- Private Eye
- Qbert
- River Raid
- Road Runner
- Robotank
- Seaquest
- Skiing
- Solaris
- Space Invaders
- Star Gunner
- Tennis
- Time Pilot
- Tutankham
- Up N Down
- Venture
- Video Pinball
- Wizard of Wor
- Yars Revenge
- Zaxxon

### Variants

Each game has a few variants, distinguished by their suffixes. Through these variants, you can configure frame skipping and sticky actions. Frame skipping is a technique of using $k$-th frame. In other words, the agent only makes action every $k$ frames, and the same action is performed for $k$ frames. Sticky actions is a technique of setting some nonzero probability $p$ of action being repeated without agent's control. This adds  stochasticity to the deterministic Atari 2600 environments.

For example, there are six variants for the *Pong* environment.

| Name                                | Frame Skip $k$  | Repeat action probability $p$ |
| ----------------------------------- | --------------- | ----------------------------- |
| `Pong-v0`                           | 2~4<sup>1</sup> | 0.25                          |
| `Pong-v4`                           | 2~4<sup>1</sup> | 0                             |
| `PongDeterministic-v0`              | 4 <sup>2</sup>  | 0.25                          |
| `PongDeterministic-v4` <sup>3</sup> | 4 <sup>2</sup>  | 0                             |
| `PongNoFrameskip-v0`                | 1               | 0.25                          |
| `PongNoFrameskip-v4`                | 1               | 0                             |

<sub>
<sup>1</sup> $k$ is chosen randomly at every step from values $\{2, 3, 4\}$.<br/><sup>2</sup> For *Space Invaders*,  the `Deterministic` variant $k=3$. This is because when $k=4$, the lasers are invisible because it frame skip coincides with the blinking frequency of lasers.<br/><sup>3</sup> `Deterministic-v4` is the configuration used to assess Deep Q-Networks.
</sub>

Also, there are RAM environments such as `Pong-ram-v0`, where the observation is the RAM of the Atari machine instead of the 210 x 160 visual input. You can also add suffixes to RAM environments.



## References

### Variants

[Revisiting the Arcade Learning Environment](https://arxiv.org/abs/1709.06009): More details about *frame skipping* and *sticky actions* in Sections 2 and 5.

[Table of Environments](https://github.com/openai/gym/wiki/Table-of-environments): An old wiki page listing the observation, action, and reward space for each Atari environment.

### Installation

[Official Installation README](https://github.com/openai/gym#id7) Installation Guide from OpenAI Gym repository

