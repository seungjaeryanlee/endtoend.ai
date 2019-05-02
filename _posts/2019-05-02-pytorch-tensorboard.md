---
layout: post
title: "Using TensorBoard with PyTorch 1.1.0"
author: Seungjae Ryan Lee
permalink: /pytorch-tensorboard
tags:
 - pytorch

nav:
- name: "Simple Install"
  permalink: "#simple-install"
- name: "Detailed Install"
  permalink: "#detailed-install"
- name: "Running TensorBoard"
  permalink: "#running-tensorboard"

image: /assets/blog/pytorch-tensorboard/success_small.png
image_type: contain
excerpt: "With PyTorch 1.1.0, tensorboard is now natively supported in PyTorch. This post contains detailed instuctions to install tensorboard."
---


With [PyTorch 1.1.0](https://github.com/pytorch/pytorch/releases/tag/v1.1.0), TensorBoard is now natively supported in PyTorch. TensorBoard is a visualization library for TensorFlow that is useful in understanding training runs, tensors, and graphs. There have been 3rd-party ports such as [tensorboardX](https://github.com/lanpa/tensorboardX) but no official support until now.

## Simple Install

The following three install commands will install PyTorch 1.1.0 with Tensorboard 1.14.

```bash
pip install --upgrade torch
pip install tb-nightly
pip install future
```

With that, you should now be able to import `torch.utils.tensorboard` without an error.

```
Python 3.7.3 | packaged by conda-forge | (default, Mar 27 2019, 23:01:00) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from torch.utils.tensorboard import SummaryWriter
>>>
```

If you encounter problem, read the section below. If no errors occur, skip the section below and go to [**Running Tensorboard**](#running-tensorboard).

## Detailed Install

First, install `torch` . If you already have them installed, ensure that your `torch` package has version 1.1.0 or above.

```bash
pip install --upgrade torch
```

{::options parse_block_html="true" /}

<details><summary markdown="span">Output</summary>
```
Collecting torch
  Downloading https://files.pythonhosted.org/packages/ac/23/a4b5c189dd624411ec84613b717594a00480282b949e3448d189c4aa4e47/torch-1.1.0-cp37-cp37m-manylinux1_x86_64.whl (676.9MB)
     |████████████████████████████████| 676.9MB 18kB/s 
Collecting numpy (from torch)
  Downloading https://files.pythonhosted.org/packages/bb/76/24e9f32c78e6f6fb26cf2596b428f393bf015b63459468119f282f70a7fd/numpy-1.16.3-cp37-cp37m-manylinux1_x86_64.whl (17.3MB)
     |████████████████████████████████| 17.3MB 1.2MB/s 
Installing collected packages: numpy, torch
Successfully installed numpy-1.16.3 torch-1.1.0
```
</details>
<br/>

{::options parse_block_html="false" /}


When you try to import `torch.utils.tensorboard`, you will get the following error:

```
Python 3.7.3 | packaged by conda-forge | (default, Mar 27 2019, 23:01:00) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from torch.utils.tensorboard import SummaryWriter
Traceback (most recent call last):
  File "/home/ryanlee/anaconda3/envs/dqnbook/lib/python3.7/site-packages/torch/utils/tensorboard/__init__.py", line 2, in <module>
    from tensorboard.summary.writer.record_writer import RecordWriter  # noqa F401
ModuleNotFoundError: No module named 'tensorboard'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/home/ryanlee/anaconda3/envs/dqnbook/lib/python3.7/site-packages/torch/utils/tensorboard/__init__.py", line 4, in <module>
    raise ImportError('TensorBoard logging requires TensorBoard with Python summary writer installed. '
ImportError: TensorBoard logging requires TensorBoard with Python summary writer installed. This should be available in 1.14 or above.
```

The stable release of `tensorboard` only offers 1.13, so we need to install `tb-nightly`.

```bash
pip install tb-nightly
```

{::options parse_block_html="true" /}

<details><summary markdown="span">Output</summary>
```
Collecting tb-nightly
  Downloading https://files.pythonhosted.org/packages/04/e8/4916104a15bc768a18bda13d18e15d500c01fd1f2fef09920f2e5ff27537/tb_nightly-1.14.0a20190501-py3-none-any.whl (3.1MB)
     |████████████████████████████████| 3.1MB 884kB/s 
Requirement already satisfied: numpy>=1.12.0 in /home/ryanlee/anaconda3/envs/dqnbook/lib/python3.7/site-packages (from tb-nightly) (1.16.3)
Collecting six (from tb-nightly)
  Using cached https://files.pythonhosted.org/packages/73/fb/00a976f728d0d1fecfe898238ce23f502a721c0ac0ecfedb80e0d88c64e9/six-1.12.0-py2.py3-none-any.whl
Requirement already satisfied: wheel>=0.26; python_version >= "3" in /home/ryanlee/anaconda3/envs/dqnbook/lib/python3.7/site-packages (from tb-nightly) (0.33.1)
Collecting absl-py>=0.4 (from tb-nightly)
  Downloading https://files.pythonhosted.org/packages/da/3f/9b0355080b81b15ba6a9ffcf1f5ea39e307a2778b2f2dc8694724e8abd5b/absl-py-0.7.1.tar.gz (99kB)
     |████████████████████████████████| 102kB 4.5MB/s 
Collecting werkzeug>=0.11.15 (from tb-nightly)
  Downloading https://files.pythonhosted.org/packages/18/79/84f02539cc181cdbf5ff5a41b9f52cae870b6f632767e43ba6ac70132e92/Werkzeug-0.15.2-py2.py3-none-any.whl (328kB)
     |████████████████████████████████| 337kB 4.6MB/s 
Collecting protobuf>=3.6.0 (from tb-nightly)
  Downloading https://files.pythonhosted.org/packages/19/a5/ac51df34cdf4739574492ed4903c11dadd72a7bec4a31bb0496f4f50fc19/protobuf-3.7.1-cp37-cp37m-manylinux1_x86_64.whl (1.2MB)
     |████████████████████████████████| 1.2MB 6.0MB/s 
Collecting markdown>=2.6.8 (from tb-nightly)
  Downloading https://files.pythonhosted.org/packages/f5/e4/d8c18f2555add57ff21bf25af36d827145896a07607486cc79a2aea641af/Markdown-3.1-py2.py3-none-any.whl (87kB)
     |████████████████████████████████| 92kB 4.0MB/s 
Collecting grpcio>=1.6.3 (from tb-nightly)
  Downloading https://files.pythonhosted.org/packages/44/3c/0f680a3e2e7720dc1b37bf3163b1f62f0f847dc081a17f2a2f4389e86a38/grpcio-1.20.1-cp37-cp37m-manylinux1_x86_64.whl (2.1MB)
     |████████████████████████████████| 2.2MB 2.3MB/s 
Requirement already satisfied: setuptools in /home/ryanlee/anaconda3/envs/dqnbook/lib/python3.7/site-packages (from protobuf>=3.6.0->tb-nightly) (41.0.1)
Building wheels for collected packages: absl-py
  Building wheel for absl-py (setup.py) ... done
  Stored in directory: /home/ryanlee/.cache/pip/wheels/ee/98/38/46cbcc5a93cfea5492d19c38562691ddb23b940176c14f7b48
Successfully built absl-py
Installing collected packages: absl-py, werkzeug, protobuf, markdown, grpcio, tb-nightly
Successfully installed absl-py-0.7.1 grpcio-1.20.1 markdown-3.1 protobuf-3.7.1 tb-nightly-1.14.0a20190501 werkzeug-0.15.2
```
</details>
<br/>

{::options parse_block_html="false" /}

When you try to import `torch.utils.tensorboard`, you might get the following error:

```
Python 3.7.3 | packaged by conda-forge | (default, Mar 27 2019, 23:01:00) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from torch.utils.tensorboard import SummaryWriter
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/home/ryanlee/anaconda3/envs/dqnbook/lib/python3.7/site-packages/torch/utils/tensorboard/__init__.py", line 6, in <module>
    from .writer import FileWriter, SummaryWriter  # noqa F401
  File "/home/ryanlee/anaconda3/envs/dqnbook/lib/python3.7/site-packages/torch/utils/tensorboard/writer.py", line 18, in <module>
    from ._convert_np import make_np
  File "/home/ryanlee/anaconda3/envs/dqnbook/lib/python3.7/site-packages/torch/utils/tensorboard/_convert_np.py", line 12, in <module>
    from caffe2.python import workspace
  File "/home/ryanlee/anaconda3/envs/dqnbook/lib/python3.7/site-packages/caffe2/python/workspace.py", line 15, in <module>
    from past.builtins import basestring
ModuleNotFoundError: No module named 'past'
```

For this, we need to install the `future` package.

```
pip install future
```

{::options parse_block_html="true" /}

<details><summary markdown="span">Output</summary>
```
Collecting future
Installing collected packages: future
Successfully installed future-0.17.1
```
</details>
<br/>

{::options parse_block_html="false" /}

With that, you should now be able to import `torch.utils.tensorboard` without an error.

```
Python 3.7.3 | packaged by conda-forge | (default, Mar 27 2019, 23:01:00) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from torch.utils.tensorboard import SummaryWriter
>>>
```

## Running TensorBoard

Let's now try using TensorBoard with PyTorch! We will use the MNIST dataset, so let's install/upgrade `torchvision`.

```bash
pip install --upgrade torchvision
```

Next, copy and paste this code into `run.py`. This code is from the [official documentation](https://pytorch.org/docs/stable/tensorboard.html).

```python
import torch
import torchvision
from torch.utils.tensorboard import SummaryWriter
from torchvision import datasets, transforms

# Writer will output to ./runs/ directory by default
writer = SummaryWriter()

transform = transforms.Compose([transforms.ToTensor(), transforms.Normalize((0.5,), (0.5,))])
trainset = datasets.MNIST('mnist_train', train=True, download=True, transform=transform)
trainloader = torch.utils.data.DataLoader(trainset, batch_size=64, shuffle=True)
model = torchvision.models.resnet50(False)
# Have ResNet model take in grayscale rather than RGB
model.conv1 = torch.nn.Conv2d(1, 64, kernel_size=7, stride=2, padding=3, bias=False)
images, labels = next(iter(trainloader))

grid = torchvision.utils.make_grid(images)
writer.add_image('images', grid, 0)
writer.add_graph(model, images)
writer.close()
```

Then run the script with `python run.py`. Note that this will create two new directories: `mnist_train` and `runs`.

- `mnist_train` contains the MNIST dataset.
- `runs` contains the `tensorboard` runs.

The script should finish after writing the following output to the command line:

{::options parse_block_html="true" /}

<details><summary markdown="span">Output</summary>
```
Downloading http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz to mnist_train/MNIST/raw/train-images-idx3-ubyte.gz
100.1%Extracting mnist_train/MNIST/raw/train-images-idx3-ubyte.gz
Downloading http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz to mnist_train/MNIST/raw/train-labels-idx1-ubyte.gz
113.5%Extracting mnist_train/MNIST/raw/train-labels-idx1-ubyte.gz
Downloading http://yann.lecun.com/exdb/mnist/t10k-images-idx3-ubyte.gz to mnist_train/MNIST/raw/t10k-images-idx3-ubyte.gz
100.4%Extracting mnist_train/MNIST/raw/t10k-images-idx3-ubyte.gz
Downloading http://yann.lecun.com/exdb/mnist/t10k-labels-idx1-ubyte.gz to mnist_train/MNIST/raw/t10k-labels-idx1-ubyte.gz
180.4%Extracting mnist_train/MNIST/raw/t10k-labels-idx1-ubyte.gz
Processing...
Done!
```
</details>
<br/>

{::options parse_block_html="false" /}

We can now run `tensorboard`. We need to specify where the runs are stored with `--logdir` flag.

```bash
tensorboard --logdir=runs
```

{::options parse_block_html="true" /}

<details><summary markdown="span">Output</summary>
```bash
TensorFlow installation not found - running with reduced feature set.
TensorBoard 1.14.0a20190501 at http://ryanlee-ThinkPad-T430s:6006/ (Press CTRL+C to quit)
```
</details>
<br/>

{::options parse_block_html="false" /}

Visit `http://localhost:6006/` with the browser of your choice and voilà! TensorBoard should appear with MNIST images.

![Successful Tensorboard](/assets/blog/pytorch-tensorboard/success_small.png)

For a full set of documentation, check the [TensorBoard page in the PyTorch Official Documentation](https://pytorch.org/docs/stable/tensorboard.html)!
 