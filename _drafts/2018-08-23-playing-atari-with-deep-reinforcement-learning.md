---
layout: post
title: "Playing Atari with Deep Reinforcement Learning"
author: Seungjae Ryan Lee
permalink: /slowpapers/playing-atari-with-deep-reinforcement-learning/
published: false
tags:
 - reinforcement-learning
 - slowpapers

image: /assets/blog/slowpapers/playing-atari-with-deep-reinforcement-learning/front.png
front_image_type: contain
excerpt: >
    This is a review of the paper <i>Playing Atari with Deep Reinforcement Learning</i> by Mnih et al. The paper introduces Deep Q-Network (DQN), the algorithm that successfully incorporated deep learning to reinforcement learning. DQN has been a crucial learning algorithm for discrete action spaces.
---

*This is a part of the [**Slow Papers**](/slowpapers) series that peruses each selected paper slowly to gain a deeper understanding of the paper.*

**Title**: Playing Atari with Deep Reinforcement Learning
<br/>
**Authors**: Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Alex Graves, Ioannis Antonoglou, Daan Wierstra, Martin Riedmiller
<br/>
**Publish Date**: December 2013

Reinforcement Learning has struggled in high-dimensional sensory inputs such as vision or sound. Meanwhile, in Deep Learning, people have successfully extracted features from such high-dimensional input, making a deep learning perspective of reinforcement learning tempting. However, reinforcement learning does not have large labelled dataset with i.i.d. data from a fixed distribution, violating most assumptions of deep reinforcement learning. To alleviate this issue, we use an *experience replay* mechanism that samples previous transitions from a buffer. This allows a CNN agent to achieve state-of-the-art results in 6 out of 7 selected *Atari 2600* games.

Each frame of Atari 2600 are $210 \times 160$ pixel images with a 128 color palette. The image is grayscaled, downsampled and cropped into a $84 \times 84$ grayscale image. Because the current frame does not provide information about the velocity of objects, a state consists of four such frames: $84 \times 84 \times 4$.

The network is designed so that given a state, the network outputs the action values of all possible actions. After the agent executes the action, instead of learning from the immediate transition $(s, a, r, s')$, the agent stores the transition to a *replay buffer* and learns from a minibatch of transitions sampled from that buffer. This allows for greater data efficiency and uncorrelated samples.
