---
layout: post
title: "PyTorch Implementations of Policy Gradient Methods"
author: Seungjae Ryan Lee
permalink: /blog/pytorch-pg-implementations/
tags:
 - reinforcement-learning
 - policy-gradient
 - pytorch

front_image: /assets/blog/pytorch-pg-implementations/front.png
front_image_type: cover
front_text: >
   A well-written baseline is crucial to research. We compare and recommend
   popular open source implementations of reinforcement learning algorithms in
   PyTorch.
---

<style type="text/css">
   h3 {
      margin-bottom: 0 !important;
   }
   h3 + p {
      color: darkgray !important;
   }
   h3, h3 + p {
      display: inline-block !important;
   }
</style>

The key to fast iterations of research experiments are well-written baseline algorithms. Unfortunately, most big research companies write their code in TensorFlow, ([openai/baselines](https://github.com/openai/baselines), [openai/spinningup](https://github.com/openai/spinningup), [deepmind/trfl](https://github.com/deepmind/trfl), [google/dopamine](https://github.com/google/dopamine)) so the PyTorch implementations are less well known. To help PyTorch deep RL researchers, we compare and recommend open source implementations of policy gradient algorithms in PyTorch.

Note that due to the big difference between PyTorch 0.3 and 0.4, we only include repositories with PyTorch versions 0.4 or above.



## Policy Gradient Methods

### A3C

Asynchronous Advantage Actor Critic

[[arXiv Paper]](https://arxiv.org/abs/1602.01783)

|                       | [**pytorch-a3c**](https://github.com/ikostrikov/pytorch-a3c) |
| --------------------- | :----------------------------------------------------------: |
| **Author**            |         [ikostrikov](https://github.com/ikostrikov)          |
| **Version**           | [0.4.1](https://github.com/ikostrikov/pytorch-a3c/commit/8826e21ddf9ffa1afed24f7d6eccfdcc0e7d9dd2) |
| **Pretrained Models** |                              ✘                               |
| **Stars**             |                             519                              |

### A2C

Advantage Actor Critic

|                       | [**pytorch-a2c-ppo-acktr**](https://github.com/ikostrikov/pytorch-a2c-ppo-acktr) | [**RL-Adventure-2**](https://github.com/higgsfield/RL-Adventure-2) |   [**vel**](https://github.com/MillionIntegrals/vel)    |
| --------------------- | :----------------------------------------------------------: | :----------------------------------------------------------: | :-----------------------------------------------------: |
| **Author**            |         [ikostrikov](https://github.com/ikostrikov)          |         [higgsfield](https://github.com/higgsfield/)         | [MillionIntegrals](https://github.com/MillionIntegrals) |
| **Version**           | [0.4](https://github.com/ikostrikov/pytorch-a2c-ppo-acktr/commit/e7f739f3ad1a377bfbcd0b92c55c2b9d947764fc) |                             0.4                              |                          0.4.1                          |
| **Pretrained Models** |                              ✔                               |                              ✘                               |                            ✘                            |
| **Stars**             |                             1077                             |                             1521                             |                           194                           |

### ACER

Actor Critic with Experience Replay

[[arXiv Paper]](https://arxiv.org/abs/1611.01224)

|                       |         [**ACER**](https://github.com/Kaixhin/ACER)          | [**RL-Adventure-2**](https://github.com/higgsfield/RL-Adventure-2) |   [**vel**](https://github.com/MillionIntegrals/vel)    |
| --------------------- | :----------------------------------------------------------: | :----------------------------------------------------------: | :-----------------------------------------------------: |
| **Author**            |            [Kaixhin](https://github.com/Kaixhin)             |         [higgsfield](https://github.com/higgsfield/)         | [MillionIntegrals](https://github.com/MillionIntegrals) |
| **Version**           | [0.4](https://github.com/Kaixhin/ACER/commit/5b7ca5d75bf16629ddaf68ecab4ab6c7dcccf56c) |                             0.4                              |                          0.4.1                          |
| **Pretrained Models** |                              ✘                               |                              ✘                               |                            ✘                            |
| **Stars**             |                             138                              |                             1521                             |                           194                           |

### ACKTR

Actor Critic using Kronecker-Factored Trust Region

[[arXiv Paper]](https://arxiv.org/abs/1708.05144)

|                       | [**pytorch-a2c-ppo-acktr**](https://github.com/ikostrikov/pytorch-a2c-ppo-acktr) |
| --------------------- | :----------------------------------------------------------: |
| **Author**            |         [ikostrikov](https://github.com/ikostrikov)          |
| **Version**           | [0.4](https://github.com/ikostrikov/pytorch-a2c-ppo-acktr/commit/e7f739f3ad1a377bfbcd0b92c55c2b9d947764fc) |
| **Pretrained Models** |                              ✔                               |
| **Stars**             |                             1077                             |

### TRPO

Trust Region Policy Optimization

[[arXiv Paper]](https://arxiv.org/abs/1502.05477)

|                       | [**pytorch-trpo**](https://github.com/ikostrikov/pytorch-trpo) |   [**vel**](https://github.com/MillionIntegrals/vel)    |
| --------------------- | :----------------------------------------------------------: | :-----------------------------------------------------: |
| **Author**            |         [ikostrikov](https://github.com/ikostrikov)          | [MillionIntegrals](https://github.com/MillionIntegrals) |
| **Version**           | [0.4](https://github.com/ikostrikov/pytorch-trpo/commit/e200eb8a23b3c7941a0091efb9750dafa4b23cbb) |                          0.4.1                          |
| **Pretrained Models** |                              ✘                               |                            ✘                            |
| **Stars**             |                             170                              |                           194                           |

### PPO

Proximal Policy Optimization

[[arXiv Paper]](https://arxiv.org/abs/1707.06347)

|                       | [**pytorch-a2c-ppo-acktr**](https://github.com/ikostrikov/pytorch-a2c-ppo-acktr) | [**RL-Adventure-2**](https://github.com/higgsfield/RL-Adventure-2) |   [**vel**](https://github.com/MillionIntegrals/vel)    |
| --------------------- | :----------------------------------------------------------: | :----------------------------------------------------------: | :-----------------------------------------------------: |
| **Author**            |         [ikostrikov](https://github.com/ikostrikov)          |         [higgsfield](https://github.com/higgsfield/)         | [MillionIntegrals](https://github.com/MillionIntegrals) |
| **Version**           | [0.4](https://github.com/ikostrikov/pytorch-a2c-ppo-acktr/commit/e7f739f3ad1a377bfbcd0b92c55c2b9d947764fc) |                             0.4                              |                          0.4.1                          |
| **Pretrained Models** |                              ✔                               |                              ✘                               |                            ✘                            |
| **Stars**             |                             1077                             |                             1521                             |                           194                           |

### SAC

Soft Actor-Critic

[[arXiv Paper]](https://arxiv.org/abs/1801.01290)

|                       | [**rlkit**](https://github.com/vitchyr/rlkit) | [**RL-Adventure-2**](https://github.com/higgsfield/RL-Adventure-2) |
| --------------------- | :-------------------------------------------: | :----------------------------------------------------------: |
| **Author**            |     [vitchyr](https://github.com/vitchyr)     |         [higgsfield](https://github.com/higgsfield/)         |
| **Version**           |                      0.4                      |                             0.4                              |
| **Pretrained Models** |                       ✘                       |                              ✘                               |
| **Stars**             |                      491                      |                             1521                             |

### Twin SAC

Combination of SAC and TD3

|                       | [**rlkit**](https://github.com/vitchyr/rlkit) |
| --------------------- | :-------------------------------------------: |
| **Author**            |     [vitchyr](https://github.com/vitchyr)     |
| **Version**           |                      0.4                      |
| **Pretrained Models** |                       ✘                       |
| **Stars**             |                      491                      |

### Recommendation

<p></p>

Although [vitchyr/rlkit](https://github.com/vitchyr/rlkit) has SAC and Twin SAC, which are state-of-the-art methods in robotic control, it unfortunately does not include PPO, the standard baseline policy gradient algorithm. We found [ikostrikov/pytorch-a2c-ppo-acktr](https://github.com/ikostrikov/pytorch-a2c-ppo-acktr) to be the best implementation of PPO, allowing us to run code almost immediately after cloning the repository. We gave bonus points to this repository because it also included some pretrained models.

**Verdict: [ikostrikov/pytorch-a2c-ppo-acktr](https://github.com/ikostrikov/pytorch-a2c-ppo-acktr)**



## Deterministic Policy Gradient Methods

### DDPG

Deep Deterministic Policy Gradient

[[arXiv Paper]](https://arxiv.org/abs/1509.02971)

|                       | [**rlkit**](https://github.com/vitchyr/rlkit) | [**pytorch-ddpg-naf**](https://github.com/ikostrikov/pytorch-ddpg-naf) | [**RL-Adventure-2**](https://github.com/higgsfield/RL-Adventure-2) |   [**vel**](https://github.com/MillionIntegrals/vel)    |
| --------------------- | :-------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-----------------------------------------------------: |
| **Author**            |     [vitchyr](https://github.com/vitchyr)     |         [ikostrikov](https://github.com/ikostrikov)          |         [higgsfield](https://github.com/higgsfield/)         | [MillionIntegrals](https://github.com/MillionIntegrals) |
| **Version**           |                      0.4                      | [0.4](https://github.com/ikostrikov/pytorch-ddpg-naf/commit/6215d4c6472075a437c432d1c1d894aa19797c17) |                             0.4                              |                          0.4.1                          |
| **Pretrained Models** |                       ✘                       |                              ✘                               |                              ✘                               |                            ✘                            |
| **Stars**             |                      491                      |                             136                              |                             1521                             |                           194                           |

### TD3

Twin-Delayed Deep Deterministic Policy Gradient

[[arXiv Paper]](https://arxiv.org/abs/1802.09477)

|                       | [**rlkit**](https://github.com/vitchyr/rlkit) | [**RL-Adventure-2**](https://github.com/higgsfield/RL-Adventure-2) |
| --------------------- | :-------------------------------------------: | :----------------------------------------------------------: |
| **Author**            |     [vitchyr](https://github.com/vitchyr)     |         [higgsfield](https://github.com/higgsfield/)         |
| **Version**           |                      0.4                      |                             0.4                              |
| **Pretrained Models** |                       ✘                       |                              ✘                               |
| **Stars**             |                      491                      |                             1521                             |

### HER+TD3

Hindsight Experience Replay + Twin-Delayed Deep Deterministic Policy Gradient

[[arXiv Paper]](https://arxiv.org/abs/1707.01495)

|                       | [**rlkit**](https://github.com/vitchyr/rlkit) |
| --------------------- | :-------------------------------------------: |
| **Author**            |     [vitchyr](https://github.com/vitchyr)     |
| **Version**           |                      0.4                      |
| **Pretrained Models** |                       ✘                       |
| **Stars**             |                      491                      |

### Recommendation

<p></p>

For Deterministic Policy Gradient methods, [vitchyr/rlkit](https://github.com/vitchyr/rlkit) and [higgsfield/RL-Adventure-2](https://github.com/higgsfield/RL-Adventure-2) were the only repositories with both DDPG and TD3 implemented. We found [higgsfield/RL-Adventure-2](https://github.com/higgsfield/RL-Adventure-2) to be more suitable for understanding the algorithm than running it, so we recommend using [vitchyr/rlkit](https://github.com/vitchyr/rlkit) as your baseline.

**Verdict: [vitchyr/rlkit](https://github.com/vitchyr/rlkit)**



## Checked Repositories

- [vitchyr/rlkit](https://github.com/vitchyr/rlkit)
- [ikostrikov/pytorch-a3c](https://github.com/ikostrikov/pytorch-a3c)
- [ikostrikov/pytorch-trpo](https://github.com/ikostrikov/pytorch-trpo)
- [ikostrikov/pytorch-a2c-ppo-acktr](https://github.com/ikostrikov/pytorch-a2c-ppo-acktr)
- [ikostrikov/pytorch-ddpg-naf](https://github.com/ikostrikov/pytorch-ddpg-naf)
- [Kaixhin/ACER](https://github.com/Kaixhin/ACER)
- [higgsfield/RL-Adventure-2](https://github.com/higgsfield/RL-Adventure-2)
- [MillionIntegrals/vel](https://github.com/MillionIntegrals/vel)



---



If you believe we missed a great PyTorch RL repository, please tell us in the comment section!

