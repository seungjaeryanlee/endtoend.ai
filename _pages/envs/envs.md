---
layout: page
title: RL Environments
permalink: /envs
redirect_from: /env

display_front: true
front_image: /assets/home/envs.svg
front_text: 
    Read more about various Reinforcement Learning environments, including the
    installation guide and state-of-the-art results for each environment.

nav:
- name: OpenAI Gym
  permalink: '#openai-gym'
- name: Unity ML-Agents
  permalink: '#unity-ml-agents'
- name: PySC2
  permalink: '#pysc2'
- name: PyGame Learning Environment
  permalink: '#pygame-learning-environment'
- name: OpenSim RL
  permalink: '#opensim-rl'
---

Reinforcement Learning is a study of an agent learning through interactions with the *environment*.  Thus, to test and compare results of different reinforcement learning algorithms, we need *testbed environments*. By far the most commonly used testbed has been 57 *Atari 2600* games. However, different environments require different exploration schemes and different algorithms. Thus, it is important to have various environments.

We attempt to provide a high-quality guide for Reinforcement Learning environments.



## OpenAI Gym

![]({{ "assets/_pages/envs/gym/mujoco/mujoco.gif" | absolute_url }})

**OpenAI Gym** is a toolkit for developing and comparing reinforcement learning algorithms. The `gym` library is  a collection of environments that makes no assumptions about the structure of your agent. Gym comes with a diverse suite of environments, ranging from classic video games such as [Atari 2600](/envs/gym#atari-2600) and [continuous control tasks](/envs/gym#mujoco).

Visit the [Gym Environments](/envs/gym) page for state-of-the-art results and installation guides.



## Unity ML-Agents

![]({{ "assets/_pages/envs/ml-agents.gif" | absolute_url }})

**The Unity Machine Learning Agents Toolkit** (ML-Agents) is an open-source Unity plugin that enables games and simulations to serve as environments for training intelligent agents.

You can find the documentation [in their GitHub page](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Readme.md).



## PySC2

![]({{ "assets/_pages/envs/pysc2.gif" | absolute_url }})

**PySC2** is [DeepMind](http://deepmind.com/)'s Python component of the StarCraft II Learning Environment (SC2LE). It exposes [Blizzard Entertainment](http://blizzard.com/)'s [StarCraft II Machine Learning API](https://github.com/Blizzard/s2client-proto) as a Python RL Environment. This is a collaboration between DeepMind and Blizzard to develop StarCraft II into a rich environment for RL research. PySC2 provides an interface for RL agents to interact with StarCraft 2, getting observations and sending actions.

You can find the documentation [in their GitHub page](https://github.com/deepmind/pysc2).



## PyGame Learning Environment

![]({{ "assets/_pages/envs/pygame-learning-environment.gif" | absolute_url }})

**PyGame Learning Environment (PLE)** is a learning environment, mimicking the [Arcade Learning Environment](https://github.com/mgbellemare/Arcade-Learning-Environment) interface, allowing a quick start to Reinforcement Learning in Python. The goal of PLE is allow practitioners to focus design of models and experiments instead of environment design.

You can find the documentation [in their GitHub page](https://github.com/ntasfi/PyGame-Learning-Environment).



## OpenSim RL

![]({{ "assets/_pages/envs/opensim-rl.gif" | absolute_url }})

**OpenSim RL** allows you to synthesize physiologically accurate movement by combining biomechanical expertise embedded in the [OpenSim](http://opensim.stanford.edu/) simulation software with state-of-the-art control strategies using Deep Reinforcement Learning.

You can find the documentation [here](http://osim-rl.stanford.edu/docs/home/).

