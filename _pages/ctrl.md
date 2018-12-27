---
layout: page
title: "CTRL: Current Topics in RL"
permalink: /ctrl/
redirect_from: 
- /current-topics-in-rl/
- /current-topics-in-reinforcement-learning/
---

Reinforcement Learning is a blooming field with interesting papers being published every day. Unfortunately, the sheer amount of new papers can be overwhelming for those that cannot follow all these new papers on a daily basis. **CTRL** hopes to assist these people in two ways:

1. Help people follow emerging trends without devoting too much time
2. Help people decide what papers to read

CTRL summarizes the ideas and results of a paper and puts it into context by connecting it to other relevant papers. In a sense, it can be seen as an extended abstract, but with more visualizations and context. By default, all papers are summarized in bullet-style, but I plan to record short videos for exciting papers.!

## Table of Contents

 * [(2018.08) Learning Dexterous In-Hand Manipulation](#learning-dexterous-in-hand-manipulation)
 * [(2018.02) Selective Experience Replay for Lifelong Learning](#selective-experience-replay-for-lifelong-learning)
 * [(2017.12) A Deeper Look at Experience Replay](#a-deeper-look-at-experience-replay)
 * [(2017.11) AI Safety Gridworlds](#ai-safety-gridworlds)
 * [(2016.02) Asynchronous Methods for Deep Reinforcement Learning](#asynchronous-methods-for-deep-reinforcement-learning)
 * [(2013.12) Playing Atari with Deep Reinforcement Learning](#playing-atari-with-deep-reinforcement-learning)
 * [(2010.11) A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning](#a-reduction-of-imitation-learning-and-structured-prediction-to-no-regret-online-learning)
 * [(2000.??) Policy Gradient Methods for Reinforcement Learning with Function Approximation](#policy-gradient-methods-for-reinforcement-learning-with-function-approximation)

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

### Selective Experience Replay for Lifelong Learning

<p style="margin-top: -24px;">D. Isele and A.Cosgun • February 2018</p>

 - *Lifelong Learning* is an idea to learn multiple tasks in sequence to apply knowledge from previous tasks to improve learning a new task.
 - A major hurdle to lifelong learning is *catastrophic forgetting*, a phenomena where the network loses performance on previous tasks while training for a new task.
 - **Selective Experience Replay** keeps a selective long-term experience replay buffer in addition to the short-term FIFO buffer to prevent catastrophic forgetting.
 - There are four candidates for selecting experiences to store in the long-term experience replay buffer:
    1. Suprise: Favor experiences with high TD error.
    2. Reward: Favor experiences that lead to high absolute return.
    3. Distribution Matching: Match the global training state distribution.
    4. Coverage Maximization: Maximize coverage of the state space.
 - Distribution Matching was found to be the best selection criteria overall, but Coverage Maximization did better in the case where the task where less time was spent was more important.

### A Deeper Look at Experience Replay

<p style="margin-top: -24px;">S. Zhang and R. Sutton • December 2017</p>

 - Experience Replay is the only technique except parallelized workers that allows for uncorrelated data, and thus it has been used in many state-of-the-art algorithms.
 - Although most research has used the default size of $10^6$ for the replay buffer, Experience Replay is sensitive to replay buffer size, with huge performance drops for buffers too small or too large.
 - The performance drop of large replay buffer can sometimes be mitigated with **Combined Experience Replay (CER)**, experience replay combined with online learning.
 - CER is only a workaround, and the Experience Replay is inherently flawed.

<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/slowpapers/a-deeper-look-at-experience-replay/">
Slow Papers
</a>
<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="/slides/paper/a_deeper_look_at_experience_replay.pdf">
Slides
</a>

### AI Safety Gridworlds

<p style="margin-top: -24px;">Leike et al. • November 2017</p>

 - **AI Safety Gridworlds** is a collection of gridworld environments that illustrate 8 AI safety problems, each equipped with a *performance function* $R^*$ hidden from the agent.
 - There are four **Specification** problems, where the reward function $R$ does not fully capture everything important, so the reward function and the performance function are different. ($R \neq R^*$).
    - **Safe interruptibility**: How can we design agents that neither seek nor avoid interruptions (for maintenance, update, or emergency)?
    - **Avoid side effects**: How can we get agents to minimize effects unrelated to their main objectives, especially those that are irreversible or difficult to reverse?
    - **Absent Supervisor**: How can we make sure an agent does not behave differently depending on the presence or absence of an observable supervisor?
    - **Reward gaming**: How can we build agents that do not try to introduce or exploit errors in the reward function?
 - A2C and Rainbow achieve low performance score in the specification environments, since they were not designed to handle such problems.
 - Although the specifications problems might seem unfair, these are typical ways misspecification can manifest itself, in which the agent is expected to follow the objective "in spirit" rather than "by letter.
 - A general approach to alleviate specification problems is *reward learning*, which includes techniques such as Inverse Reinforcement Learning (IRL), Imitation Learning, or learning from human feedback.
 - There are four **Robustness** problems, where the reward function and the performance function match ($R=R^*$), but the agent is challenged with problems that can degrade its performance.
    - **Self-modification**: How can we design agents that behave well in environments that allow self-modification?
    - **Distributional shift**: How do we ensure robust behavior when the test environment differs from the training environment?
    - **Robustness to adversaries**: How does the agent detect and adapt to friendly and adversarial intentions present in the environment?
    - **Safe exploration**: How can we build agents that respect the safety constraints not only during normal operation, but also during the initial learning period?
 - A2C and Rainbow do better in Robustness problem since robustness can be seen as a subgoal of the agent.

<div style="display: none;">
###  A Brief Survey of Deep Reinforcement Learning

<p style="margin-top: -24px;">Arulkumaran et al. • September 2017</p>

 - Deep Reinforcement Learning (DRL) uses deep learning (DL) to scale reinforcement learning (RL) to problems with high-dimensional state and action spaces.
 - The biggest sector of DRL is *value-based* methods, represented by Deep Q-Networks (DQN), which processed high-dimensional visual input with covolutional layers to extract spatiotemporal features and processed those features with fully connected layers.
    - DQNs addressed the instability of function approximation with *experience replay* and *target networks*.
    - DQNs have been improved in countless ways:
       - Fix overestimation bias of Q-learning (Double DQN)
       - Learn the entire value distribution instead of the expectation (Distributional DQN)
       - Decompose the action value $Q$ to state value $V$ and advantage value $A$ (Dueling DQN)
       - Use a convex advantage layer to allow continuous actions (NAF)
       - Learn action embeddings for large discrete action spaces (Sequential DQN)
 - An emerging sector of DRL is *policy-search* methods.
    - Gradient-free methods such as evolutionary methods are expensive, but can optimize arbitrary, non-differentiable models.
    - The more popular gradient-based methods are known as *policy gradient* methods.
       - Use sample returns to estimate return (REINFORCE)
       - Restrict optimization to "trust regions" using the *Kullback-Leibler (KL) divergence* for monotonic improvement (TRPO)
       - Better baselines to reduce variance (GAE)
       - Use only the first-gradient information unlike TRPO for better applicability at the expense of unconstrained optimisation (PPO)
    - Instead of using average of sample returns as a baseline, *actor-critic* methods approximate value function (critic) also.
       - Extend the stochastic policy gradient theorem to deterministic policies (DPG)
       - Use neural networks to operate on high-dimensional input using ideas from DQN (DDPG)
       - SVG
       - IPG
       - Use multiple agents in parallel environments to stabilize improvements and explore more (A3C)
       - Simplify A3C for one agent (A2C)
       - Add Retrace($\lambda$) bias correction to use experience replay (ACER)
 - There are also efforts in *model-based* methods.
</div>


### Asynchronous Methods for Deep Reinforcement Learning

<p style="margin-top: -24px;">Mnih et al. • February 2016</p>

 - Experience Replay has been used to reduce non-stationarity and decorrelate updates, but it requires off-policy reinforcement learning methods.
 - Instead of Experience Replay, we asynchronously execute multiple agents in parallel on multiple instances of the environment. These agents use different exploration strategies (for example, different $\epsilon$ values for $\epsilon$-greedy methods) in different threads, making online updates less likely to be correlated.
 - The asynchronous framework also speeds up training roughly linear in the number of parallel actor-learners and allow for on-policy reinforcement learning methods.
 - The asynchronous framework is tested in four learning algorithms: Asynchronous one-step Q-learning, Asynchronous one-step Sarsa, Asynchronous n-step Q-learning, and **Asynchronous Advantage Actor Critic (A3C)**.
 - To remove communication costs, the asynchronous actor-learners exists on different CPU threads of a single multithreaded machine.
 - A3C shows state-of-the-art results in *Atari 2600* games with half the training time of DQN, only using a CPU.
 - Other general improvements such as Eligibility traces, Generalized Advantage Estimator (GAE), Double Q-Learning, or Dueling networks can be incorporated to A3C for immediate improvements.

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

### Policy Gradient Methods for Reinforcement Learning with Function Approximation

<p style="margin-top: -24px;">R. Sutton et al. • 2000</p>

 - Unlike value-based methods **Policy Gradient methods**, where the stochastic policy is directly parametrized, have better convergence properties.
 - By the **Policy Gradient Theorem**, the gradient of the performance measure $\nabla_\theta \rho$ is not dependent on the gradient of the on-policy state distribution $\nabla_\theta d^{\pi}(s)$, allowing the gradient $\nabla_\theta \rho$ to be estimated via samples.
 
$$
\frac{\partial \rho}{\partial \theta} = \sum_s d^{\pi}(s) \sum_a \frac{\partial \pi(s, a)}{\partial \theta}Q^\pi(s, a)
$$
 
 - The $Q^\pi(s, a)$ in the policy gradient theorem can also be approximated with some function approximator $f_w$, and is guaranteed to be an unbiased estimate if it is **compatible**:
 
$$
\frac{\partial f_w(s, a)}{\partial w} = \frac{\partial \pi(s, a)}{\partial \theta} \frac{1}{\pi(s, a)}
$$
 
 - A function-approximated policy $\pi$ with a compatible function approximator $f_w$ can converge to a locally optima via policy iteration with an appropriate step size if the $\frac{\partial^2 \pi(s, a)}{\partial \theta_i \partial \theta_j}$ is bounded, the reward is bounded.
