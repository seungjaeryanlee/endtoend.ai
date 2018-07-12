---
layout: post
title: "Jupyter Notebook extensions to enhance your efficiency"
author: Seung Jae (Ryan) Lee
permalink: /blog/jupyter-notebook-extensions-to-enhance-your-efficiency
image: http://www.cytoscape.org/images/logo/jupyter-logo.svg
front_text: >
    Jupyter Notebook is a great tool that allows you to integrate live code,
    equations, visualizations and narrative text into a document. It is used
    extensively in data science. However, for developers who have used IDEs with
    abundant features, the simplicity of Jupyter Notebook might be problematic.
---

[Jupyter Notebook](http://jupyter.org/) is a great tool that allows you to integrate live code, equations, visualizations and narrative text into a document. It is used extensively in data science.

![Jupyter Notebook]({{ "assets/blog/jupyter-notebook-extensions-to-enhance-your-efficiency/jupyter.png" | absolute_url }})

However, for developers who have used IDEs with abundant features, the simplicity of Jupyter Notebook might be problematic. Jupyter Notebook has been steadily developed to include more and more features that developers need, but still, the vanilla Jupyter Notebook is not enough for many developers.

Thus, there are extensions that add functionality to Jupyter Notebook. Although the repository  `IPython-contrib` that the extensions are part of is not officially related to the Jupyter development team, most extensions have great quality and makes Jupyter Notebook more convenient.

In this post, I would like to highlight 5 extensions that I always use that makes my development process more efficient. They are **Hinterland**, **Variable Inspector**, **Notify**, **Autopep8**, and **Codefolding**.



## Installation with Anaconda

### Create Environment

If you are starting a new project, create a new environment with `conda create` command. The command below creates a new Anaconda environment with the name `jupyter`.

```bash
conda create -n jupyter
```

Then, activate the environment with `source activate`.

```
source activate jupyter
```

You can deactivate the environment with `source deactivate`.

```
source deactivate
```

### Jupyter Notebook

First, let's make sure you have Jupyter notebook installed. The command below will install, update or verify that you have installed Jupyter notebook in your environment.

```bash
conda install jupyter notebook nb_conda
```

### Jupyter Notebook Extensions

You should install two packages from `conda-forge` channel: `jupyter_contrib_nbextensions` and `jupyter_nbextensions_configurator`. The first package installs the extensions, and the second package (configurator) helps you manage the extensions.

```
conda install -c conda-forge jupyter_contrib_nbextensions jupyter_nbextensions_configurator
```

### Enable Extensions

To enable extensions, first you must start a Jupyter notebook server.

```
jupyter notebook
```

Then, you can navigate to `localhost:6006/extensions` to see a list of extensions and change their settings.

![NBextensions Configurator]({{ "assets/blog/jupyter-notebook-extensions-to-enhance-your-efficiency/configurator.png" | absolute_url }})



## Extensions

### Hinterland

**Hinterland** enables code autocompletion menu for every keypress in a code cell, instead of only calling it with tab. This makes Jupyter notebook's autocompletion behave like other popular IDEs like PyCharm.

![Hinterland]({{ "assets/blog/jupyter-notebook-extensions-to-enhance-your-efficiency/hinterland.jpg" | absolute_url }})

### Variable Inspector

If you used MATLAB before, **Variable Inspector** will be very familiar to you. Variable Inspector enables to collect all defined variables and display them in a floating window with their type, memory size and content.

![Variable Inspector]({{ "assets/blog/jupyter-notebook-extensions-to-enhance-your-efficiency/variable_inspector.gif" | absolute_url }})

### Notify

**Notify** sends you a web notification to notify you when the kernel becomes idle. This can be useful when running tasks that take more than a couple of seconds to complete.

![Notify]({{ "assets/blog/jupyter-notebook-extensions-to-enhance-your-efficiency/notify.png" | absolute_url }})

### Autopep8

`autopep8` is a Python package that automatically fixes your code to adhere to PEP 8, Python's most popular style guide. The Autopep8 extension simply allows you to use `autopep8` in each code block in the  Jupyter Notebook.

To use autopep8, you need the `autopep8` python package.

```bash
conda install -c conda-forge autoppe8
```

*If you use `yapf` instead of autopep8, use **Code Prettify** extension instead.*

### Codefolding

**Codefolding** is a basic feature that most editors have. In a long code block, codefolding allows you to manage your screen space efficiently by folding parts of code.

![Codefolding]({{ "assets/blog/jupyter-notebook-extensions-to-enhance-your-efficiency/codefolding.png" | absolute_url }})

## References

* [Jupyter Notebook Read the Docs](https://jupyter-notebook.readthedocs.io/en/stable/)
* [jupyter_contrib_nbextensions Read the Docs](http://jupyter-contrib-nbextensions.readthedocs.io): Most descriptions and images of extensions are from here.
* [jupyter_contrib_nbextensions GitHub](https://github.com/ipython-contrib/jupyter_contrib_nbextensions)
* [jupyter_nbextensions_configurator GitHub](https://github.com/Jupyter-contrib/jupyter_nbextensions_configurator)