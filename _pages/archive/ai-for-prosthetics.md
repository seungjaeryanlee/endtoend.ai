---
layout: page
title: AI for Prosthetics
permalink: /ai-for-prosthetics/

display_front: true
front_image: /assets/_pages/ai-for-prosthetics/card.jpg
front_image_type: cover
front_text: >
    This is a guide for the NIPS 2018 AI for Prosthetics challenge with a helper
    package and a series of blog posts.
---



This is a guide for the [**NIPS 2018 AI for Prosthetics challenge**](https://www.crowdai.org/challenges/nips-2018-ai-for-prosthetics-challenge) with a helper package and a series of blog posts.

## Competition

The **AI for Prosthetics** challenge is one of NIPS 2018 Competition tracks. In this challenge, the participants seek to build an agent that can make a 3D human model with prosthetics run.

![Prosthetics]({{ "assets/_pages/ai-for-prosthetics/prosthetics.jpeg" | absolute_url }})

## osim-rl-helper

This package contains basic learning agents using popular reinforcement learning libraries such as `keras-rl` and `tensorforce`. It provides a good starting point for those unfamiliar with practical reinforcement learning. Currently, the package contains Deep Determinsitic Policy Gradient (DDPG) agent and Proximal Policy Optimization (PPO) agent. Other popular methods and libraries such as Deep Q-Networks (DQN) and `rllib` should be added soon.

## Blog Posts

I have also been writing a post almost every week on the competition, about the status of the leaderboard, the properties of the environment, applicable techniques, and updates of the `osim-rl-helper` package. I have discussed general approaches to the problem, possible methods of reward shaping, and other techniques from recent literature that could be worth experiemnting.

- [Week 1: Understanding the Challenge](/blog/ai-for-prosthetics-1)
- [Week 2: Understanding the Action Space](/blog/ai-for-prosthetics-2)
- [Week 3 - 4: Understanding the Observation Space](/blog/ai-for-prosthetics-3)
- [Week 5: Understanding the Reward](/blog/ai-for-prosthetics-5)
- [Week 6 - 8: General Techniques of RL](/blog/ai-for-prosthetics-6)

If you want to know when a new post is published, [join us and subscribe to our RSS feed](/feed.xml)!