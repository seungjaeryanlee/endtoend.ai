---
layout: post
title: "AI for Prosthetics Week 2: Understanding the Action Space"
author: Seung Jae (Ryan) Lee
permalink: /blog/ai-for-prosthetics-2
published: false
---

# AI for Prosthetics Week 2: Understanding the Action Space

* [Week 1: Understanding the Challenge](/blog/ai-for-prosthetics-1)
* **Week 2: Understanding the Action Space**



## Muscles

[Last week](/blog/ai-for-prosthetics-1), we briefly saw how a valid action consisted of 19 numbers, each  between 0 and 1. The 19 numbers represented the amount of force to put to each muscle. I do not have any knowledge on muscles, so I decided to manually go through all the muscles to understand the effects of each muscle.

#### Index 0

![](0.gif)

#### Index 1

![](1.gif)

#### Index 2

![](2.gif)

#### Index 3

![](3.gif)

#### Index 4

![](4.gif)

#### Index 5

![](5.gif)

#### Index 6

![](6.gif)

#### Index 7

![](7.gif)

#### Index 8

![](8.gif)

#### Index 9

![](9.gif)

#### Index 10

![](10.gif)

#### Index 11

![](11.gif)

#### Index 12

![](12.gif)

#### Index 13

![](13.gif)

#### Index 14

![](14.gif)

#### Index 15

![](15.gif)

#### Index 16

![](16.gif)

#### Index 17

![](17.gif)

#### Index 18

![](18.gif)

Let's test our intuition by trying to create a "hip-thrust" action. It looks like indices 2, 3, 10, 11 are the muscles at the back of the upper leg, so let's try fully activating these muscles.



Awesome! We now have some intuition on what muscles the agent might want to use.

## KerasDDPGAgent

Looking at the effects of each index of the action was exciting, but unless we are trying to fully handcraft an agent, we also need to implement a learning algorithm. Fortunately, 

## What's Next?



