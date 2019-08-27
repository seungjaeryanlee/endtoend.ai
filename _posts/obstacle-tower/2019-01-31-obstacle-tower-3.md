---
layout: post
title: "Obstacle Tower 3: Observation Space and Action Space"
author: Seungjae Ryan Lee
permalink: blog/obstacle-tower/3
redirect_from: obstacle-tower/3
tags:
 - reinforcement-learning
 - obstacle-tower
 - competition

image: /assets/blog/obstacle-tower/3/front.png
image_type: cover
image_align: right
excerpt: >
    We analyze the observation space and the action space provided by the Obstacle Tower environment.

nav:
- name: "Observation Space"
  permalink: '#observation-space'
- name: "Action Space"
  permalink: '#action-space'
- name: "Retro Mode"
  permalink: '#retro-mode'
- name: "What's Next?"
  permalink: '#whats-next'

related:
- title: "Obstacle Tower 2: Playing the Game"
  link: /obstacle-tower/2
  image: /assets/blog/obstacle-tower/2/front.png
  image_type: cover
- title: "Obstacle Tower 4: Understanding the Baselines"
  link: /obstacle-tower/4
  image: /assets/blog/obstacle-tower/4/front.png
  image_type: cover

custom-js:
- "/assets/scripts/jquery-3.3.1.min.js"
- "/assets/scripts/action_interpreter.js"

---

[In the last post](/obstacle-tower/2), we played the game ourselves and got a better understanding of the environment, as well as some insight on how a "good" agent might behave. Today, we will now check how the agent observes and acts inside this environment.

## Observation Space

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--8-col mdl-cell--8-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/3/observation_space.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

The observation space of the Obstacle Tower consists of two components:

1. The visual part
2. The auxiliary part 

The visual part is a single $168 \times 168$ image. It is exactly twice in hieght and width from the common $84 \times 84$ image found in the Arcade Learning Environment (ALE).

The auxiliary part is a vector that consists of two numbers: the number of keys the agent has, and the amount of time until the episode terminates.

## Action Space

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/3/action_space.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

The action space of the Obstacle Tower consists of four "subspaces" (components):

1. Moving forward or backward (or no-op)
2. Turning camera counterclockwise or clockwise (or no-op)
3. Jumping (or no-op)
4. Moving left or right (or no-op)

These subactions from subspaces can be combined in any way: for example, you can turn camera clockwise while jumping left. In total, there are $3 \times 3 \times 2 \times 3 = 54$ combinations available.

Note that "forward", "backward", "left", "right" are all relative to the player's camera.

For convenience, here is a simple Action Interpreter widget, with style borrowed from [crontab.guru](https://crontab.guru/):

<style>
  #action-interpreter-div {
    margin-bottom: 1em;
    margin-top: 1em;
  }
  #action-interpretation {
    text-align: center;
    font-size: 200%;
    font-family: Georgia, serif;
    min-height: 2.2em;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-line-pack: end;
    align-content: flex-end;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 0.5em;
  }
  #action-interpreter {
    font-family: "Courier New", Courier, monospace;
    text-align: center;
    font-size: 250%;
    width: 100%;
    background-color: #333333;
    border: 1px solid #cccccc;
    border-radius: 0.6em;
    color: #ffffff;
    padding-top: 0.075rem;
  }
</style>
<div id="action-interpreter-div">
  <p id="action-interpretation">Do nothing.</p>
  <input id="action-interpreter" type="text" value="0 0 0 0">
</div>

**NOTE** There was a bug in previous version of action interpreter: camera clockwise and camera counterclockwise was reversed. This was fixed on April 11th.

## Retro Mode

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/3/observation_space_retro.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

These observation space and action space are quite different from the Arcade Learning Environment (ALE). To allow making a fair comparison, the environment also offers a "retro mode" where both the observation space and the action space is retro-fitted to be as similar as the ALE environments.

Instead of the two-component observation space, the "retro" observation space only returns an $84 \times 84$ image as observation. Instead of an auxiliary vector, it embeds the information into the image.

Instead of the four-component action space, the "retro" action space accepts a number from 0~53, resembling the 54 combinations of actions available.

You can activate the retro mode when you initialize the environment by giving `retro=True` as a parameter:

```
env = ObstacleTowerEnv('./ObstacleTower/obstacletower', retro=True)
```

## What's Next?

Now that we know what the agent will see and how the agent can act, we are ready to start training some baseline agents! A baseline agent can offer valuable insight on what possible improvements can be made. For example, if the baseline agent struggles in distinguishing objects, we might want a larger convolutional neural network. If the baseline agent cannot solve 2D puzzles, we might want to add some planning module to the agent.

Following the [Obstacle Tower paper](https://storage.googleapis.com/obstacle-tower-build/Obstacle_Tower_Paper_Final.pdf), we will use two popular baselines: [Rainbow](https://arxiv.org/abs/1710.02298) and [PPO](https://arxiv.org/abs/1707.06347).
