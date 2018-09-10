---
layout: post
title: "Notes from the ai.x 2018 Conference: Fast Reinforcement Learning via Transfer"
author: Seungjae Ryan Lee
permalink: /blog/aix-2018-john-schulman/
published: false

front_image: /assets/blog/aix-2018-john-schulman/front.png
front_image_type: contain
front_text: >
   SK T-Brain hosted the ai.x Conference on September 6th at Seoul, South Korea.
   The speakers included John Schulman (OpenAI), who spoke about faster
   reinforcement learning via transfer.
---

<style>
   /* https://www.ostraining.com/blog/coding/responsive-facebook-videos/ */
   /* https://avexdesigns.com/responsive-youtube-embed/ */
    .facebook-responsive, .youtube-responsive {
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height:0;
    }

    .facebook-responsive iframe, .youtube-responsive iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
    
    .half-width {
        width: 50%;
        margin: auto;
        margin-bottom: 15px;
    }
</style>
<div class="facebook-responsive">
    <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSKTBrain%2Fvideos%2F723182251361194%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
</div>


### Policy Gradient Methods

Reinforcement Learning (RL) is the study of maximizing cumulative reward through trial and error. This talk focuses on Deep RL, where neural networks are used to approximate functions in RL algorithms.

![]({{"/assets/blog/aix-2018-john-schulman/rl.png" | absolute_url }})

Policy is a function that chooses action based on recent observations. Policy gradient methods are a class of RL algorithms that directly optimize the policy iteratively by estimating which actions were good and bad and increasing the probability of good actions through gradient update.

Policy gradient methods has a long history: [the first paper dates back to 1992](http://www-anw.cs.umass.edu/~barto/courses/cs687/williams92simple.pdf). Policy gradient methods have had many success stories. The Lee Sedol version of AlphaGo used REINFORCE, a simple policy gradient method. OpenAI Five, an AI that played Dota 2 against professional players, used Proximal Policy Optimization (PPO) method. PPO was also succesfully used in robot hand manipulation paired with LSTM.

Although reinforcement learning is powerful, it requires a lot of trial and error. *AlphaZero* played millions of games, and *OpenAI Five* used thousands of years of training. In contrast, humans can master the gameplay in one or two years.

![]({{"/assets/blog/aix-2018-john-schulman/alphazero_stat.png" | absolute_url }})

![]({{"/assets/blog/aix-2018-john-schulman/openai_five_stat.png" | absolute_url }})



### Meta Reinforcement Learning

In some ways, it is unfair to compare how long a human needs to master a task against the AI system, since humans bring a lot of **prior knowledge** to learning. The prior knowledge can be from memories of solving similar problems, or even evolutionary history such as instincts. Similarly, we want to train the AI system with some related task to accelerate learning on a new task.

In "Classical RL", the goal is to maximize reward in a single task training from scratch. A "Classical RL" task might be learning to navigate a single maze as fast as possible. In contrast, **Meta RL** is the paradigm of developing a system that can quickly learn new tasks. A "Meta-RL" task could be learning to navigate a random maze $K$ times as fast as possible. In this task, the agent should remember the exit after the first episode.

It is possible to view meta RL as a combination two RL algorithms ([$RL^2$](https://arxiv.org/abs/1611.02779)). $RL^2$ uses a recurrent neural network (RNN) that internally learns how to solve a new task. The "Fast RL" algorithm is the algorithm learned by the LSTM network to solve a maze, and the "slow RL" algorithm is the algorithm used to train the LSTM network for  random mazes.

![]({{"/assets/blog/aix-2018-john-schulman/rl2.png" | absolute_url }})

In the maze example, the $RL^2$ agent can successfully remember the experience of the first episode and can walk straight to the goal.

<div class="half-width">
    <div class="youtube-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cLpSBtlbdyY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br/>
    </div>
</div>

At a larger scale, meta RL has been used to transfer the learned behavior from simulation to real world. The LSTM learned from heavily randomized simulations so that every episode for the LSTM policy occurs in a different randomized simulation. Then, the policy must quickly master the dynamics of the new world. Thus, when applied to real world, the polciy can also master the dynamics of the real world in just few seconds.

<div class="half-width">
    <div class="youtube-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jwSbzNHGflM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br/>
    </div>
</div>

Although these meta RL approaches are indeed powerful, they assume that the agent has infinite data, and the agent can sample tasks from a distribution that covers the test case. Thus, it does not emphasize generalized learning, just learning on a broad but finite training set.

Also, in both examples, the learning is done through an RNN. Although RNNs are powerful, restricting the slow RL algorithm to an RNN might create unwanted bias.



### Gym Retro

To address this problem, we can explicitly split the training tasks and the test tasks. [**Gym Retro**](https://blog.openai.com/gym-retro/) is an test suite of over 1000 games created to address such need. Unlike previous RL efforts where the focus was achieving superhuman results on individual games, the focus of Gym Retro is solving previously unseen game as fast as a human given prior experience with similar games.

The Retro Contest address a simplified, easier version of the challenge.


<div class="half-width">
    <video width="100%" controls autoplay mute loop><source type="video/mp4" src='{{ "/assets/blog/aix-2018-john-schulman/retro.mp4" | absolute_url }}'></video>
</div>
