---
layout: post
title: "Using TensorBoard with PyTorch 1.1 or 1.2"
author: Seungjae Ryan Lee
permalink: /blog/pytorch-tensorboard/
redirect_from :
 - pytorch-tensorboard/
tags:
 - pytorch

nav:
- name: "Simple Install"
  permalink: "#simple-install"
- name: "Detailed Install"
  permalink: "#detailed-install"
- name: "Running TensorBoard"
  permalink: "#running-tensorboard"

image: /assets/blog/misc/pytorch-tensorboard/success_small.png
image_type: contain
excerpt: "Since PyTorch 1.1, tensorboard is now natively supported in PyTorch. This post contains detailed instuctions to install tensorboard."
---

**EDIT (2019/08/10): The post has been updated for PyTorch 1.2! In PyTorch 1.2, TensorBoard is no longer experimental.**

In [PyTorch 1.1.0](https://github.com/pytorch/pytorch/releases/tag/v1.1.0), TensorBoard was experimentally supported in PyTorch, and with [PyTorch 1.2.0](https://github.com/pytorch/pytorch/releases/tag/v1.2.0), it is no longer experimental. TensorBoard is a visualization library for TensorFlow that is useful in understanding training runs, tensors, and graphs. There have been 3rd-party ports such as [tensorboardX](https://github.com/lanpa/tensorboardX) but no official support until now.

## Simple Install

The following two install commands will install PyTorch 1.2+ with Tensorboard 1.14+.

```bash
pip install --upgrade torch
pip install tensorboard
```

With that, you should now be able to import `torch.utils.tensorboard` without an error.

```
Python 3.7.4 (default, Aug 13 2019, 20:35:49) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from torch.utils.tensorboard import SummaryWriter
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:541: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_qint8 = np.dtype([("qint8", np.int8, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:542: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_quint8 = np.dtype([("quint8", np.uint8, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:543: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_qint16 = np.dtype([("qint16", np.int16, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:544: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_quint16 = np.dtype([("quint16", np.uint16, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:545: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_qint32 = np.dtype([("qint32", np.int32, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:550: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  np_resource = np.dtype([("resource", np.ubyte, 1)])
>>> 
```

[(Don't worry about the FutureWarning: it will be fixed in the next release!)](https://github.com/tensorflow/tensorflow/pull/30559)

If you encounter problem, read the section below. If no errors occur, skip the section below and go to [**Running Tensorboard**](#running-tensorboard).

## Detailed Install

First, install `torch` . If you already have them installed, ensure that your `torch` package has version 1.2.0 or above.

```bash
pip install --upgrade torch
```

{::options parse_block_html="true" /}

<details><summary markdown="span">Output</summary>
```
Collecting torch
  Downloading https://files.pythonhosted.org/packages/05/65/5248be50c55ab7429dd5c11f5e2f9f5865606b80e854ca63139ad1a584f2/torch-1.2.0-cp37-cp37m-manylinux1_x86_64.whl (748.9MB)
     |████████████████████████████████| 748.9MB 14kB/s 
Collecting numpy (from torch)
  Downloading https://files.pythonhosted.org/packages/05/4b/55cfbfd3e5e85016eeef9f21c0ec809d978706a0d60b62cc28aeec8c792f/numpy-1.17.0-cp37-cp37m-manylinux1_x86_64.whl (20.3MB)
     |████████████████████████████████| 20.3MB 738kB/s 
Installing collected packages: numpy, torch
Successfully installed numpy-1.17.0 torch-1.2.0
```
</details>
<br/>

{::options parse_block_html="false" /}


When you try to import `torch.utils.tensorboard`, you will get the following error:

```
Python 3.7.4 (default, Aug 13 2019, 20:35:49) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from torch.utils.tensorboard import SummaryWriter
Traceback (most recent call last):
  File "/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/torch/utils/tensorboard/__init__.py", line 2, in <module>
    from tensorboard.summary.writer.record_writer import RecordWriter  # noqa F401
ModuleNotFoundError: No module named 'tensorboard'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/torch/utils/tensorboard/__init__.py", line 4, in <module>
    raise ImportError('TensorBoard logging requires TensorBoard with Python summary writer installed. '
ImportError: TensorBoard logging requires TensorBoard with Python summary writer installed. This should be available in 1.14 or above.
```

The stable release of `tensorboard` is currently 1.14, so we can just install/upgrade this package.

```bash
pip install --upgrade tensorboard
```

{::options parse_block_html="true" /}

<details><summary markdown="span">Output</summary>
```
Collecting tensorboard
  Downloading https://files.pythonhosted.org/packages/91/2d/2ed263449a078cd9c8a9ba50ebd50123adf1f8cfbea1492f9084169b89d9/tensorboard-1.14.0-py3-none-any.whl (3.1MB)
     |████████████████████████████████| 3.2MB 36.0MB/s 
Collecting absl-py>=0.4 (from tensorboard)
  Downloading https://files.pythonhosted.org/packages/da/3f/9b0355080b81b15ba6a9ffcf1f5ea39e307a2778b2f2dc8694724e8abd5b/absl-py-0.7.1.tar.gz (99kB)
     |████████████████████████████████| 102kB 29.5MB/s 
Collecting werkzeug>=0.11.15 (from tensorboard)
  Downloading https://files.pythonhosted.org/packages/d1/ab/d3bed6b92042622d24decc7aadc8877badf18aeca1571045840ad4956d3f/Werkzeug-0.15.5-py2.py3-none-any.whl (328kB)
     |████████████████████████████████| 337kB 42.7MB/s 
Collecting six>=1.10.0 (from tensorboard)
  Downloading https://files.pythonhosted.org/packages/73/fb/00a976f728d0d1fecfe898238ce23f502a721c0ac0ecfedb80e0d88c64e9/six-1.12.0-py2.py3-none-any.whl
Collecting grpcio>=1.6.3 (from tensorboard)
  Downloading https://files.pythonhosted.org/packages/e5/27/1f908ebb99c8d48a5ba4eb9d7997f5633b920d98fe712f67aaa0663f1307/grpcio-1.23.0-cp37-cp37m-manylinux1_x86_64.whl (2.2MB)
     |████████████████████████████████| 2.2MB 39.8MB/s 
Requirement already satisfied, skipping upgrade: setuptools>=41.0.0 in ./.conda/envs/torchtest/lib/python3.7/site-packages (from tensorboard) (41.0.1)
Requirement already satisfied, skipping upgrade: numpy>=1.12.0 in ./.conda/envs/torchtest/lib/python3.7/site-packages (from tensorboard) (1.17.0)
Requirement already satisfied, skipping upgrade: wheel>=0.26; python_version >= "3" in ./.conda/envs/torchtest/lib/python3.7/site-packages (from tensorboard) (0.33.4)
Collecting markdown>=2.6.8 (from tensorboard)
  Downloading https://files.pythonhosted.org/packages/c0/4e/fd492e91abdc2d2fcb70ef453064d980688762079397f779758e055f6575/Markdown-3.1.1-py2.py3-none-any.whl (87kB)
     |████████████████████████████████| 92kB 30.9MB/s 
Collecting protobuf>=3.6.0 (from tensorboard)
  Downloading https://files.pythonhosted.org/packages/30/fd/60ce148d8e4205bdf6da4ffec31348fd33f710c20a882b44319d54fd51ae/protobuf-3.9.1-cp37-cp37m-manylinux1_x86_64.whl (1.2MB)
     |████████████████████████████████| 1.2MB 53.5MB/s 
Building wheels for collected packages: absl-py
  Building wheel for absl-py (setup.py) ... done
  Created wheel for absl-py: filename=absl_py-0.7.1-cp37-none-any.whl size=117846 sha256=ca0458d1ff8484a989749c4346f298c9cbcfb343dddfa7004d896469d7308036
  Stored in directory: /home/seungjaeryanlee/.cache/pip/wheels/ee/98/38/46cbcc5a93cfea5492d19c38562691ddb23b940176c14f7b48
Successfully built absl-py
Installing collected packages: six, absl-py, werkzeug, grpcio, markdown, protobuf, tensorboard
Successfully installed absl-py-0.7.1 grpcio-1.23.0 markdown-3.1.1 protobuf-3.9.1 six-1.12.0 tensorboard-1.14.0 werkzeug-0.15.5
```
</details>
<br/>

{::options parse_block_html="false" /}

When you try to import `torch.utils.tensorboard`, you might get the following error:

```
Python 3.7.4 (default, Aug 13 2019, 20:35:49) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from torch.utils.tensorboard import SummaryWriter
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:541: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_qint8 = np.dtype([("qint8", np.int8, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:542: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_quint8 = np.dtype([("quint8", np.uint8, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:543: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_qint16 = np.dtype([("qint16", np.int16, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:544: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_quint16 = np.dtype([("quint16", np.uint16, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:545: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_qint32 = np.dtype([("qint32", np.int32, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:550: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  np_resource = np.dtype([("resource", np.ubyte, 1)])
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/torch/utils/tensorboard/__init__.py", line 6, in <module>
    from .writer import FileWriter, SummaryWriter  # noqa F401
  File "/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/torch/utils/tensorboard/writer.py", line 18, in <module>
    from ._convert_np import make_np
  File "/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/torch/utils/tensorboard/_convert_np.py", line 12, in <module>
    from caffe2.python import workspace
  File "/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/caffe2/python/workspace.py", line 15, in <module>
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
  Downloading https://files.pythonhosted.org/packages/90/52/e20466b85000a181e1e144fd8305caf2cf475e2f9674e797b222f8105f5f/future-0.17.1.tar.gz (829kB)
     |████████████████████████████████| 829kB 36.3MB/s 
Building wheels for collected packages: future
  Building wheel for future (setup.py) ... done
  Created wheel for future: filename=future-0.17.1-cp37-none-any.whl size=488730 sha256=62abd243e8da913b92ffaec8a0c19a670b5531b3ff138f1d641b1305b6b4dc9b
  Stored in directory: /home/seungjaeryanlee/.cache/pip/wheels/0c/61/d2/d6b7317325828fbb39ee6ad559dbe4664d0896da4721bf379e
Successfully built future
Installing collected packages: future
Successfully installed future-0.17.1
```
</details>
<br/>

{::options parse_block_html="false" /}

With that, you should now be able to import `torch.utils.tensorboard` without an error.

```
Python 3.7.4 (default, Aug 13 2019, 20:35:49) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from torch.utils.tensorboard import SummaryWriter
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:541: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_qint8 = np.dtype([("qint8", np.int8, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:542: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_quint8 = np.dtype([("quint8", np.uint8, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:543: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_qint16 = np.dtype([("qint16", np.int16, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:544: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_quint16 = np.dtype([("quint16", np.uint16, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:545: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  _np_qint32 = np.dtype([("qint32", np.int32, 1)])
/home/seungjaeryanlee/.conda/envs/torchtest/lib/python3.7/site-packages/tensorboard/compat/tensorflow_stub/dtypes.py:550: FutureWarning: Passing (type, 1) or '1type' as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / '(1,)type'.
  np_resource = np.dtype([("resource", np.ubyte, 1)])
>>> 
```

You're all set!

[(Don't worry about the FutureWarning: it will be fixed in the next release!)](https://github.com/tensorflow/tensorflow/pull/30559)

## Running TensorBoard

Let's now try using TensorBoard with PyTorch! We will use the MNIST dataset, so let's install/upgrade `torchvision`.

```bash
pip install --upgrade torchvision
```

{::options parse_block_html="true" /}

<details><summary markdown="span">Output</summary>
```
Collecting torchvision
  Downloading https://files.pythonhosted.org/packages/51/83/2d77d040e34bd8f70dcb4770f7eb7d0aa71e07738abf6831be863ade00db/torchvision-0.4.0-cp37-cp37m-manylinux1_x86_64.whl (8.8MB)
     |████████████████████████████████| 8.8MB 30.9MB/s 
Collecting pillow>=4.1.1 (from torchvision)
  Downloading https://files.pythonhosted.org/packages/a4/da/2bd281c875686230eabc13d20ab590ea617563b0e746abfb0698c4d5b645/Pillow-6.1.0-cp37-cp37m-manylinux1_x86_64.whl (2.1MB)
     |████████████████████████████████| 2.1MB 31.4MB/s 
Requirement already satisfied, skipping upgrade: numpy in ./.conda/envs/torchtest/lib/python3.7/site-packages (from torchvision) (1.17.0)
Requirement already satisfied, skipping upgrade: six in ./.conda/envs/torchtest/lib/python3.7/site-packages (from torchvision) (1.12.0)
Requirement already satisfied, skipping upgrade: torch==1.2.0 in ./.conda/envs/torchtest/lib/python3.7/site-packages (from torchvision) (1.2.0)
Installing collected packages: pillow, torchvision
Successfully installed pillow-6.1.0 torchvision-0.4.0
```
</details>
<br/>

Next, copy and paste below code into `run.py`. This code is from the [official documentation](https://pytorch.org/docs/stable/tensorboard.html).

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

![Successful Tensorboard](/assets/blog/misc/pytorch-tensorboard/success_small.png)

For a full set of documentation, check the [TensorBoard page in the PyTorch Official Documentation](https://pytorch.org/docs/stable/tensorboard.html)!
 