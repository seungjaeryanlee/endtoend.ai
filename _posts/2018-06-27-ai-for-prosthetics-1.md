---
layout: post
title: "AI for Prosthetics Week 1: Understanding the Challenge"
author: Seung Jae (Ryan) Lee
permalink: /blog/ai-for-prosthetics-1
---

# AI for Prosthetics Week 1: Understanding the Challenge

- **Week 1: Understanding the Challenge**
- Week 2: Understanding the Action Space [Coming soon]



## Background

The **AI for Prosthetics** challenge is one of NIPS 2018 Competition tracks. In this challenge, the participants seek to build an agent that can make a 3D model of human with prosthetics run.

![Prosthetics]({{ "assets/blog/ai-for-prosthetics-1/prosthetics.jpeg" | absolute_url }})

This challenge is a continuation of the Learning to Run challenge (shown below) that was part of NIPS 2017 Competition Track. The challenge was enhanced in three ways:

* Experimental data is now allowed
* The model can now fall sideways (2D to 3D)
* A model has a prosthetic leg

![NIPS 2017: Learning to Run]({{ "assets/blog/ai-for-prosthetics-1/learning2run.gif" | absolute_url }})

## Installation

To start the challenge, you first need to install few packages with Anaconda.

```bash
conda create -n opensim-rl -c kidzik opensim python=3.6.1
source activate opensim-rl
conda install -c conda-forge lapack git
pip install git+https://github.com/stanfordnmbl/osim-rl.git
```

[Here](http://osim-rl.stanford.edu/docs/quickstart/) is a detailed description of the installation process.



## Environment

```python
from osim.env import ProstheticEnv
env = ProstheticsEnv()
```

The environment is provided in `opensim` package and follows the conventions of [OpenAI Gym](https://gym.openai.com/). In other words, we can use functions and attributes like `env.reset()`, `env.step()`, `env.observation_space` and `env.action_space`.

To create an agent, we should understand what its inputs and outputs are. The input is the observation given by the environment, and the output is the action chosen by the agent, so let's look at the observation space and action space.

### Observation Space

```python
print(env.observation_space) # Returns `Box(158,)`
```

The observation space is formatted with `gym.spaces.Box`. If you are unfamiliar with OpenAI Gym, you can just understand that the observation is a list of 158 features. (Read more about `Box()` [here](https://gym.openai.com/docs/#spaces).)

```python
observation = env.reset(project=False)
observation, _, _, _ = env.step(action, project=False)
```

To learn more about the observation, we can also pass `project=False` to `env.reset()` or `env.step()`. When `project=True` (default), the observation is a list of length 158. However, with `project=False`, the observation is returned as a dictionary with key strings explaining the meaning behind each number.

```python
{ 'body_acc': { 'calcn_l': [ 1253.6888287987226,
                             453.41172562050133,
                             -462.8844724817433],
                'femur_l': [ 3552.7596723666484,
                             102.32773696018944,
                             -24.145907744606134],
                'femur_r': [ 3577.239291929728,
                             97.25560037366972,
                             -24.145907744606134],
                           ...
```

### Action Space

```python
print(env.action_space)          # Returns `Box(19,)`
print(env.action_space.low)      # Returns list of 19 zeroes
print(env.action_space.high)     # Returns list of 19 ones
print(env.action_space.sample()) # Returns a random action
```

The action space is also formatted with `gym.spaces.Box`. A valid action is a list of length 19, with each element being a number in the interval $[0, 1]$. The actions indicate the amount of force to apply to each muscle.



## osim-rl-helper

I created a repository with starter code for the competition and made it public. You can view it [here](https://github.com/seungjaeryanlee/osim-rl-helper). 

### Agent

I like trying multiple ideas before converging to one, and I like to keep track of every changes I have made. Thus, I created an `Agent` class that will act as a prototype for all agents to neatly organize my failed endeavors. The agent classes will differ greatly by their algorithm, but they will have 2 things in common: they had to be run locally and they had to be submitted to server. Thus, I implemented two functions `Agent.test()` and `Agent.submit()` that used unimplemented `Agent.act()` to retrieve an action from the agent.

However, when I tried to submit the agent, I was faced two errors that depleted my submission count.

1. The default `env_id` for client was wrong: I needed to set `env_id='ProstheticsEnv'`.
2. `env.step()` could not take `action` with NumPy types.

I continued to make this mistake later in the week, so I decided to create a `Agent.sanity_check()` function that is run before `test()` or `submit()`.

```python
def sanity_check(self):
    """
    Check if the agent's actions are legal.
    """
    observation = [0] * 158
    action = self.act(observation)
    if type(action) is not list:
        return (True, 'Action should be a list: are you using NumPy?')
    if not is_jsonable(action):
        return (True, 'Action should be jsonable: are you using NumPy?')

    return (False, '')
```

### Baselines

After I finished creating the basic `Agent` class, I decided to create a few baseline agents. First, I created a `RandomAgent` that always chooses a random action. This is same as the example given in `osim-rl` repository.

```python
class RandomAgent(Agent):
    def __init__(self, env):
        self.env = env

    def act(self, observation):
        return self.env.action_space.sample().tolist()
```

![RandomAgent]({{ "assets/blog/ai-for-prosthetics-1/RandomAgent.gif" | absolute_url }})

I also created a `FixedActionAgent` that always chooses the same action.

```python
class FixedActionAgent(Agent):
    """
    An agent that choose one fixed action at every timestep.
    """
    def __init__(self, env):
        self.action = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0]

    def act(self, observation):
        return self.action
```

![FixedActionAgent]({{ "assets/blog/ai-for-prosthetics-1/FixedActionAgent.gif" | absolute_url }})

I will regularly upload more baseline agents throughout the competition, so if please star it on [GitHub](https://github.com/seungjaeryanlee/osim-rl-helper)!



## What's Next?

Niether `RandomAgent` nor `FixedActionAgent` is even close to a reinforcement learning agent: it chooses an action regardless of the observation it receives. I will try to implement a basic learning agent that uses the observation provided by the environment.

Also, although we can simply plug the observation and the actions into some Policy Gradient algorithm and train it, it is very likely that knowing more about the observation and the actions could allow us to perform feature engineering. Thus, we will also explore the spaces deeper.

