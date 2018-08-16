---
layout: page
title: Practical Reinforcement Learning
permalink: /practical-rl/
redirect_from: /practical-reinforcement-learning/

display_front: true
front_image: /assets/home/practical-rl.png
front_text: >
    <b>(Coming Soon)</b><br/>
    Learn how to create a diverse set of learning agents and connect them to
    various environments such as OpenAI Gym, Unity ML Agents, and chess.

nav:
- name: 1. Introduction
  permalink: '#1-introduction'
- name: 2. Deep Q-Networks
  permalink: '#2-deep-q-networks'
- name: 3. Policy Gradient Methods
  permalink: '#3-policy-gradient-methods'
- name: 4. Heuristic Search Methods
  permalink: '#4-heuristic-search-methods'
- name: 5. Evolutionary Methods
  permalink: '#5-evolutionary-methods'
- name: 6. Imitation Learning
  permalink: '#6-imitation-learning'
- name: 7. Creating a Custom Environment
  permalink: '#7-creating-a-custom-environment'
---

Understanding various Reinforcement Learning algorithms and applying them to diverse environments are very different skills. Sutton and Barto's *Reinforcement Learning: An Introduction* is a great book for the former, but does not address the latter. In **Practical Reinforcement Learning**, we focus on the latter: learning how to use various state-of-the-art methods to various environments.

(Coming Soon)


## Syllabus

### 1. Introduction

In the first chapter, you will learn how to use some basic tools that you will use throughout this book. One is **OpenAI Gym**, "a toolkit for developing and comparing reinforcement learning algorithms." Most reinforcement learning environment adhere to the OpenAI Gym standards. The other is **Google Colaboratory**, Google's free Jupyter Notebook with GPU. This minimizes setup in local machine.

- OpenAI Gym
- Google Colaboratory

### 2. Deep Q-Networks

Deep Q-Networks (DQN) was the first successful attempt to incorporate deep learning into reinforcement learning with superhuman results in many environments. Since its first reveal in 2013, DQNs have been improved in various aspects. [*Rainbow*](https://arxiv.org/abs/1710.02298) gathered these improvements and showed [superhuman results](/envs/gym/atari#state-of-the-art) in most Atari 2600 environments. In this chapter, you will implement the vanilla Deep Q-Network and connect it to *Pong*, one of Atari 2600 environment. You will also learn how to use the `anyrl-py` library to train an agent with Rainbow.

- Q-Learning on **Frozen Lake** environment
- Naive Q-Network on **Cart Pole** environment
- Deep Q-Network (DQN) on **Pong-ram** environment
- Rainbow on **Pong** environment using `anyrl-py`

### 3. Policy Gradient Methods

Unlike Deep Q-Networks (DQN) that learns the state-action-value function $Q$ to find a good policy, Policy Gradient methods try to learn a policy directly using gradient methods to compute the "policy gradient." Policy Gradient methods have garnered much attention due to their performance on continuous control environments ans their ease of parallelization. In this chapter, you will implement REINFORCE, the most basic policy gradient algorithm and use it to train an agent in Unity's *ML Agent* environment. You will also use two popular reinforcement learning libraries `rllib` and `tensorforce` to train agents with [Deep Deterministic Policy Gradient (DDPG) method](https://arxiv.org/abs/1509.02971) and [Proximal Policy Optimization (PPO) method](https://arxiv.org/abs/1707.06347), two popular policy gradient methods.

- Unity ML Agents
- REINFORCE on **Unity Basic** environment
- Deep Deterministic Policy Gradient (DDPG) method on *undecided* environment using `rllib`
- Proximal Policy Optimization (PPO) method on *undecided* environment using  `tensorforce`

### 4. Heuristic Search Methods

In Chapter 2 and 3, we only looked at environments where the agent interacts with an environment that does not directly adversarially to the agent's actions. In this chapter, you will explore various heuristic search methods that have been used to achieve superhuman results in complex games like chess.

- Minimax algorithm on **Connect Four** environment
- AlphaGo Zero algorithm on **Chess** environment

### 5. Evolutionary Methods

In Chapter 5, the focus will be shifted to Evolutionary Strategies (ES), where the agent learns without assuming any dynamics of a Markov Decision Process (MDP). Although Evolutionary Strategies has not been popular in reinforcement learning due to its limited use of the reinforcement learning problem setting, [it has been shown](https://blog.openai.com/evolution-strategies/) to perform surprisingly well in various environments. You will implement an Genetic Algorithm yourself and test it on various environments, both deterministic and stochastic.

- Evolution Strategies (ES) on **Frozen Lake** environment
- Evolution Strategies (ES) on **Super Mario Bros** environment
- Evolution Strategies (ES) on **Unity 3D Ball** environment

### 6. Imitation Learning

Another popular theme in recent reinforcement learning papers have been to *imitate* expert's demonstrations to create an agent that performs at least as good as the demonstration. In difficult environments where the reward is delayed and sparsed, using demonstrations allows reward shaping, resulting in an easier learning environment.
In this chapter, you will learn about recent Imitation Learning algorithms.

- Dataset Aggregation (DAgger)
- Aggregate Values to Imitate (AggreVaTe)
- Deep Q-Learning from Demonstrations (DQfD)

### 7. Creating a Custom Environment

In all previous chapters, the focus was on connecting a learning agent to a predefined environment. Although using predefined environments might be helpful in comparing various learning algorithms, in practice, you will need to create your own environment. In this chapter, you will learn about the basics of creating an environment for various purposes.

- Creating **AI Safety Gridworld** environments with OpenAI Gym
- Optical Character Recognition (OCR) with Reinforcement Learning
- Financial Trading with Reinforcement Learning
