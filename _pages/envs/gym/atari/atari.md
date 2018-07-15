---
layout: page
title: Atari Environments
permalink: /envs/gym/atari
redirect_from:
 - /envs/gym/atari-2600
 - /env/gym/atari
 - /env/gym/atari-2600
 - /envs/atari

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

### No-op starts

| Median | Method                | Score from                                                   |
| ------ | --------------------- | ------------------------------------------------------------ |
| 434%   | Ape-X DQN<sup>1</sup> | [Distributed Prioritized Experience Replay]( https://arxiv.org/abs/1803.00933) |
| 331%   | UNREAL<sup>2</sup>    | [Distributed Prioritized Experience Replay]( https://arxiv.org/abs/1803.00933) |
| 223%   | Rainbow DQN           | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 178%   | C51                   | [Distributed Prioritized Experience Replay]( https://arxiv.org/abs/1803.00933) |
| 164%   | Distributional DQN    | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 151%   | Dueling DDQN          | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 140%   | Prioritized DDQN      | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 118%   | Noisy DQN             | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 117%   | DDQN                  | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 96%    | Gorila DQN            | [Distributed Prioritized Experience Replay]( https://arxiv.org/abs/1803.00933) |
| 79%    | DQN<sup>3</sup>       | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |

<sub>
<sup>1</sup> Ape-X DQN used a lot more (x100) environment frames compared to other results. The training time is half the time of other DQN results.<br/>
<sup>2</sup> Hyperparameters were tuned per game.<br/>
<sup>3</sup> Only evaluated on 49 games.
</sub>

### Human starts

| Median | Method                | Score from                                                   |
| ------ | --------------------- | ------------------------------------------------------------ |
| 358%   | Ape-X DQN<sup>1</sup> | [Distributed Prioritized Experience Replay]( https://arxiv.org/abs/1803.00933) |
| 250%   | UNREAL<sup>2</sup>    | [Distributed Prioritized Experience Replay]( https://arxiv.org/abs/1803.00933) |
| 153%   | Rainbow DQN           | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 128%   | Prioritized DDQN      | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 125%   | C51                   | [Distributed Prioritized Experience Replay]( https://arxiv.org/abs/1803.00933) |
| 125%   | Distributional DQN    | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 117%   | Dueling DDQN          | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 116%   | A3C                   | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 110%   | DDQN                  | [Dueling Network Architectures for Deep Reinforcement Learning](https://arxiv.org/abs/1511.06581) |
| 102%   | Noisy DQN             | [Rainbow: Combining Improvements in Deep Reinforcement Learning](https://arxiv.org/abs/1710.02298) |
| 78%    | Gorila DQN            | [Distributed Prioritized Experience Replay]( https://arxiv.org/abs/1803.00933) |
| 68%    | DQN<sup>3</sup>       | [Rainbow: Combining Improvements in Deep Reinforcement Learning]( https://arxiv.org/abs/1710.02298) |

<sub>
<sup>1</sup> Ape-X DQN used a lot more (x100) environment frames compared to other results. The training time is half the time of other DQN results.<br/>
<sup>2</sup> Hyperparameters were tuned per game. <br/>
<sup>3</sup> Only evaluated on 49 games.
</sub>

## Environments

OpenAI Gym provides 59 Atari 2600 games. You can find their names in [OpenAI Gym environments page](https://gym.openai.com/envs/#atari), but unfortunately they only provide basic documentation.

- Air Raid
- [Alien](/envs/gym/atari/alien)
- [Amidar](/envs/gym/atari/amidar)
- [Assault](/envs/gym/atari/assault)
- [Asterix](/envs/gym/atari/asterix)
- [Asteroids](/envs/gym/atari/asteroids)
- [Atlantis](/envs/gym/atari/atlantis)
- [Bank Heist](/envs/gym/atari/bank-heist)
- [Battle Zone](/envs/gym/atari/battle-zone)
- [Beam Rider](/envs/gym/atari/beam-rider)
- [Berzerk](/envs/gym/atari/berzerk)
- [Bowling](/envs/gym/atari/bowling)
- [Boxing](/envs/gym/atari/boxing)
- [Breakout](/envs/gym/atari/breakout)
- [Carnival](/envs/gym/atari/carnival)
- [Centipede](/envs/gym/atari/centipede)
- [Chopper Command](/envs/gym/atari/chopper-command)
- [Crazy Climber](/envs/gym/atari/crazy-climber)
- [Demon Attack](/envs/gym/atari/demon-attack)
- [Double Dunk](/envs/gym/atari/double-dunk)
- Elevator Action
- [Enduro](/envs/gym/atari/enduro)
- [Fishing Derby](/envs/gym/atari/fishing-derby)
- [Freeway](/envs/gym/atari/freeway)
- [Frostbite](/envs/gym/atari/frostbite)
- [Gopher](/envs/gym/atari/gopher)
- [Gravitar](/envs/gym/atari/gravitar)
- [H.E.R.O.](/envs/gym/atari/hero): Not available in OpenAI Gym.
- [Ice Hockey](/envs/gym/atari/alien)
- [James Bond](/envs/gym/atari/alien)
- Journey Escape
- [Kangaroo](/envs/gym/atari/kangaroo)
- [Krull](/envs/gym/atari/krull)
- [Kung Fu Master](/envs/gym/atari/kung-fu-master)
- [Montezuma's Revenge](/envs/gym/atari/montezumas-revenge)
- [Ms. Pacman](/envs/gym/atari/ms-pacman)
- [Name This Game](/envs/gym/atari/name-this-game)
- [Phoenix](/envs/gym/atari/phoenix)
- [Pitfall](/envs/gym/atari/pit-fall)
- [Pong](/envs/gym/atari/pong)
- Pooyan
- [Private Eye](/envs/gym/atari/private-eye)
- [Qbert](/envs/gym/atari/qbert)
- [River Raid](/envs/gym/atari/river-raid)
- [Road Runner](/envs/gym/atari/road-runner)
- [Robotank](/envs/gym/atari/robotank)
- [Seaquest](/envs/gym/atari/seaquest)
- [Skiing](/envs/gym/atari/skiing)
- [Solaris](/envs/gym/atari/solaris)
- [Space Invaders](/envs/gym/atari/space-invaders)
- [Star Gunner](/envs/gym/atari/star-gunner)
- [Surround](/envs/gym/atari/surround): Not available in OpenAI Gym.
- [Tennis](/envs/gym/atari/tennis)
- [Time Pilot](/envs/gym/atari/time-pilot)
- [Tutankham](/envs/gym/atari/tutankham)
- [Up and Down](/envs/gym/atari/up-and-down)
- [Venture](/envs/gym/atari/venture)
- [Video Pinball](/envs/gym/atari/video-pinball)
- [Wizard of Wor](/envs/gym/atari/wizard-of-wor)
- [Yars Revenge](/envs/gym/atari/yars-revenge)
- [Zaxxon](/envs/gym/atari/zaxxon)

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

