---
published: false
layout: post
title: "Obstacle Tower 6: Submitting a Random Agent"
author: Seungjae Ryan Lee
permalink: /obstacle-tower/6
tags:
 - reinforcement-learning
 - obstacle-tower
 - competition

front_image: /assets/blog/obstacle-tower/6/front.png
meta_image: /assets/blog/obstacle-tower/6/front.png
front_image_type: cover
front_image_align: right
front_text: >
    We submit a random agent to the Obstacle Tower Challenge that just began.
excerpt: >
    We submit a random agent to the Obstacle Tower Challenge that just began.

nav:
- name: "Clone Repository"
  permalink: '#clone-repository-obstacle-tower-challenge'
- name: "Download Environment"
  permalink: '#download-environment'
- name: "Random Agent"
  permalink: '#random-agent'
---

## Clone Repository: `obstacle-tower-challenge`

Unity created the [**obstacle-tower-challenge repository**](https://github.com/Unity-Technologies/obstacle-tower-challenge). We need to clone this repository to start developing and submitting agents.

```
git clone https://github.com/Unity-Technologies/obstacle-tower-challenge.git
git clone git@github.com:Unity-Technologies/obstacle-tower-challenge.git
```

The first line clones the repository with HTTPS, whereas the second line clones the repository with SSH.

## Download Environment

To make sure your agent runs, you also need the [**Obstacle Tower Environment**](https://github.com/Unity-Technologies/obstacle-tower-env#download-the-environment). Select the correct OS and unzip it to the `obstacle-tower-challenge/` repository.

After this step, your directory should look something like this:

```
+ obstacle-tower-challenge/
    + ObstacleTower/
    - .gitignore
    - LICENSE
    - README.md
    - aicrowd.json
    - apt.txt
    - banner.png
    - build.sh
    - env.sh
    - requirements.txt
    - run.py
    - run.sh
```

## Random Agent

The repository contains a `run.py` script that 


## What's Next?
