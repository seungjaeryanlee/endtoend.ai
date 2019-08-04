---
layout: post
title: "Slow Papers: The Obstacle Tower: A Generalization Challenge in Vision, Control, and Planning (Juliani et al., 2019)"
author: Seungjae Ryan Lee
permalink: /slowpapers/obstacle-tower/
tags:
 - reinforcement-learning
 - slowpapers

image: /papers/covers/obstacle-tower.png
image_type: contain
excerpt: >
    The rapid pace of research development in Deep Reinforcement Learning has been driven by the presence of fast and challenging simulation environments. These environments often take the form of video games, such as the Atari games provided in the Arcade Learning Environment (ALE). In the past year, however, significant progress has been made in achieving superhuman performance on even the most difficult and heavily studied game in the ALE: Montezumas Revenge. We propose a new benchmark environment, Obstacle Tower: a high visual fidelity, 3D, 3rd person, procedurally generated environment. An agent in the Obstacle Tower must learn to solve both low level control and high-level planning problems in tandem learning from pixels and a sparse reward signal in order to make it as high as possible up the tower. In this paper we outline the environment and provide a set of initial baseline results using current state of the art Deep RL methods as well as human players. In all cases these algorithms fail to produce agents capable of performing anywhere near human level on a set of evaluations designed to test both memorization and generalization ability. As such, we believe that the Obstacle Tower has the potential to serve as a helpful Deep RL benchmark now and into the future.

nav:
- name: Why I Read This
  permalink: '#why-i-read-this'
- name: Background
  permalink: '#background'
- name: Central Idea
  permalink: '#central-idea'
- name: Thoughts
  permalink: '#thoughts'
- name: Accompanying Resources
  permalink: '#accompanying-resources'

related:
- title: "Obstacle Tower 1: Installing the Environment"
  link: /obstacle-tower/1
  image: /assets/blog/obstacle-tower/1/front.png
  image_type: cover
- title: "Obstacle Tower 2: Playing the Game"
  link: /obstacle-tower/2
  image: /assets/blog/obstacle-tower/2/front.png
  image_type: cover
---

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/papers/obstacle-tower.pdf">
Paper
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/annotations/obstacle-tower.pdf">
Annotations
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/fastpapers/obstacle-tower">
Fast Paper Post
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/tags/obstacle-tower">
Obstacle Tower Series
</a>

## Why I Read This

Arthur Juliani, the first author of this paper, [announced the Obstacle Tower Challenge in his Twitter](https://twitter.com/awjuliani/status/1089948637914746881) 4 days ago (on January 29, 2019). I enjoy participating in reinforcement learning competitions, since they help me learn difficult ideas while having fun. (In fact, [I learned about DQNs through the OpenAI Retro Contest!](https://www.endtoend.ai/blog/i-learned-dqns-with-openai-competition/))

I read [Unity's short post](https://blogs.unity3d.com/2019/01/28/obstacle-tower-challenge-test-the-limits-of-intelligence-systems/) about the challenge, and found out that they had already [released the environment on GitHub](https://github.com/Unity-Technologies/obstacle-tower-env). I played the game myself, and also took a brief look at the environment. I was excited, since it was much more challenging than existing discrete-action-space environments. The competition begins on February 11th, but I decided to read the paper in advance to gain a better understanding of the environment.

## Background

A good benchmark is essential for rapid progress in field. ImageNet, a large image database, had a significant impact on the progress of computer vision research since its presentation in 2009. Similarly the [Arcade Learning Environment (ALE)](https://github.com/mgbellemare/Arcade-Learning-Environment) and [OpenAI Gym](https://gym.openai.com/) enabled rapid research in reinforcement learning. ALE offers Atari 2600 games as reinforcement learning environments, and OpenAI Gym offers a unified interface for agent-environment interaction.

AI benchmarks lose a lot of its purpose once the AI's performance exceeds that of humans. If the AI has a subhuman performance, humans can analyze the mistakes to understand how the AI can be improved. However, if the AI has a superhuman performance, it becomes much more challenging to understand how to improve the performance further.

New reinforcement learning agents have shown that they have superhuman performance in most games in ALE. [R2D2 by DeepMind](https://openreview.net/pdf?id=r1lyTjAqYX) have superhuman performance in 52 of 57 Atari games with the same architecture. The five remaining games are Montezuma's Revenge, Pitfall, Private Eye, Skiing, and Solaris. [Go-Explore by Uber](https://arxiv.org/abs/1901.10995) achieved superhuman performance on Montezuma's Revenge and Pitfall. Thus, the authors believe that **a more challenging environment is necessary to foster progress in reinforcement learning.**

## Central Idea

Obstacle Tower conists of up to 100 floors (0-99), with the player starting on floor zero. Each floor is a single finite episode, and it may contain puzzles to solve, enemies to defeat, obstacles to evade, or keys to unlock doors. As the agent progresses to higher floors, the floor layout becomes more complex. The episode terminates when the player encounters a hazard (pit, enemy), is out of time, or finishes the game by reaching the top floor. There are spase and dense reward functions: sparse reward function only give +1 reward on clearing the floor, while dense reward function also gives +0.1 reward on opening doors and clearing puzzles.

<div class="youtube-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/qO4OBXFhMEo?start=37" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The authors compare the Obstacle Tower environment with previous reinforcement learning environments such as ALE, [VizDoom](http://vizdoom.cs.put.edu.pl/), [Gym Retro](https://blog.openai.com/gym-retro/), [CoinRun](https://blog.openai.com/quantifying-generalization-in-reinforcement-learning/), and [Pommerman](https://www.pommerman.com/). The authors differentiate Obstacle Tower from these environments by listing these features:

1. **Physics-driven interactions** The player's interaction with objects are controlled by a 3D  physics engine (Unity).

2. **High visual fidelity** The game is much more photo-realistic than retro games like ALE, VizDoom, or Gym Retro.

3. **Procedural generation of nontrivial levels and puzzles** Unlike most environments with fixed map, Obstacle Tower procedurally generates levels and puzzles, testing the generalization capabiilities of the agent.

4. **Procedurally varied graphics** Obstacle Tower also tests the agent's visual generalization capabilities by varying the texture, lighting, and geometry of the objects.

The authors also list what challenges the agent provides:

1. **Generalization** In this stochastic environment, both the floor plan and the room layout. Thus, simple imitation learning methods or methods that take advantage of the environment's determinism will perform poorly. Instead, the agent must be able to generalize well.

2. **Vision** The main source of observation is a $168 \times 168$ rendered RGB image with different textures, lighting, and complex shapes. The authors believe that agents must have a "greater representational capacity" for this environment.

3. **Control** The Obstacle Tower includes obstacles, enemies, and moving platforms, which require fine-tuned control.

4. **Planning** Floor plans get complex as floors get higher, so the agent must plan the path appropriately.

Popular baseline algorithms - [Rainbow](https://arxiv.org/abs/1710.02298) and [Proximal Policy Optimization (PPO)](https://arxiv.org/abs/1707.06347) - perform poorly on a subhuman level. The authors end by suggesting a few subfields of reinforcement learning algorithms that could prove to be most likely improve the performance of the agent:

1. **Hierarchical Control** There is a natural hierarchy - floor and room - in this environment.

2. **Intrinsic Motivation** Even with the dense reward function, the environment has sparse rewards relative to most existing reinforcement learning environments. In fact, the dense reward function is very similar to that of Montezuma's Revenge. Thus, augmenting the reward function could lead to faster learning.

3. **Meta-Learning** The agent must learn to quickly adapt to different variations of environments.

4. **World-Model Learning** Since the environment is based on 3D physics, learning a relatively high-level movement dynamics could be easier for the agent rather than learning a complex control sequence.

## Thoughts

- The Obstacle Tower environment can perhaps be better summarized as a 3D stochastic version of Montezuma's Revenge with an easy version of Sokoban.
- The environment sounds perhaps too difficult: it seems like it requires an agent with good exploration and planning, paired with a good convolutional neural network (CNN).

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
