---
layout: post
title: "Slow Papers: Wave-U-Net: A Multi-Scale Neural Network for End-to-End Audio Source Separation (Stoller et al., 2018)"
author: Seungjae Ryan Lee
permalink: /slowpapers/wave-u-net/

image: /assets/blog/slowpapers/wave-u-net/front.png
image_type: contain

excerpt: >
    Models for audio source separation usually operate on the magnitude spectrum, which ignores phase information and makes separation performance dependant on hyper-parameters for the spectral front-end. Therefore, we investigate end-to-end source separation in the time-domain, which allows modelling phase information and avoids fixed spectral transformations. Due to high sampling rates for audio, employing a long temporal input context on the sample level is difficult, but required for high quality separation results because of long-range temporal correlations. In this context, we propose the Wave-U-Net, an adaptation of the U-Net to the one-dimensional time domain, which repeatedly resamples feature maps to compute and combine features at different time scales. We introduce further architectural improvements, including an output layer that enforces source additivity, an upsampling technique and a context-aware prediction framework to reduce output artifacts. Experiments for singing voice separation indicate that our architecture yields a performance comparable to a state-of-the-art spectrogram-based U-Net architecture, given the same data. Finally, we reveal a problem with outliers in the currently used SDR evaluation metrics and suggest reporting rank-based statistics to alleviate this problem.

nav:
- name: 1 Introduction
  permalink: '#1-introduction'
- name: 2 Related Works
  permalink: '#2-related-works'
- name: 3 The Wave-U-Net Model
  permalink: '#3-the-wave-u-net-model'
- name: 4 Experiments
  permalink: '#4-experiments'
- name: 5 Results
  permalink: '#5-results'
- name: 6 Discussion and Conclusion
  permalink: '#6-discussion-and-conclusion'
---

![Abstract](/assets/blog/slowpapers/wave-u-net/front.png)

**Title**: Wave-U-Net: A Multi-Scale Neural Network for End-to-End Audio Source Separation

**Authors**
<div>
<ul class="slowpapers__authors">
  <li>Daniel Stoller</li>
  <li>Sebastian Ewert</li>
  <li>Simon Dixon</li>
</ul>
</div>

**Prerequisites**
 - TBA

**Accompanying Resources**
 - TBA

<hr/>

This is a part of the [**Slow Papers**](/slowpapers) series that peruses each selected paper slowly to gain a deeper understanding of the paper.

<hr/>



## 1 Introduction
### 2 Related Works
## 3 The Wave-U-Net Model
### 3.1 The Base Architecture
### 3.2 Architectural Improvements
## 4 Experiments
### 4.1 Datasets
### 4.2 Training Procedure
### 4.3 Model Settings and Variants
## 5 Results
### 5.1 Quantitative Results
### 5.2 Qualitative Results and Observations
## 6 Discussion and Conclusion

<hr/>



## Final Thoughts

**Questions**
 - TBA

**Recommended Next Papers**
 - TBA
