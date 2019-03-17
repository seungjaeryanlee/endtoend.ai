---
layout: post
title: "A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
author: Seungjae Ryan Lee
permalink: /slowpapers/a-reduction-of-imitation-learning-and-structured-prediction-to-no-regret-online-learning/
published: false

image: /assets/blog/slowpapers/a-reduction-of-imitation-learning-and-structured-prediction-to-no-regret-online-learning/front.png
front_image_type: contain
excerpt: >
    This is a review of the paper <i>A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning</i> by S. Ross, G. Gordon, and J. Bagnell. The paper introduces Dataset Aggregation (DAgger), an imitation learning algorithm that trains a stationary deterministic policy. DAgger is shown to outperform previous approaches in *Super Tux Kart*, *Super Mario Bros.*, and Handwriting Recognition.
---

*This is a part of the [**Slow Papers**](/slowpapers) series that peruses each selected paper slowly to gain a deeper understanding of the paper.*

**Title**: A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning
<br/>
**Authors**: Stephane Ross, Geoffrey J. Gordon, J. Andrew Bagnell
<br/>
**Publish Date**: November 2010

With Forward Training algorithm, it is possible to achieve $T \epsilon$ guarantee by training a non-stationary policy that is a collection of policies $\pi_t$ for each timestep $t$, but this is impractical when $T$ is large.

SMILe, a recent approach, trains a stationary stochastic policy that is finite mixture of policies, adding a new policy after every training iteration. Although SMILe has better performane guarantee, the resulting policy can be unstable since the policies in the mixture can vary in quality.
