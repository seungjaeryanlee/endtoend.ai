---
layout: page
title: Slides
permalink: /slides

display_front: true
front_image: /assets/home/slides.png
front_text: >
    This is a collection of presentation slides summarizing contents of books
    and state-of-the-art results.
---

This is a collection of presentation slides on Artificial Intelligence books and State-of-the-Art papers.



## Books

### Reinforcement Learning: an Introduction by Sutton and Barto

* Chapter 1: Introduction [[Google Slides]](https://docs.google.com/presentation/d/e/2PACX-1vRfSkKPoU3I9mnJKeCEiO8u7EQNMN_I3XN-g71kl8aIB47zlVzOg5DJKy2kTEEzVZGVYhkUuuArTqo7/pub?start=false&loop=false&delayms=3000) [[PDF]](/slides/book/sutton-barto/01.pdf)
* Chapter 2: Multi-armed Bandits [[Google Slides]](https://docs.google.com/presentation/d/e/2PACX-1vQkK_UjtJZ1NmLqAsHoaf41tmwPHma2tlVKh9mbdMWj-31Huo9M_yaL1-x7C-JaC7GOpRfdKYnZ6lw2/pub?start=false&loop=false&delayms=3000) [[PDF]](/slides/book/sutton-barto/02.pdf)
* Chapter 3: Finite Markov Decision Processes [[Google Slides]](https://docs.google.com/presentation/d/e/2PACX-1vTU4-wObYIs5m2ByIAmbZzm8zQUMmTLvs6SnENVZnVaMzdRDK9JyvNhxbtUeuuTkynR9z-EbyAFCjz-/pub?start=false&loop=false&delayms=3000) [[PDF]](/slides/book/sutton-barto/03.pdf)
* Chapter 4: Dynamic Programming [[Google Slides]](https://docs.google.com/presentation/d/e/2PACX-1vTOz_Y0e2IyZOaAVLcPQceHjEsbNM9uHZOhNbPF_A59ZJvJo4cDACsEq-N0T5hxXmcbeiRGn5vBRTTE/pub?start=false&loop=false&delayms=3000) [[PDF]](/slides/book/sutton-barto/04.pdf)
* Chapter 5: Monte Carlo Methods [[Google Slides]](https://docs.google.com/presentation/d/e/2PACX-1vRVgphkmxpq8_qeL4l2zLzXH2Qd7hOyE81J71kmN_cZcaJlVvcDuTW06OYE7F8XgAMezaeaCajZo8yF/pub?start=false&loop=false&delayms=3000) [[PDF]](/slides/book/sutton-barto/05.pdf)
* Chapter 6: Temporal-Difference Learning [[Google Slides]](https://docs.google.com/presentation/d/e/2PACX-1vQp2AURd5LKiycin2eo9HAeAawKVae4fKFOK4Wfe2unyT4FrWsf1RfWoIhuaXr5pMaOGCqq1vbN3C84/pub?start=false&loop=false&delayms=3000) [[PDF]](/slides/book/sutton-barto/06.pdf)
* Chapter 7: n-step Bootstrapping [[Google Slides]](https://docs.google.com/presentation/d/e/2PACX-1vQ8HAXwotEudyliko6t1nE98ETXial0EBlBgewZOHfz7hRiPy0SBohJKxUWNSVDPSg2_JdI6g9Ewj9p/pub?start=false&loop=false&delayms=3000) [[PDF]](/slides/book/sutton-barto/07.pdf)
* Chapter 10: On-policy Control with Approximation [[Google Slides]](https://docs.google.com/presentation/d/e/2PACX-1vSirD3HPgl2nSDrvw0XK5ft5QeH0nXQ9F4OyNbnkixVtLPnVKbCnA2mAv6GiZ2bY2ZXrJF1NsyRByh8/pub?start=false&loop=false&delayms=3000) [[PDF]](/slides/book/sutton-barto/10.pdf)



## Papers

### Learning Dexterous In-Hand Manipulation

<p style="margin-top: -24px;">August 2018</p>

[[PDF]](/slides/paper/learning_dextrous_in_hand_manipulation.pdf)

We use reinforcement learning (RL) to learn dexterous in-hand manipulation policies which can perform vision-based object reorientation on a physical Shadow Dexterous Hand. The training is performed in a simulated environment in which we randomize many of the physical properties of the system like friction coefficients and an object’s appearance. Our policies transfer to the physical robot despite being trained entirely in simulation. Our method does not rely on any human demonstrations, but many behaviors found in human manipulation emerge naturally, including finger gaiting, multi-finger coordination, and the controlled use of gravity. Our results were obtained using the same distributed RL system that was used to train OpenAI Five. We also include a video of our results: https://youtu.be/jwSbzNHGflM.



### Learning Montezuma's Revenge from a Single Demonstration

<p style="margin-top: -24px;">July 2018</p>

[[Google Slides]](https://docs.google.com/presentation/d/e/2PACX-1vQlUjzQ282n6810yAEYoeJCG0E0MLrNEKQl-Hkkw6o02NELV2uAFGuTS2FFu3gO0XkWO0K9B6UktiHv/pub?start=false&loop=false&delayms=3000) [[PDF]](/slides/paper/learning_montezumas_revenge_from_a_single_demonstration.pdf)

We've trained an agent to achieve a high score of 74,500 on Montezuma's Revenge from a single human demonstration, better than any previously published result. Our algorithm is simple: the agent plays a sequence of games starting from carefully chosen states from the demonstration, and learns from them by optimizing the game score using PPO, the same reinforcement learning algorithm that underpins OpenAI Five.



### A Deeper Look at Experience Replay

<p style="margin-top: -24px;">December 2017</p>

[[PDF]](/slides/paper/a_deeper_look_at_experience_replay.pdf)

Recently experience replay is widely used in various deep reinforcement learning (RL) algorithms, in this paper we rethink the utility of experience replay. It introduces a new hyper-parameter, the memory buffer size, which needs carefully tuning. However unfortunately the importance of this new hyper-parameter has been underestimated in the community for a long time. In this paper we did a systematic empirical study of experience replay under various function representations. We showcase that a large replay buffer can significantly hurt the performance. Moreover, we propose a simple O(1) method to remedy the negative influence of a large replay buffer. We showcase its utility in both simple grid world and challenging domains like Atari games.

