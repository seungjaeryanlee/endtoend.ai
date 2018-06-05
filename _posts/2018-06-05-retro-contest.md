---
layout: post
title: "I learned Reinforcement Learning with OpenAI competition"
author: Seung Jae (Ryan) Lee
permalink: /blog/i-learned-reinforcement-learning-with-openai-competition
published: false
---

Recently, OpenAI released Gym Retro, an emulator wrapper that allows developers to use classical games as environments for reinforcement learning. One such game was *Sonic the Hedgehog*. On April, OpenAI held a two-month-long competition the *Retro Contest* where participants had to develop an agent that can achieve perform well on unseen custom-made stages of *Sonic the Hedgehog*. Also, the agents were limited to 100 million steps per stage. Therefore, OpenAI sought to promote transfer learning and few-shot learning.

For beginners, OpenAI provided three baseline agents: JERK, Rainbow, and PPO. Just Enough Retained Knowledge (JERK) is not a reinforcement learning algorithm. Rainbow is the implementation of Rainbow Deep Q Network paper, and Proximal Policy Optimization (PPO) is the implementation of the PPO paper.

I started to challenge around May, midway through the competition. I had very little knowledge of Reinforcement Learning: I skimmed through David Silver's lectures and started reading Sutton and Barto's book. I ran few environments in OpenAI Gym (namely CartPole and Breakout), but I had not developed an agent. What made me join was one short video on the front of the contest, which is shown below:



The setup process was surprisingly easy: within an hour I submitted my first agent, and in the second hour I submitted my rainbow agent.

Then, I started tuning hyperparameters in the Rainbow DQN code. I was familiar with only one hyperparameter: the learning rate $\alpha$. Nevertheless, I started experimenting with different hyperparameters.  This process did not get any meaningful result, but it gave me a good reason to start reading DQN papers.

Oblivious, I started reading the Rainbow DQN paper. Not surprisingly, I was utterly confused about the theory. The only part that I found useful was the Hyperparamter section: it described which hyperparameters were sensitive.

After about a week, I got bored tuning hyperparameters of a black box. Thus, I decided to start reading about DQN. I did know about Q-Learning, so the idea of using a ANN was hardly surprising. 