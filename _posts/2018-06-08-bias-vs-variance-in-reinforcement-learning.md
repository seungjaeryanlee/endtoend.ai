---
layout: post
title: "Bias vs Variance in Reinforcement Learning"
author: Seung Jae (Ryan) Lee
permalink: /blog/bias-vs-variance-in-reinforcement-learning
published: false
---

Bias-Variance tradeoff is a familiar term to most people who learned machine learning. In the context of Machine Learning, bias and variance refers to the model: a model that underfits the data has high bias, whereas a model that overfits the data has high variance. A model with high bias does not fit the training set well, and will not fit the test set well. A model with high variance fits the training set well, but it fails to generalize because it has learned not only the pattern but also the noise in the data.

![Bias vs. Variance in Andrew Ng's Coursera course](underfit_right_overfit.png)

In Reinforcement Learning, there is another set of bias and variance to consider. This leads to a lot of confusion, because in Deep Reinforcement Learning, both cases of bias and variance exist. Thus, it is important to have a clear understanding of what estimator we are referring to when we talk about bias and variance.

### Monte Carlo and Temporal Difference Learning

Reinforcement Learning is a field of Machine Learning where the agent learns not through a fixed dataset but by interacting with the environment. In most Reinforcement Learning methods, the goal of the agent is to estimate the state value function $v_{\pi}(S_t)$ or the action value function $q_{\pi}(S_t, A_t)$. Value functions describe how desirable the state $S_t$ and action $A_t$ is to the agent. For this post, we use the state value function $v_{\pi}$, but the same idea applies to the action value function $q_{\pi}$.

The state value function $v_{\pi}(S_t)$ is defined the expected total amount of rewards received by the agent from that state $S_t$ until the end of the episode. In most cases, the agent cannot accurately predict the results of its action, so it is impossible for the agent to precisely calculate the state or action values. Thus, it needs to **estimate** them iteratively. This estimation is where bias and variance is introduced.

The estimate $V(S_t)$ of the true value function $v_{\pi}(S_t)$ is updated with the following formula:

$$ V(S_t) \leftarrow V(S_t) + \alpha (\text{Target} - V(S_t))$$

This formula is just an weighted average of $V(S_t)$ and $\text{Target}$, with the weight specified by the learning rate $\alpha$. In other words, $V(S_t)$ takes a step towards the $\text{Target}$. Thus, the $\text{Target}$ used for the update defines the method. There are two basic methods for iteratively estimating the value function: **Monte Carlo** (MC) learning and **Temporal Difference** (TD) learning. 

In Monte Carlo learning, the return $G_t$ is used as the $\text{Target}$. $G_t = R_{t+1} + \gamma R_{t+2} + \ldots $ is the discounted sum of rewards from state $S_t$ until the end of the episode. You are not mistaken if you think the definition sounds similar to the definition of $v_{\pi}(S_t)$: in fact, $v_{\pi}(S_t) = \mathbb{E}[G_t]$.

In TD learning, instead of waiting until the end of the episode, the $\text{Target}$ is the sum of immediate reward and the estimate of future rewards. In other words, $\text{Target} = R_{t+1} + \gamma V(S_{t+1})$.

### Bias and Variance in Reinforcement Learning

The idea of Bias-Variance tradeoff appears when we compare Monte Carlo with TD learning. Remember that when we talk about bias and variance for these two methods, we are talking about the bias and variance of their target values.

The relative bias and variance of Monte Carlo and TD can be summarized with the table below:

|          | $G_t$ (Monte Carlo) | $R_{t+1} + \gamma V(S_{t+1})$ (TD) |
| -------- | ------------------- | ---------------------------------- |
| Bias     | 0                   | $> 0$                              |
| Variance | High                | Low                                |

Let's first look at the bias. A bias of an estimator $\hat{\theta}$ is $\mathbb{E}[\hat{\theta}] - \theta$. In this case, we are estimating $v_{\pi}(S_t)$, so $\text{Bias} = \mathbb{E}[\text{Target}] - v_{\pi}(S_t)$. Thus, return $G_t$ is an unbiased estimate of $v_{\pi}(S_t)$ simply by definition of the value function: $v_{\pi}(S_t) = \mathbb{E} [G_t]$. In contrast, the bias of $R_{t+1} + \gamma V(S_{t+1})$ is nonzero.

The variance of an estimator denotes how "noisy" the estimator is.

The variance of $G_t​$ is high. Because $G_t​$ is a (discounted) sum of all rewards until the end of the episode, $G_t​$ can be affected by a lot of actions.

In contrast, $R_{t+1} + \gamma V(S_{t+1})$ has low variance. The target $R_{t+1} + \gamma V(S_{t+1})$ only depends on the immediate reward $R_{t+1}$, so compared to $G_t$, it has less variables to consider.

### Underfitting and Overfitting in Reinforcement Learning

Another natural way to understand the table above is to use the idea of underfitting and overfitting. [Matthew Lai from DeepMind](http://qr.ae/TUppf6) explained this quite clearly.