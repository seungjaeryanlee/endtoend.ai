---
layout: page
title: "CTRL: Current Topics in RL"
permalink: /ctrl/
redirect_from: 
- /current-topics-in-rl/
- /current-topics-in-reinforcement-learning/

display_front: true
front_image: /assets/home/ctrl.jpg
front_image_type: cover
front_text: >
    Read summaries of new papers in Reinforcement Learning, ranging from
    theoretical studies to experiments.
---

Reinforcement Learning is a blooming field with interesting papers being published every day. Unfortunately, the sheer amount of new papers can be overwhelming for those that cannot follow all these new papers on a daily basis. **CTRL** hopes to assist these people in two ways:

1. Help people follow emerging trends without devoting too much time
2. Help people decide what papers to read

CTRL summarizes the ideas and results of a paper and puts it into context by connecting it to other relevant papers. In a sense, it can be seen as an extended abstract, but with more visualizations and context. If you want to know when new CTRL posts are published, [join us and subscribe to our RSS feed](/feed.xml)!

### Learning Dexterous In-Hand Manipulation

<p style="margin-top: -24px;">OpenAI • August 2018</p>

 - In-hand manipulation had limited results due to complexity of system.
 - **Dactyl** successfully performed transfer learning from simulator to real environment, using extensive randomizations and effects to obtain a robust policy and omitting noisy sensors.
 - Dactyl uses LSTM, massively distributed PPO, and Asymmetric Actor Critic.
 - Dactyl shows unprecedented levels of dexterity and can discover humanlike grasp types by itself.

<img style="background-color: black;" src='{{ "/assets/_pages/ctrl/learning-dexterous-in-hand-manipulation.png" | absolute_url }}'/>

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/slides/paper/learning_dexterous_in_hand_manipulation.pdf">
Slides
</a>

### A Deeper Look at Experience Replay

<p style="margin-top: -24px;">S. Zhang and R. Sutton • December 2017</p>

 - Experience Replay is the only technique except parallelized workers that allows for uncorrelated data, and thus it has been used in many state-of-the-art algorithms.
 - Although most research has used the default size of $10^6$ for the replay buffer, Experience Replay is sensitive to replay buffer size, with huge performance drops for buffers too small or too large.
 - The performance drop of large replay buffer can sometimes be mitigated with **Combined Experience Replay (CER)**, experience replay combined with online learning.
 - CER is only a workaround, and the Experience Replay is inherently flawed.

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/ctrl/a-deeper-look-at-experience-replay/">
Post
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/slides/paper/a_deeper_look_at_experience_replay.pdf">
Slides
</a>

### Playing Atari with Deep Reinforcement Learning

<p style="margin-top: -24px;">Mnih et al. • December 2013</p>

 * Reinforcement Learning has struggled in high-dimensional sensory inputs such as vision or sound.
 * Deep Learning can extract features from high-dimensional inputs, but it expects large dataset with i.i.d. data.
 * To alleviate the problem, the **Experience Replay** mechanism is used. Instead of using immediate transitions $(s, a, r, s')$ to train the agent, transitions are saved into memory. Then, after every action, a minibatch is sampled randomly from the memory. This achieves greater data efficiency and uncorrelated data.
 * **Deep Q-Network** (DQN) is a convolutional neural network (CNN) that outputs the action values for all actions given a state as input, trained with Q Learning and Experience Replay.
 * DQN showed state-of-the-art results in 6 out of 7 selected games from *Atari 2600*.

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/slides/paper/playing_atari_with_deep_reinforcement_learning.pdf">
Slides
</a>

### A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning

<p style="margin-top: -24px;">S. Ross, G. Gordon, and J. Bagnell • November 2010</p>

 - Traditional imitation learning approaches trained a classifier to predict the expert's behavior given a training data of the encountered observations and actions chosen by the expert. Such approach violates the i.i.d. assumption and leads to poor performance. ($T^2\epsilon$ mistakes over $T$ steps with probability of making mistake $\epsilon$)
 - Approaches such as Forward Training or SMILe have better performance guarantees ($uT\epsilon$ or near-linear), but they are either impractical in long episodes or generates an unstable policy by design.
 - The **Dataset Aggregation (DAgger)** algorithm collects a dataset of trajectories at each iteration under the current policy $\hat{\pi}_ i$ and trains the next policy $\hat{\pi}_{i+1}$ under the aggregate of all collected datasets of trajectories. (Intuitively, states from the collected trajectories are states that the learned policy is likely to encounter.)
 - DAgger has a good performance guarantee of $uT\epsilon + O(1)$.
 - DAgger outperforms previous approaches in *Super Tux Kart*, *Super Mario Bros.*, and Handwriting Recognition.

<div style="margin: 0 auto; width: 50%;">
<img src='{{ "/assets/_pages/ctrl/a-reduction-of-imitation-learning-and-structured-prediction-to-no-regret-online-learning.png" | absolute_url }}'/>
</div>
