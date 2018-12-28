---
layout: tag
title: AI for Prosthetics
tag: ai-for-prosthetics
permalink: /tags/ai-for-prosthetics/
redirect_from: /ai-for-prosthetics/
details: true
---

This is a guide for the [**NIPS 2018 AI for Prosthetics challenge**](https://www.crowdai.org/challenges/nips-2018-ai-for-prosthetics-challenge) with a helper package and a series of blog posts.

## Competition

The **AI for Prosthetics** challenge is one of NIPS 2018 Competition tracks. In this challenge, the participants seek to build an agent that can make a 3D human model with prosthetics run.

<div class="w50" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/_pages/ai-for-prosthetics/prosthetics.jpeg" alt="Prosthetics">
</div>

## osim-rl-helper

This package contains basic learning agents using popular reinforcement learning libraries such as `keras-rl` and `tensorforce`. It provides a good starting point for those unfamiliar with practical reinforcement learning. Currently, the package contains Deep Determinsitic Policy Gradient (DDPG) agent and Proximal Policy Optimization (PPO) agent. Other popular methods and libraries such as Deep Q-Networks (DQN) and `rllib` should be added soon.

## Blog Posts

I wrote posts about the competition, the status of the leaderboard, the properties of the environment, applicable techniques, and updates of the `osim-rl-helper` package. I have discussed general approaches to the problem, possible methods of reward shaping, and other techniques from recent literature that could be worth experimenting.
