---
layout: post
title: "Bias vs Variance in Reinforcement Learning"
author: Seung Jae (Ryan) Lee
permalink: /blog/bias-vs-variance-in-reinforcement-learning
published: false
---

Bias-Variance tradeoff is a familiar term to most people who learned machine learning. In Machine Learning or Deep Learning context, bias and variance refers to the model: a model that underfits the data has high bias, whereas a model that overfits the data has high variance.

![Bias vs. Variance in Andrew Ng's Coursera course](underfit_right_overfit.png)

However, in Reinforcement Learning, bias and variance have different meanings. This leads to a lot of confusion, because in Deep Reinforcement Learning, both cases of bias and variance exist. In Reinforcement Learning, bias and variance appear first when we compare Monte Carlo (MC) and Temporal Difference Learning (TD).

Monte Carlo method is a learning method 

[Matthew Lai from DeepMind](http://qr.ae/TUppf6) explains the