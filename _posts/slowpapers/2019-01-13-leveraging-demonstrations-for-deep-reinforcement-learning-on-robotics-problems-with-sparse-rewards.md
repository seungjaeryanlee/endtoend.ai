---
layout: post
title: "Slow Papers: Leveraging Demonstrations for Deep Reinforcement Learning on Robotics Problems with Sparse Rewards (Vecerik et al., 2017)"
author: Seungjae Ryan Lee
permalink: /slowpapers/leveraging-demonstrations-for-deep-reinforcement-learning-on-robotics-problems-with-sparse-rewards/
tags:
 - reinforcement-learning
 - slowpapers
published: false

front_image: /papers/covers/leveraging-demonstrations-for-deep-reinforcement-learning-on-robotics-problems-with-sparse-rewards.png
meta_image: /papers/covers/leveraging-demonstrations-for-deep-reinforcement-learning-on-robotics-problems-with-sparse-rewards.png
front_image_type: contain
front_text: >
    We propose a general and model-free approach for Reinforcement Learning (RL) on real robotics with sparse rewards. We build upon the Deep Deterministic Policy Gradient (DDPG)algorithm to use demonstrations. Both demonstrations and actual interactions are used to fill a replay buffer and the sampling ratio between demonstrations and transitions is automatically tuned via a prioritized replay mechanism. Typically, carefully engineered shaping rewards are required to enable the agents to efficiently explore on high dimensional control problems such as robotics. They are also required for model-based acceleration methods relying on local solvers such as iLQG (e.g. Guided Policy Search and Normalized Advantage Function). The demonstrations replace the need for carefully engineered rewards, and reduce the exploration problem encountered by classical RL approaches in these domains. Demonstrations are collected by a robot kinesthetically force-controlled by a human demonstrator. Results on four simulated insertion tasks show that DDPG from demonstrations out-performs DDPG, and does not require engineered rewards. Finally, we demonstrate the method on a real robotics task consisting of inserting a clip (flexible object) into a rigid object.
excerpt: >
    We propose a general and model-free approach for Reinforcement Learning (RL) on real robotics with sparse rewards. We build upon the Deep Deterministic Policy Gradient (DDPG)algorithm to use demonstrations. Both demonstrations and actual interactions are used to fill a replay buffer and the sampling ratio between demonstrations and transitions is automatically tuned via a prioritized replay mechanism. Typically, carefully engineered shaping rewards are required to enable the agents to efficiently explore on high dimensional control problems such as robotics. They are also required for model-based acceleration methods relying on local solvers such as iLQG (e.g. Guided Policy Search and Normalized Advantage Function). The demonstrations replace the need for carefully engineered rewards, and reduce the exploration problem encountered by classical RL approaches in these domains. Demonstrations are collected by a robot kinesthetically force-controlled by a human demonstrator. Results on four simulated insertion tasks show that DDPG from demonstrations out-performs DDPG, and does not require engineered rewards. Finally, we demonstrate the method on a real robotics task consisting of inserting a clip (flexible object) into a rigid object.

nav:
- name: 1 Introduction
  permalink: '#1-introduction'
- name: 2 Background
  permalink: '#2-background'
- name: 3 DDPG from Demonstrations
  permalink: '#3-ddpg-from-demonstrations'
- name: 4 Experimental setup
  permalink: '#4-experimental-setup'
- name: 5 Results
  permalink: '#5-results'
- name: 6 Related work
  permalink: '#6-related-work'
- name: 7 Conclusion
  permalink: '#7-conclusion'
---

**Title**: Leveraging Demonstrations for Deep Reinforcement Learning on Robotics Problems with Sparse Rewards

**Authors**

<div>
<ul class="slowpaper__authors">
  <li>Mel Vecerik</li>
  <li>Todd Hester</li>
  <li>Jonathan Scholz</li>
  <li>Fumin Wang</li>
  <li>Olivier Pietquin</li>
  <li>Bilal Piot</li>
  <li>Nicolas Heess</li>
  <li>Thomas Rothörl</li>
  <li>Thomas Lampe</li>
  <li>Martin Riedmiller</li>
</ul>
</div>

**Prerequisites**

- [Deterministic Policy Gradient Algorithms (paper)](http://proceedings.mlr.press/v32/silver14.pdf): Introduces DPG.
- [Continuous control with deep reinforcement learning (arXiv paper)](https://arxiv.org/abs/1509.02971): Introduces DDPG.

**Accompanying Resources**

- [Deep Q-learning from Demonstrations (arXiv paper)](https://arxiv.org/abs/1704.03732): Introduces DQfD, which employs identical techniques to DQN.


<div style="
    background-color: lightgray;
    padding: 1em 0.5em;
    border: 1px solid gray;
    border-radius: 0.5em;
    margin: 2em 0;
"><p style="margin: 0;">
This review was first presented to Korea Artificial Intelligence &amp; Robotics Lab (KAIR Lab). Thank you to Cheolhui Min, Curt Park, Whi Kwon, and Wonseok Jung for their feedback.
</p></div>
## 1 Introduction

Learning a control *policy* is better than any predefined motion, because it can handle variability in state. Unfortunately, although reinforcement learning can theoretically learning such policy, it is often impractical due to the amount of exploration required, especially if the reward function is sparse.

One popular method for addressing this issue is 





## 2 Background



## 3 DDPG from Demonstrations



## 4 Experimental setup

### 4.1 Demonstration data collection



## 5 Results



## 6 Related work



## 7 Conclusion



## Final Thoughts

**Questions**

- 

**Recommended Next Papers**

- 
