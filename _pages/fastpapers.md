---
layout: remark
title: "Fast Papers"
permalink: /fastpapers/

image: /assets/fastpapers/fastpapers.png
image_type: contain
excerpt: "Fast Papers is a slideshow where each slide summarizes one paper with few sentences and some graphics."
---


<style>
    .authors {
        opacity: 0.8;
    }
    .date {
        opacity: 0.8;
    }
</style>

<textarea id="source" class="remark-textarea">



class: center, middle, hide-slide-number
count: false
# .title[Fast Papers]

Seungjae Ryan Lee / [endtoendAI](https://www.endtoend.ai)

Each slide summarizes a paper with few sentences and some graphics.

---

name: toc
class: hide-slide-number
count: false
# Table of Contents
1. [Observational Overfitting in Reinforcement Learning](#obs-overfit)


---

name: obs-overfit
# Observational Overfitting in Reinforcement Learning

<div class="remark-headnote">
  <span>Song et al., 2019</span>
</div>

<div class="w60">
  <img src="/assets/fastpapers/obs-overfit/obs_overfit.png" alt="">
</div>

- Agents can overfit to parts of observation irrelevant to MDP dynamics such as the scoreboard or the background, as they are correlated with progress.
- Observational overfitting hurts agent's generalization.
- Overparametrization can mitigate observational overfitting and improve generalization.

<div class="remark-footnote">
  <span><a class="paper-link" href="https://arxiv.org/abs/1912.02975">https://arxiv.org/abs/1912.02975</a></span>
</div>




</textarea>
