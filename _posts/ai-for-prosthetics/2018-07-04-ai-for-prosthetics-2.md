---
layout: post
title: "AI for Prosthetics Week 2: Understanding the Action Space"
author: Seungjae Ryan Lee
permalink: /blog/ai-for-prosthetics-2/
tags:
 - reinforcement-learning
 - ai-for-prosthetics
 - competition

image: /assets/blog/ai-for-prosthetics/2/front.jpeg
excerpt: >
    Last week, we saw how a valid action has 19 numbers, each between 0 and 1.
    The 19 numbers represented the amount of force to put to each muscle. I know
    barely anything about muscles, so I decided to manually go through all the
    muscles to understand the effects of each muscle...

nav:
- name: Muscles
  permalink: '#muscles'
- name: osim-rl-helper
  permalink: '#osim-rl-helper'
- name: What's Next?
  permalink: '#whats-next'
---


## Weeks

* [Week 1: Understanding the Challenge](/blog/ai-for-prosthetics-1)
* **Week 2: Understanding the Action Space**
* [Week 3 - 4: Understanding the Observation Space](/blog/ai-for-prosthetics-3)
* [Week 5: Understanding the Reward](/blog/ai-for-prosthetics-5)
- [Week 6 - 8: General Techniques of RL](/blog/ai-for-prosthetics-6)
- [Week 9 - 10: Unorthodox Approaches](/blog/ai-for-prosthetics-9)


## Muscles

[Last week](/blog/ai-for-prosthetics-1), we saw how a valid action has 19 numbers, each between 0 and 1. The 19 numbers represented the amount of force to put to each muscle. I know barely anything about muscles, so I decided to manually go through all the muscles to gain some intuition about the effects of each muscle.

#### Index 0

![](/assets/blog/ai-for-prosthetics/2/0.gif)

#### Index 1

![](/assets/blog/ai-for-prosthetics/2/1.gif)

#### Index 2

![](/assets/blog/ai-for-prosthetics/2/2.gif)

#### Index 3

![](/assets/blog/ai-for-prosthetics/2/3.gif)

#### Index 4

![](/assets/blog/ai-for-prosthetics/2/4.gif)

#### Index 5

![](/assets/blog/ai-for-prosthetics/2/5.gif)

#### Index 6

![](/assets/blog/ai-for-prosthetics/2/6.gif)

#### Index 7

![](/assets/blog/ai-for-prosthetics/2/7.gif)

#### Index 8

![](/assets/blog/ai-for-prosthetics/2/8.gif)

#### Index 9

![](/assets/blog/ai-for-prosthetics/2/9.gif)

#### Index 10

![](/assets/blog/ai-for-prosthetics/2/10.gif)

#### Index 11

![](/assets/blog/ai-for-prosthetics/2/11.gif)

#### Index 12

![](/assets/blog/ai-for-prosthetics/2/12.gif)

#### Index 13

![](/assets/blog/ai-for-prosthetics/2/13.gif)

#### Index 14

![](/assets/blog/ai-for-prosthetics/2/14.gif)

#### Index 15

![](/assets/blog/ai-for-prosthetics/2/15.gif)

#### Index 16

![](/assets/blog/ai-for-prosthetics/2/16.gif)

#### Index 17

![](/assets/blog/ai-for-prosthetics/2/17.gif)

#### Index 18

![](/assets/blog/ai-for-prosthetics/2/18.gif)

### Hip Thrust

Let's test our intuition by trying to create a "hip-thrust" action. The indices 2, 4, 10, 12 look promising, so let's try fully activating these muscles, leaving all other muscles unactivated.

![](/assets/blog/ai-for-prosthetics/2/hip-thrust.gif)

Awesome! We now have some basic intuition on how each muscle affects the biomechanical model.



## osim-rl-helper

### KerasDDPGAgent

A brand new agent called `KerasDDPGAgent` was added to the [`osim-rl-helper` repository](https://github.com/seungjaeryanlee/osim-rl-helper). This agent uses [Deep Deterministic Policy Gradient (DDPG)](https://arxiv.org/abs/1509.02971) method by Lillicrap et al. (2015). You need to install `keras` and `keras-rl` packages to run this agent.

```bash
conda install keras
pip install keras-rl
```

The syntax for testing and submitting `KerasDDPGAgent` is identical to previous agents, using `run.py`. 

```
./run.py KerasDDPGAgent
./run.py KerasDDPGAgent --submit
```

To run or submit, you need a pretrained model saved in `KerasDDPGAgent_actor.h5f` and `KerasDDPGAgent_critic.h5f`. These files are generated and updated when you train the `KerasDDPGAgent`. 

To train `KerasDDPGAgent`, you need to specify the number of steps to train the agent with the `-t/--train` flag. For example, the command below trains the agent for 1000 time steps.

```bash
./run.py KerasDDPGAgent --train 1000
```

The `KerasDDPGAgent` inherits the `KerasAgent` template, which defines `train()`, `test()`, `submit()` functions.

You can check the source code of `KerasDDPGAgent` in `/helper/baselines/keras/KerasDDPGAgent.py`. You can check the source code of `KerasAgent` in `/helper/templates/` directory.

### Client Wrappers

The `keras-rl` package requires an `env` parameter. However, during submission, the agent needs to interact with the client. Thus, I created a wrapper that transforms the client into the format of a local environment. The `ClientToEnv` wrapper simply wraps a `client` instance into an `env`.

```python
class ClientToEnv:
    def __init__(self, client):
        """
        Reformats client environment to a local environment format.
        """
        self.reset = client.env_reset
        self.step  = client.env_step
```

The client returns observations in dictionary format, so the `DictToList` wrapper transforms the dict-type observation to list-type using the code from `ProstheticsEnv.get_observation()`.

```python
class DictToList:
    def __init__(self, env):
        """
        Formats Dictionary-type observation to List-type observation.
        """
        self.env = env

    def reset(self):
        state_desc = self.env.reset()
        return self._get_observation(state_desc)

    def step(self, action):
        state_desc, reward, done, info = self.env.step(action)
        return [self._get_observation(state_desc), reward, done, info]

    # _get_observation() omitted
```

Finally, because the client does not accept NumPy types (since they cannot be converted to JSON), I created a `JSONable` wrapper that converts NumPy ndarrays to lists.

```python
class JSONable:
	def __init__(self, env):
        """
        Converts NumPy ndarray type actions to list.
        """
        self.env = env
        self.reset = self.env.reset

    def step(self, action):
        if type(action) == np.ndarray:
            return self.env.step(action.tolist())
        else:
            return self.env.step(action)
```

You can check the source code of the wrappers in `/helper/wrappers/` directory.



## What's Next?

[Łukasz Kidziński (@kidzik)](https://github.com/kidzik), the osim-rl project initiator and lead, kindly created [a page](http://osim-rl.stanford.edu/docs/nips2018/observation/) explaining the meaning behind each number in the observation dictionary. I plan to analyze the observation space and monitor the observations to see how they change throughout an episode.

With the current environment, it is very easy for the agent to get stuck in a local optima. The reward is determined by the location of the pelvis, and the easiest way to move the pelvis forward is by thrusting the hip. However, as shown above, such "hip-thrust" action makes the agent lose balance. A good way to combat this problem is to customize the rewards. Adam Stelmasczczyk, a participant of the Learning to Run competition, wrote a [great article](https://medium.com/mlreview/our-nips-2017-learning-to-run-approach-b80a295d3bb5) about their team's "reward hacking" attempts. I will try to imitate their approach.



