---
layout: page
title: "Pioneer: Demystifying Experience Replay"
permalink: /pioneer/

display_front: false
front_image: /assets/home/pioneer.png
front_image_type: cover
front_text: >
    Read about current progress on my Pioneer Project: demystifying experience
    replay.
---

The goal of the project is to understand how experience replay affects the learner. Through this analysis, we will understand why experience replay is so effective, both in data efficiency and data de-correlation. Also, we will uncover the side effects of prioritized experience replay, a commonly used improvement to experience replay, and how positive and negative they are to the overall performance of the learner. Finally, such analysis could hint to an alternative experience replay method that mitigates unwanted side effects.

Because the paper focuses on experience replay, it is important to minimize the effects of other aspects of reinforcement learning. Although the learner will be tested in complex environments that require nonlinear function approximators such as neural networks, the majority of the study will be done on simple environments that do not require deep reinforcement learning.

The final product will be a research paper in the form of Distill (distill.pub), where the reader can interact with various demonstrations to fully understand experience replay.

Because experience replay is a technique used in many state-of-the-art algorithms (Rainbow, DDPG, HER), this analysis could improve these algorithms to achieve new state-of-the-art on various reinforcement learning tasks.
