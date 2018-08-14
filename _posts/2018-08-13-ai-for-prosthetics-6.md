---
layout: post
title: "AI for Prosthetics Week 6: General Techniques of RL"
author: Seungjae Ryan Lee
permalink: /blog/ai-for-prosthetics-6/
redirect_from:
 - /blog/ai-for-prosthetics-7/
 - /blog/ai-for-prosthetics-8/

front_image: /assets/blog/ai-for-prosthetics-6/front.png
front_text: >
    This week, we take a step back from the competition and study common
    techniques used in Reinforcement Learning.

nav:
- name: Leaderboard
  permalink: '#leaderboard'
- name: General Techniques
  permalink: '#general-techniques'
- name: What's Next?
  permalink: '#whats-next'
---

## Weeks

- [Week 1: Understanding the Challenge](/blog/ai-for-prosthetics-1)
- [Week 2: Understanding the Action Space](/blog/ai-for-prosthetics-2)
- [Week 3 - 4: Understanding the Observation Space](/blog/ai-for-prosthetics-3)
- [Week 5: Understanding the Reward](/blog/ai-for-prosthetics-5)
- **Week 6 - 8: General Techniques of RL**



## Latest News

Łukasz Kidziński, the project lead of `osim-rl`, had a webinar on *Robust control strategies for musculoskeletal models using deep reinforcement learning* on August 7th. For those who missed the webinar, here is the video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/M2D5xSSxshE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



## Leaderboard

Here are the top 10 scores for this week. Three new people (jbr, qyz55, jssk) appeared in the top 10, and all but one agent were submitted in August. 



| Participant        | Cumulative Reward | Last Submission (UTC)  |
| ------------------ | ----------------- | ---------------------- |
| **jbr**            | 2387.517          | Tue, 7 Aug 2018 21:44  |
| Firework           | 2374.061          | Fri, 3 Aug 2018 04:49  |
| lijun              | 2356.148          | Mon, 6 Aug 2018 10:16  |
| **qyz55**          | 2344.622          | Sun, 12 Aug 2018 07:32 |
| nskiran            | 2341.482          | Tue, 31 Jul 2018 14:03 |
| jack@NAN           | 2338.136          | Fri, 10 Aug 2018 05:15 |
| rl_agent           | 2330.393          | Tue, 7 Aug 2018 17:54  |
| ymmoy999           | 2238.523          | Mon, 6 Aug 2018 14:02  |
| Yongjin            | 2148.157          | Thu, 9 Aug 2018 22:54  |
| **jssk**           | 1918.556          | Fri, 10 Aug 2018 06:06 |

<br/>

There are 36 new participants in the competition! Most of them have successfully gotten above 0, qualifying themselves for the Google Cloud Platform credits.

![]({{ "/assets/blog/ai-for-prosthetics-6/leaderboard.png" | absolute_url }})



## General Techniques

This week, we take a step back from the competition and study common techniques used in Reinforcement Learning.



### Frame Skipping

**Frame skipping** is a technique of repeating selected actions for $k$ steps. First introduced in Section 5 of [*Playing Atari with Deep Reinforcement Learning*](https://arxiv.org/abs/1312.5602) for Deep Q-Networks on [Atari environments](/envs/gym/atari), this technique can significantly decrease the amount of time each episode takes.



### Discretized Actions

The `ProstheticsEnv` environment has continuous actions, and the Policy Gradient algorithms support continuous actions. However, **discretization of actions** has worked surprisingly well in many Policy Gradient algorithms. The most extreme discretization would be to excite the machine fully (1) or not at all (0). A more general discretization could use more intermediate values.

Recently, OpenAI published [*Learning Dexterous In-Hand Manipulation*](https://arxiv.org/abs/1808.00177) that used Proximal Policy Optimization (PPO), showcasing a successfully trained robot hand able to manipulate a square block. In Section 4.2, they mention that

> While PPO can handle both continuous and discrete action spaces, we noticed that discrete action spaces work much better. This may be because a discrete probability distribution is more expressive than a multivariate Gaussian or because discretization of actions makes learning a good advantage function potentially simpler. We discretize each action coordinate into 11 bins.



### Distributed Learning

If one has the resources, the most significant increase would be through **distributed learning**. If one has the CPUs and GPUs (or emulate them), parallelizing computations results in dramatic speedup for collecting experience.

Most state-of-the-art results use parallelization extensively. DeepMind's [*Distributed Prioritized Experience Replay*](https://arxiv.org/abs/1803.00933) showcases Ape-X DQN that achieves state-of-the-art results for most Atari 2600 games by using 376 cores and 1 GPU, collecting experience 200 times faster than [*Rainbow*](https://arxiv.org/abs/1710.02298).

![apex]({{ "/assets/blog/ai-for-prosthetics-6/apex.png" | absolute_url }})

[OpenAI Five](https://blog.openai.com/openai-five/), an AI that won against professional gamers of Dota 2, a two-sided game with 5 players on each side, also utilized 128000 CPU cores and 256 P100 GPUs, collecting 900 years of experience per day.

![rapid]({{ "/assets/blog/ai-for-prosthetics-6/rapid.png" | absolute_url }})

To try out distributed learning, I recommend [Ray's RLLib](https://ray.readthedocs.io/en/latest/rllib.html), [Reinforce.io's Tensorforce](https://github.com/reinforceio/tensorforce), and [OpenAI's Baselines](https://github.com/openai/baselines).



**For some more ideas, take a look at [top solutions of NIPS 2017 Learning to Run challenge](http://osim-rl.stanford.edu/docs/nips2017/solutions/)!**



## What's Next?

Although Policy Gradient methods such as DDPG and PPO are more natural choices for this challenge, I want to try using Deep Q-Networks! I have not yet decided which implementation to use, but it will be either unixpickle's [anyrl-py](https://github.com/unixpickle/anyrl-py) or Kaixhin's [Rainbow](https://github.com/Kaixhin/Rainbow).

 Also, I have never used Google Cloud Platform (GCP) before, but now I have both the supply ($250 credit) and the demand (more computational power needed for training agents) for it, so it sure is a good time to start!

