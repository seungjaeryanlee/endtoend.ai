---
layout: post
title: "Obstacle Tower 1: Installing the Environment"
author: Seungjae Ryan Lee
permalink: /obstacle-tower/1
tags:
 - reinforcement-learning
 - obstacle-tower
 - competition

front_image: /assets/blog/obstacle-tower/1/front.jpg
meta_image: /assets/blog/obstacle-tower/1/front.jpg
front_image_type: cover
front_text: >
   Unity introduced the Obstacle Tower Challenge, a new reinforcement learning contest with a difficult environment. In this post, we guide the readers on installing the environment on Linux using conda.
excerpt: >
   Unity introduced the Obstacle Tower Challenge, a new reinforcement learning contest with a difficult environment. In this post, we guide the readers on installing the environment on Linux using conda.

nav:
- name: "Setup Conda Environment"
  permalink: '#setup-conda-environment'
- name: Install ML-Agents
  permalink: '#install-ml-agents-v060'
- name: Install Obstacle Tower
  permalink: '#install-obstacle-tower-environment'
- name: Download the Environment
  permalink: '#download-the-environment'
- name: Test Installation
  permalink: '#test-installation-on-jupyter-notebook'
- name: What's Next?
  permalink: '#whats-next'
---

[Unity announced the launch of Obstacle Tower Challenge](https://blogs.unity3d.com/2019/01/28/obstacle-tower-challenge-test-the-limits-of-intelligence-systems/) today. The challenge tests "the vision, control, planning, and generalization abilities of AI agents." Although the competition begins on February 11th, and details have not yet been revealed, the environment has. This post shows how to install the Obstacle Challenge Environment on Linux machines.

<div class="w80" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/obstacle-tower/1/banner.jpg" alt="Obstacle Tower Challenge banner">
</div>

## Setup Conda Environment

First, create a new conda environment. Note that **we need Python 3.6** since ML-Agents currently only supports that version.

```
conda create -n tower python=3.6
source activate tower
```

Check you are using the environment's `pip`.

```
which pip
```

If the output is of format `/home/[USER]/anaconda3/envs/tower/bin/pip`, the environment is set up correctly!


## Install ML-Agents v0.6.0

<div class="w50" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/obstacle-tower/1/ml_agents.jpg" alt="Unity ML Agents">
</div>

First, clone the ML-Agents repository.

```
git clone https://github.com/Unity-Technologies/ml-agents.git
cd ml-agents/
```

Navigate to `ml-agents/` directory and install the package using `setup.py`.

```
pip install -e .
```

Note that since we are installing this in a brand new conda environment, you will install a lot of packages as dependencies. These are package that were installed in my environment:

{:.wrap}
```
Successfully installed MarkupSafe-1.1.0 Pillow-5.4.1 Send2Trash-1.5.0 absl-py-0.7.0 astor-0.7.1 atomicwrites-1.2.1 attrs-18.2.0 backcall-0.1.0 bleach-1.5.0 cycler-0.10.0 decorator-4.3.2 defusedxml-0.5.0 docopt-0.6.2 entrypoints-0.3 gast-0.2.2 grpcio-1.11.1 html5lib-0.9999999 ipykernel-5.1.0 ipython-7.2.0 ipython-genutils-0.2.0 ipywidgets-7.4.2 jedi-0.13.2 jinja2-2.10 jsonschema-2.6.0 jupyter-1.0.0 jupyter-client-5.2.4 jupyter-console-6.0.0 jupyter-core-4.4.0 kiwisolver-1.0.1 markdown-3.0.1 matplotlib-3.0.2 mistune-0.8.4 mlagents more-itertools-5.0.0 nbconvert-5.4.0 nbformat-4.4.0 notebook-5.7.4 numpy-1.14.5 pandocfilters-1.4.2 parso-0.3.2 pexpect-4.6.0 pickleshare-0.7.5 pluggy-0.8.1 prometheus-client-0.5.0 prompt-toolkit-2.0.8 protobuf-3.6.1 ptyprocess-0.6.0 py-1.7.0 pygments-2.3.1 pyparsing-2.3.1 pytest-3.10.1 python-dateutil-2.7.5 pyyaml-3.13 pyzmq-17.1.2 qtconsole-4.4.3 six-1.12.0 tensorboard-1.7.0 tensorflow-1.7.1 termcolor-1.1.0 terminado-0.8.1 testpath-0.4.2 tornado-5.1.1 traitlets-4.3.2 wcwidth-0.1.7 werkzeug-0.14.1 widgetsnbextension-3.4.2
```

For additional details, [check the official installation guide](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Installation.md).

## Install Obstacle Tower Environment

Similarly, clone the ML-Agents repository.

```
git clone https://github.com/Unity-Technologies/obstacle-tower-env.git
cd obstacle-tower-env/
```

Again, install the package using `setup.py`.

```
pip install -e .
```

The last line of the installation should look something like this:

{:.wrap}
```
Successfully installed Pillow-5.2.0 chardet-3.0.4 future-0.17.1 gym-0.10.9 gym-unity-0.1.1 idna-2.8 obstacle-tower-env pyglet-1.3.2 requests-2.21.0 scipy-1.2.0 urllib3-1.24.1
```

For additional details, [check the official installation guide](https://github.com/Unity-Technologies/obstacle-tower-env#installation).

## Download the Environment

| *Platform*     | *Download Link*                                                                     |
| --- | --- |
| Linux (x86_64) | [https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_linux.zip](https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_linux.zip)   |
| Mac OS X       | [https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_osx.zip](https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_osx.zip)     |
| Windows        | [https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_windows.zip](https://storage.googleapis.com/obstacle-tower-build/v1/obstacletower_v1_windows.zip) |

Create a new directory called `examples/ObstacleTower/`, download and unzip the content of `obstacletower_v1_linux.zip` there. The directory `examples/ObstacleTower` should now contain the `obstacletower_Data/` directory and `obstacletower` executable file.

**Rename `obstacletower` to `obstacletower.x86_64`. The reason for this is documented [here](https://github.com/Unity-Technologies/obstacle-tower-env/issues/14).**

## Test Installation on Jupyter Notebook

Unity provides a simple Jupyter notebook in `examples/basic_usage.ipynb`, which is useful for verifying correct installation. To use this notebook, let's install a few packages.

```
conda install jupyter notebook ipykernel
```

Navigate and open `examples/basic_usage.ipynb`, and you should be able to reproduce the notebook output!

## What's Next?

There are still two months before the Obstacle Tower Challenge, but that does not mean there is nothing to do! In our next post, we will take a look at the environment to understand what the agent is expected to do. Unity also released [a paper about the environment](https://storage.googleapis.com/obstacle-tower-build/Obstacle_Tower_Paper_Final.pdf), which is definitely worth a read. We will take a close look at the paper to understand the environment better.

Afterwards, we will survey state of the art papers and open source code on reinforcement learning. We expect papers from various subfields of reinforcement learning, especially curiosity and model-based reinforcement learning.
