---
layout: post
title: "AI for Prosthetics Week 9 - 10: Unorthodox Approaches"
author: Seungjae Ryan Lee
permalink: /blog/ai-for-prosthetics-9/
redirect_from:
 - /blog/ai-for-prosthetics-10/
tags:
 - reinforcement-learning
 - ai-for-prosthetics
 - competition

front_image: /assets/blog/ai-for-prosthetics-6/front.png
front_text: >
    We end the series by exploring possible unorthodox approaches for the
    competition. These are approaches that deviate from the popular policy
    gradient methods such as DDPG or PPO.

nav:
- name: Leaderboard
  permalink: '#leaderboard'
- name: Unorthodox Approaches
  permalink: '#unorthodox-approaches'
- name: What's Next?
  permalink: '#whats-next'
---

## Weeks

- [Week 1: Understanding the Challenge](/blog/ai-for-prosthetics-1)
- [Week 2: Understanding the Action Space](/blog/ai-for-prosthetics-2)
- [Week 3 - 4: Understanding the Observation Space](/blog/ai-for-prosthetics-3)
- [Week 5: Understanding the Reward](/blog/ai-for-prosthetics-5)
- [Week 6 - 8: General Techniques of RL](/blog/ai-for-prosthetics-6)
- **Week 9 - 10: Unorthodox Approaches**


## Latest News

There are quite a few important news:

 1. **`osim-rl` has been updated to version 2.1. You should update the package if you have installed `osim-rl` before August 27th.**
 2. Round 1 has been extended for one month, pushing Round 2 back for one month.
 3. Round 2 details has been revealed.
 4. The Google Cloud Platform credits has been given.

Here is the `pip` command to update `osim-rl`:

```
pip install git+https://github.com/stanfordnmbl/osim-rl.git -U
```

For full details, check [Issue #164](https://github.com/stanfordnmbl/osim-rl/issues/164).


## Leaderboard

Here are the top 10 scores for this week. Two new people (scitator, hagrid67) appeared in the top 10, and all but one agent were submitted in August. Interestingly, not a single one of them has been submitted after version 2.1 of `osim-rl` package has been released.


| Participant        | Cumulative Reward | Last Submission (UTC)  |
| ------------------ | ----------------- | ---------------------- |
| jbr                | 2412.005          | Tue, 14 Aug 2018 12:49 |
| **scitator**       | 2398.142          | Mon, 20 Aug 2018 05:31 |
| rl_agent           | 2381.341          | Sun, 2 Sep 2018 08:16  |
| qyz55              | 2377.106          | Tue, 4 Sep 2018 03:14  |
| jack@NAN           | 2375.632	         | Mon, 13 Aug 2018 05:04 |
| Firework           | 2374.061          | Fri, 3 Aug 2018 04:49  |
| lijun              | 2356.148	         | Mon, 6 Aug 2018 10:16  |
| nskiran            | 2341.482	         | Tue, 31 Jul 2018 14:03 |
| **hagrid67**       | 2332.492	         | Fri, 17 Aug 2018 10:13 |
| Yongjin            | 2318.866	         | Mon, 27 Aug 2018 00:50 |

<br/>

![]({{ "/assets/blog/ai-for-prosthetics-9/leaderboard.png" | absolute_url }})

## Unorthodox Approaches

These are few *untested* ideas for the AI for Prosthetics competition. Feel free to send me an email to `seungjaeryanlee at gmail dot com` if you want to discuss more about them!

### Deep Q-Networks

Deep Q-Networks (DQNs) are not for continuous control problems, since DQNs are not designed to handle continuous action spaces. Thus, we need to discretize the action space. The simplest discretization would be to restrict each muscle to have zero (0) or full (1) force. However, since the action space is $[0, 1]^{19}$, the discretized space would be $\\{0, 1\\}^{19}$, which has 524288 actions. This means that for each state $s$, we need to use a neural network with 524288 output nodes. This is highly impractical, so different measures must be taken to reduce the action space.

If we have prior knowledge on the bioskeletal model, we can solve this by restricting actions that mimic human behavior. However, most people do not have such expertise, and trying different sets of actions are time-consuming. 

### Partitioning the Action Space

One interesting idea would be to partition the action space. There are 19 action spaces. If we make a bold assumption that muscles can be partitioned to be independent of one another, we can partition them to some groups. Suppose we partition them to groups of $(4, 4, 4, 4, 3)$. Then, we can deploy 5 DQNs for each partitioned action space. These DQNs will have reasonable number of output nodes (8 or 16).

Training 5 DQNs sounds like a daunting task. How can one afford five times the computation and memory? Fortunately, the experience memory can be shared. The computational cost can be drastically reduced by sharing network weights. Presumably, this will have little detrimental effect since the same observation is used in all 5 DQNs.

However, partitioning does introduce problems. Each DQN does not know about the actions taken by other DQNs. This makes the environment even more stochastic and induces training noise. Thus, we redefine the state to include actions from other DQNs.

### Autoregressive Actions

To incorporate other parts of the action into the input of a DQN, we need to know the action chosen by other DQNs at that step. In other words, the input of every DQN relies on the output of other DQNs. To solve this stalemate, we cascade the action updates and make the actions *autoregressive*.

Let $A_t = [a_1, a_2, \ldots, a_{19}]$ be the action taken by the agent at timestep $t$. At timestep $5k+1$, we update $\\{a_1, a_2, a_3, a_4\\}$ and copy the values $\\{a_5, \ldots a_{19}\\}$ from $A_{5k}$. Similarly, at timestep $5k+2$, we update $\\{a_5, a_6, a_7, a_8\\}$ and copy other values from $A_{5k+1}$.

Note that this relies on the assumption that no split-second decision is needed in this environment. If the environment is rapidly changing at every step, this approach could miss a crucial action. Fortunately, this environment has been shown to be stable enough for frame skipping, and this approach can be considered as frame skipping with $k=5$. (In fact, it also reduces the computational cost like frame skipping!)


## What's Next?

Unfortunately, This will be the final post on the AI for Prosthetics
competition. I am finalizing an abstract to submit to AAAI 2019, and afterwards
I will be transitioning to [Pommerman](/blog/pommerman-1).

Although I was unable to garner much results, the competition was an extremely
exciting one: I learned a lot about policy gradient methods and distributed
systems. Best of luck to everyone working hard!

Thank you for following with the series!
