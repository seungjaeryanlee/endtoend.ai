---
layout: post
title: "A Deeper Look at Experience Replay"
author: Seungjae Ryan Lee
permalink: /ctrl/a-deeper-look-at-experience-replay/

front_image: /assets/blog/ctrl/a-deeper-look-at-experience-replay/front.png
front_text: >
    This is a review of the paper <i>A Deeper Look at Experience Replay</i> by Shangtong Zhang and Richard Sutton. The paper shows that a huge replay buffer can hurt performance and introduces an O(1) method to mitigate the performance drop.
---

*This is part of the [**Current Topics in Reinforcement Learning (CTRL)**](/ctrl) series that reviews recent papers in Reinforcement Learning.*

**Title**: A Deeper Look at Experience Replay
<br/>
**Authors**: Shangtong Zhang and Richard Sutton
<br/>
**Publish Date**: December 2017

In Reinforcement Learning, the agent learns to maximize the cumulative reward through interactions with the environment. The most direct way to learn from these interactions is by learning *online*, at every timestep with the latest interaction with the environment. The agent uses transitions $(s, a, r, s')$ to update its value function or policy.

![Online Learning]({{ "/assets/blog/ctrl/a-deeper-look-at-experience-replay/online.png" | absolute_url }})

Although this is a powerful learning method, it suffers from two problems:

1. Each experience is used only once.
2. There is a high correlation between experience since consecutive experience belong to the same example, which violates the assumption 

To mitigate these problems, many algorithms use **Experience Replay**, a method of storing experience into a *replay buffer*. With this method, instead of learning from the latest transition, the agent learns from a minibatch $B$ sampled from the replay buffer.

![Experience Replay]({{ "/assets/blog/ctrl/a-deeper-look-at-experience-replay/experience_replay.png" | absolute_url }})

Experience Replay dramatically increases the data efficiency. Furthermore, it is the only method that can generate uncorrelated data for online training without changing the problem setting. Thus, it has been used in many seminal algorithms such as Deep Deterministic Policy Gradient (DDPG), Hindsight Experience Replay (HER) and all Deep Q-Networks (DQN) methods.

Although experience replay has been integrated to widely different algorithms with different neural network architectures that interact with different environments, most experiments were done using the default value of $10^6$. This is not a problem if experience replay is robust under such differences, but in fact, the size of the replay buffer can heavily hurt the training process. When the replay buffer is too small, the replay buffer serves little to no purpose. If the replay buffer is too big, the batched samples are uncorrelated, but the agent will learn from the newest experience a long time after.

Thus, to mitigate this problem, we combine online learning and experience replay into **Combined Experience Replay**. At each timestep, the agent learns from a batch that consists of both the immediate transition $t$ and the sampled minibatch $B$.

![Combined Experience Replay]({{ "/assets/blog/ctrl/a-deeper-look-at-experience-replay/combined_experience_replay.png" | absolute_url }})

To test the effects of Combined Experience Replay, we combine it with Q-Learning (denoted Combined-Q) and test it against Online Q-Learning method (denoted Online-Q) and Q-Learning with Experience Replay (denoted Buffer-Q). We test it on three popular environments: Gridworld, Lunar Lander, and Atari Pong.

Combined-Q significantly improved the performance for suboptimal replay buffer sizes in these environments:
 * Gridworld with tabular function representation
 * Gridworld with linear function approximator
 * Gridworld with non-linear function approximator

![Gridworld with tabular function approximator]({{ "/assets/blog/ctrl/a-deeper-look-at-experience-replay/gridworld_tabular.png" | absolute_url }})

![Gridworld with linear function approximator]({{ "/assets/blog/ctrl/a-deeper-look-at-experience-replay/gridworld_linear.png" | absolute_url }})

![Gridworld with non-linear function approximator]({{ "/assets/blog/ctrl/a-deeper-look-at-experience-replay/gridworld_nonlinear.png" | absolute_url }})

However, it had little to no impact in these environments:
 * Lunar Lander with non-linear function approximator
 * Pong with non-linear function approximator

![Lunar Lander with non-linear function approximator]({{ "/assets/blog/ctrl/a-deeper-look-at-experience-replay/lunarlander_nonlinear.png" | absolute_url }})

![Pong with non-linear function approximator]({{ "/assets/blog/ctrl/a-deeper-look-at-experience-replay/pong_nonlinear.png" | absolute_url }})

As the varied degree of success show, "CER is only a workaround, the idea of experience replay itself is heavily flawed."
