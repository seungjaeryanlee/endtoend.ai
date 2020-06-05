---
layout: post
title: "How to Setup Azure Data Science Virtual Machine (DSVM)"
author: Seungjae Ryan Lee
permalink: blog/azure-dsvm/
tags:
 - azure
 - data-science
 - machine-learning

nav:
- name: "What is Azure DSVM"
  permalink: "#what-is-azure-dsvm"
- name: "Create a DSVM"
  permalink: "#create-a-dsvm"

image: /assets/blog/misc/azure-dsvm/azure_dsvm.png
image_type: contain
excerpt: ""
---

## What is Azure DSVM

Azure Data Science Virtual Machine is a virtual machine image that is built for data science. It has all the popular data science tools that you might need preinstalled and preconfigured, including

1. Anaconda Python
2. Jupyter, JupyterLab, and JupyterHub
3. Deep learning with TensorFlow and PyTorch
4. Machine learning with xgboost, Vowpal Wabbit, and LightGBM
5. Julia
6. Azure SDKs and libraries
7. Azure Machine Learning SDKs and sample notebooks
8. R support
9. Spark
10. NVIDIA drivers, CUDA Toolkit, and cuDNN library
11. [and more!](https://docs.microsoft.com/en-us/azure/machine-learning/data-science-virtual-machine/tools-included)

Therefore, if you ever want to use a virtual machine in Azure for data science or machine learning purposes, you should definitely consider using the Azure DSVM image!

For more information, check [Microsoft's in-depth description](https://docs.microsoft.com/en-us/azure/machine-learning/data-science-virtual-machine/overview)!

## Create a DSVM

First, log in to the Azure Portal. In the top search bar, you will be able to search for "data science virtual machine". (Note that DSVM does not get any search results) In the marketplace, you should be able to see two items, one for Windows 2019 and another for Ubuntu 18.04. We will create a Ubuntu virtual machine, so select the Ubuntu one.

<div class="w80" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/misc/azure-dsvm/search_dsvm.png" alt="">
</div>

You will be guided to a page that explains the Data Science Virtual Machine, listing what packages are pre-configured and are ready to use. Click on the blue "Create" button.

<div class="w80" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/misc/azure-dsvm/dsvm.png" alt="">
</div>

You will see a form to write the project and instance details. First, select the appropriate subscription and resource group. Then, write the VM name. Now choose the region and the VM size. Note that different regions will have different available VM sizes. Finally, for authentication, you can use SSH or password. Choose one option and fill in the information.

There are many more tabs of forms that you can complete, but for basic purposes, you should not need to touch them, so we will skip them and click "Review and Deploy". Also, you can always edit the properties later!

<div class="w80" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/misc/azure-dsvm/create_vm_basics.png" alt="">
</div>

You should be redirected to a new page that tells you that your deployment is underway. This should take just a few minutes. Go and grab a drink!

<div class="w80" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/misc/azure-dsvm/deployment_underway.png" alt="">
</div>

When you had a few sips, you should see that the message changed to say that your deployment is complete. Congrats! You now have a virtual machine instance that has Anaconda, Jupyter, TensorFlow, PyTorch installed with GPU support!

<div class="w80" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/misc/azure-dsvm/deployment_complete.png" alt="">
</div>

Good luck with your new VM :)
