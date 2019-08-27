---
layout: post
title: "Obstacle Tower 6: Submitting a Random Agent"
author: Seungjae Ryan Lee
permalink: blog/obstacle-tower/6
redirect_from: obstacle-tower/6
tags:
 - reinforcement-learning
 - obstacle-tower
 - competition

image: /assets/blog/obstacle-tower/6/front.png
image_type: cover
image_align: right
excerpt: >
    We submit a random agent to the Obstacle Tower Challenge that just began.

nav:
- name: "Clone Starter Kit"
  permalink: '#clone-obstacle-tower-challenge-repository'
- name: "Download Environment"
  permalink: '#download-environment'
- name: "Random Agent"
  permalink: '#random-agent'
- name: "Create GitLab Repo"
  permalink: '#create-gitlab-repository'
- name: "Submit Agent"
  permalink: '#submit-agent'
- name: "What's Next?"
  permalink: '#whats-next'

related:
- title: "Obstacle Tower 5: Possible Improvements to the Baselines"
  link: /obstacle-tower/5
  image: /assets/blog/obstacle-tower/5/front.png
  image_type: cover
---

The Obstacle Tower Challenge has launched! Let's start by submitting an agent that samples a random action. For this, we will follow [the guide provided by Unity](https://github.com/unity-Technologies/obstacle-tower-challenge).


## Clone `obstacle-tower-challenge` Repository

Unity created the [**obstacle-tower-challenge repository**](https://github.com/Unity-Technologies/obstacle-tower-challenge) that serves as a starter kit. We need to clone this repository to start developing and submitting agents.

```bash
git clone https://github.com/Unity-Technologies/obstacle-tower-challenge.git
git clone git@github.com:Unity-Technologies/obstacle-tower-challenge.git
```

The first line clones the repository with HTTPS, whereas the second line clones the repository with SSH. Choose whichever method you are more familiar with.

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

The repository contains a `run.py` script that has a simple `run_episode` function:

```python
def run_episode(env):
    done = False
    reward = 0.0
    
    while not done:
        action = env.action_space.sample()
        obs, reward, done, info = env.step(action)
    return reward
```

The action is sampled randomly until the episode is finished.

## Create GitLab Repository

To make a submission, you need to create a private repository on [**AICrowd GitLab**](https://gitlab.aicrowd.com/). Name it `obstacle-tower-challenge` and click **Create Project**.

<div class="mdl-grid">
  <div class="mdl-layout-spacer"></div>
  <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--12-col-phone mdl-cell--hide-phone">
    <img src="{{absolute_url}}/assets/blog/obstacle-tower/6/new_project.png">
  </div>
  <div class="mdl-layout-spacer"></div>
</div>

To submit, we need to push the `obstacle-tower-challenge` starter kit in our local computer to this repository. First, let's add a new remote repository to Git using one of the two commands below. Replace `<YOUR_AICROWD_USER_NAME>` with your username on AICrowd.

```bash
# Add AICrowd git remote endpoint
git remote add aicrowd https://gitlab.aicrowd.com:<YOUR_AICROWD_USER_NAME>/obstacle-tower-challenge.git
git remote add aicrowd git@gitlab.aicrowd.com:<YOUR_AICROWD_USER_NAME>/obstacle-tower-challenge.git
```

Push to GitLab AICrowd repository. To push, you would need to set up credentials. When you visit the [CrowdAI website](https://gitlab.aicrowd.com/), there should be a notification banner on setting a password (for HTTPS) of setting up SSH (for SSH). After you set up credentials, you can push.

```
git push aicrowd master
```

## Submit Agent

To submit the agent, you need to create a tag for your submission and push.

```bash
# Create a tag for your submission and push
git tag -am "v0.1" v0.1
git push aicrowd master
git push aicrowd v0.1
```

Congratulations! You have now submitted your first agent! You should be able to see the status of your submission on the [Submissions section of the AICrowd website](https://www.aicrowd.com/challenges/unity-obstacle-tower-challenge/submissions) or on the Issues page of the AICrowd GitLab.


## What's Next?

Now that we submitted a toy agent, the next step would be to train one of the baseline agents (Rainbow or PPO) and submit it!
