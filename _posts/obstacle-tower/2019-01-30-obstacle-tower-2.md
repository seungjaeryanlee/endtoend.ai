---
layout: post
title: "Obstacle Tower 2: Playing the Game"
author: Seungjae Ryan Lee
permalink: /obstacle-tower/2
tags:
 - reinforcement-learning
 - obstacle-tower
 - competition

image: /assets/blog/obstacle-tower/2/front.png
image_type: cover
image_align: right
excerpt: >
    We play the Obstacle Tower game to understand the qualities of a successful agent.

related:
- title: "Obstacle Tower 1: Installing the Environment"
  link: /obstacle-tower/1
  image: /assets/blog/obstacle-tower/1/front.png
  image_type: cover
- title: "Obstacle Tower 3: Observation Space and Action Space"
  link: /obstacle-tower/3
  image: /assets/blog/obstacle-tower/3/front.png
  image_type: cover

nav:
- name: "Run Game"
  permalink: '#how-to-run-game'
- name: "Procedural Generation"
  permalink: '#procedural-generation'
- name: "Doors"
  permalink: '#doors'
- name: "Objects"
  permalink: '#objects'
- name: "Sokoban"
  permalink: '#sokoban-puzzle'
- name: "Misc."
  permalink: '#miscellaneous'
- name: "Conclusion"
  permalink: '#conclusion'
- name: "What's Next?"
  permalink: '#whats-next'
---

[In the last post](/obstacle-tower/1), we installed the *Obstacle Tower* environment locally and verified that it was installed correctly. In this post, we will take a look at the game itself. It is crucial to understand the environment well to debug and improve the agents' performance.

## How to Run Game

Download the environment if you have not already:

| *Platform*     | *Download Link*                                                                     |
| --- | --- |
| Linux (x86_64) | [https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_linux.zip](https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_linux.zip)   |
| Mac OS X       | [https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_osx.zip](https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_osx.zip)     |
| Windows        | [https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_windows.zip](https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_windows.zip) |

Navigate to the folder you unzipped the downloaded environment. If you followed the guide, it should be under `examples/ObstacleTower`. Run the `obstacletower.x86_64` by double-clicking. After the Unity logo, the game should start in a few seconds.

Here are the keyboard controls:

| **Keyboard Key** | **Action**                                        |
|:----------------:|:-------------------------------------------------:|
| W, S, A, D       | Move character forward / backwards / left / right |
| K, L             | Rotate camera left / right                        |
| Space            | Jump                                              |

## Procedural Generation

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor0.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor1.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor2.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor3.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor4.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor5.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor6.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor7.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor8.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor9.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor10.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor11.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor12.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor13.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor14.png">
  </div>
  <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/floors/floor15.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

One of the exciting features of this environment is how nondeterministic it is. Every level and room is procedurally generated, along with variations on textures, lighting conditions, and object geometry. Thus, to train an agent that performs well in different levels, the agent must learn to generalize for different visuals and different floor structures.

I have sampled a picture from each floor of a single playthrough. The floors look similar to the human eye, but the color and theme variations could be quite misleading to the convolutional neural network (CNN).

## Doors

There are four types of doors in the game:

- a normal door that leads to the next room,
- a locked door, and
- a puzzle door, and
- the door that leads to the next floor.

Opening a door give a reward of 0.1 if the dense reward function is used, and 0 if the sparse reward function is used.

### Normal Door

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/doors/green_door_1.png">
  </div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/doors/green_door_2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

Normal doors have green symbols, and they can opened simply by touching it. Note that the door's design changes with the theme of the floor.

### Locked Door

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/doors/locked_door_1.png">
  </div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/doors/locked_door_2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

Locked doors have red symbols, and can only be opened if the player has a "key." (see description below). By consuming a key, the player permanently unlocks the door.

### Puzzle Door

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/sokoban_2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

Puzzle doors have purple symbols, and they are locked until the user completes the "puzzle room" (see description below).

### Next Floor Door

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/doors/yellow_door_1.png">
  </div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/doors/yellow_door_2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

Next floor doors have yellow arrow symbols, and can be opened simply by touching. Upon entering this door, the episode terminates, and a new episode begins with newly generated floor.



## Objects

### Time Orb

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/time_orb_1.png">
  </div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/time_orb_2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

In some rooms, there are blue glowing orbs. Upon running into these orbs, the players' countdown timer increases by 500. There are often rooms with multiple time orbs.

### Key

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/key_1.png">
  </div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/key_2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

Keys are yellow key-shaped objects that the player can pick up. It is used to open "locked doors" (see description above). After opening a locked door, the key vanishes.

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/got_key_1.png">
  </div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/got_key_2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

When you pick up a key, a key symbol appears in the top of your screen.


## Puzzle Room

### Sokoban 

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/sokoban_1.png">
  </div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/sokoban_2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

The Sokoban room requires the player to push a purple box onto a white plate. If the players wants to reset the Sokoban puzzle, moving to the red plate resets the puzzle. Upon completing the puzzle, the Sokoban door opens.

## Miscellaneous

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/need_jump_1.png">
  </div>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/2/objects/need_jump_2.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

Jumping is not necessary in most floors. However, as the episode gets harder, jump becomes necessary.

On the left, we see a key on a cylindrical block. To complete the episode, the key must be collected, which requires jumping twice.

On the right, we see a map with pits. Falling into a pit results in an episode termination, so the player must move around or jump across the pits.

## Conclusion

After playing the game for just 5-10 minutes, I came up with many ideas that could dramatically reduce the training time of the agent. I highly recommend others also interested in this environment to play the game themselves.

From my playthrough, a few things became clear to me:

- Not all 54 actions are needed.
- Extracting features from raw visual input would be harder than Montezuma's Revenge for CNNs.
- Distilling game knowledge is essential. (ex. Hierarchical Reinforcement Learning)

## What's Next?

Now that I played the game myself, I should now check how the agent would see and play the game. In the next post, I will check the observation space and the action space of the agent. Afterwards, I will run a simple baseline agent and discuss possible improvements to this baseline agents, listing some noteworthy papers.
