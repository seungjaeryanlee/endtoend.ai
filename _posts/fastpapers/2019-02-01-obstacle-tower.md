---
layout: post
title: "Fast Papers: The Obstacle Tower: A Generalization Challenge in Vision, Control, and Planning (Juliani et al., 2019)"
author: Seungjae Ryan Lee
permalink: /fastpapers/obstacle-tower/
tags:
 - reinforcement-learning
 - fastpapers

front_image: /annotations/covers/obstacle-tower.png
meta_image: /annotations/covers/obstacle-tower.png
front_image_type: contain
front_text: >
    The rapid pace of research development in Deep Reinforcement Learning has been driven by the presence of fast and challenging simulation environments. These environments often take the form of video games, such as the Atari games provided in the Arcade Learning Environment (ALE). In the past year, however, significant progress has been made in achieving superhuman performance on even the most difficult and heavily studied game in the ALE: Montezumas Revenge. We propose a new benchmark environment, Obstacle Tower: a high visual fidelity, 3D, 3rd person, procedurally generated environment. An agent in the Obstacle Tower must learn to solve both low level control and high-level planning problems in tandem learning from pixels and a sparse reward signal in order to make it as high as possible up the tower. In this paper we outline the environment and provide a set of initial baseline results using current state of the art Deep RL methods as well as human players. In all cases these algorithms fail to produce agents capable of performing anywhere near human level on a set of evaluations designed to test both memorization and generalization ability. As such, we believe that the Obstacle Tower has the potential to serve as a helpful Deep RL benchmark now and into the future.
excerpt: >
    The rapid pace of research development in Deep Reinforcement Learning has been driven by the presence of fast and challenging simulation environments. These environments often take the form of video games, such as the Atari games provided in the Arcade Learning Environment (ALE). In the past year, however, significant progress has been made in achieving superhuman performance on even the most difficult and heavily studied game in the ALE: Montezumas Revenge. We propose a new benchmark environment, Obstacle Tower: a high visual fidelity, 3D, 3rd person, procedurally generated environment. An agent in the Obstacle Tower must learn to solve both low level control and high-level planning problems in tandem learning from pixels and a sparse reward signal in order to make it as high as possible up the tower. In this paper we outline the environment and provide a set of initial baseline results using current state of the art Deep RL methods as well as human players. In all cases these algorithms fail to produce agents capable of performing anywhere near human level on a set of evaluations designed to test both memorization and generalization ability. As such, we believe that the Obstacle Tower has the potential to serve as a helpful Deep RL benchmark now and into the future.

nav:
- name: Why I Read This
  permalink: '#why-i-read-this'
- name: Short Summary
  permalink: '#short-summary'
- name: Thoughts
  permalink: '#thoughts'
- name: Accompanying Resources
  permalink: '#accompanying-resources'
---

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/papers/obstacle-tower.pdf">
Paper
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/annotations/obstacle-tower.pdf">
Annotations
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/slowpapers/obstacle-tower">
Slow Paper Post
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/tags/obstacle-tower">
Obstacle Tower Series
</a>

## Why I Read This

- I saw it on [Twitter](https://twitter.com/awjuliani/status/1089948637914746881).
- I enjoy participating in reinforcement learning competitions.

## Short Summary

- Reinforcement learning (RL) has now reached superhuman level on most environments of Arcade Learning Environment, so we need a new benchmark.
- Obstacle Tower environment is a new environment, with challenges in generalization, vision, planning, and control.
- Agents that use Hierarchical RL, Intrinsic Motivation, Meta-Learning or Model-based methods will probably perform better than pure baseline algorithms such as Rainbow or PPO.
- The [Obstacle Tower Challenge](https://create.unity3d.com/obstacletower) will begin on February 11th.

## Thoughts

- The Obstacle Tower environment can perhaps be better summarized as a 3D stochastic version of Montezuma's Revenge with an easy version of Sokoban.
- The environment is perhaps too difficult: it requires an agent with good exploration and planning, paired with a good convolutional neural network (CNN).

## Accompanying Resources

If you want to learn more about the Arcade Learning Environment (ALE), the predecessor of Obstacle Tower environment, check these links.

- [Arcade Learning Environment (GitHub Repo)](https://github.com/mgbellemare/Arcade-Learning-Environment)
- [The Arcade Learning Environment: An Evaluation Platform for General Agents (arXiv Paper)](https://arxiv.org/abs/1207.4708)
- [Revisiting the Arcade Learning Environment: Evaluation Protocols and Open Problems for General Agents (arXiv Paper)](https://arxiv.org/abs/1709.06009)

If you want to learn more about the environment, check these links.

- [Obstacle Tower Series (endtoendAI Blog Post Series)](/obstacle-tower)
- [Obstacle Tower 1: Installing the Environment (endtoendAI Blog Post)](/obstacle-tower/1)
- [Obstacle Tower 2: Playing the Game (endtoendAI Blog Post)](/obstacle-tower/2)
- [Obstacle Tower 3: Observation Space and Action Space (endtoendAI Blog Post)](/obstacle-tower/3)
