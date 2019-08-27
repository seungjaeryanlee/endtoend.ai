---
layout: tag
title: Google Summer of Code
tag: gsoc
permalink: /blog/tags/gsoc/
redirect_from:
 - /gsoc/
 - /tags/gsoc/
details: true
---

[Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school.

In 2019, I was accepted by TensorFlow to work on  [**Adding Curiosity to TF-Agents**](https://summerofcode.withgoogle.com/projects/#4814181524570112), their reinforcement learning library. In the initial proposal, I wished to implement DQN+CTS (pseudocount-based exploration), ICM (intrinsic curiosity module), and RND (random network distillation). Unfortunately, during the duration of the summer, I was only able to implement RND. The algorithm will be merged into master soon, but to see an isolated version of code, please check [**this link**](https://github.com/seungjaeryanlee/agents/tree/gsoc-work-product). The blog posts below describe in more detail how the summer had progressed.

<!-- For this great summer, I must thank my mentors [Oscar Ramirez](https://ai.google/research/people/OscarRamirez) and [Mandar Sanjay Deshpande](https://mandroid6.github.io/). As a central developer of TF-Agents, Oscar resolved many of the issues I had faced and offered guidance throughout the summer. As a former GSoC participant, Mandar gave valuable insights about having a successful summer project. I also thank [Paige Bailey](https://dynamicwebpaige.github.io/info/), our great GSoC TensorFlow organizer. I first learned about the program through Paige's tweet, and she also provided computing resources via GCP. -->
