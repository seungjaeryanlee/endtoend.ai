---
layout: post
title: "Setting up code-server on GCP: VSCode on Browser for Remote Work!"
author: Seungjae Ryan Lee
permalink: /code-server
# tags:
#  - pytorch

nav:
- name: "Simple Install"
  permalink: "#simple-install"
- name: "Detailed Install"
  permalink: "#detailed-install"
- name: "Running TensorBoard"
  permalink: "#running-tensorboard"

image: /assets/blog/code-server/front.png
image_type: contain
excerpt: "Visual Studio Code (VS Code) is a great code editor, but it cannot be used remotely... or can it? Code-server is VS Code running on a remote server accessible through the browser."
---

Deep Learning requires an enormous amount of computing power that cannot be contained in a laptop. Thus, to work "on the go", it is necessary to use cloud services such as AWS Elastic Compute Cloud (EC2), Google Cloud Platform (GCP), or Microsoft Azure. The simplest way to use these cloud services is by creating a virtual machine (VM) and running experiments inside it.

The problem with remote VMs are that they do not offer a display. Thus, most developers either use command-line editors such as Vim or Emacs, or write all the code locally and push it to remote VMs only for experiments. Although both solutions work, command-line editors have a steep learning curve for those familiar with more "modern" editors, and writing code locally requires a full setup on the local machine, defeating the purpose of a remote VM.

To address these concerns, [cdr/code-server](https://github.com/cdr/code-server) is VS Code running on a remote server accessible through the browser. The setup is very simple: taking less than ten minutes, and yet the results are amazing!

Note that in this post, we use a Linux VM instance from Google Cloud Platform and access it through a browser on a Windows machine. There is a good guide [here](https://github.com/cdr/code-server/blob/master/doc/admin/install/google_cloud.md), but it seemed to lack images and some details.

## Installation on the Server-side

Before starting, if you do not have a VM instance already, [create a new VM instance](https://cloud.google.com/compute/docs/quickstart-linux) following the guide. Then, open port `tcp:8443` for with filter `0.0.0.0/0` using the [following guide](https://cloud.google.com/vpc/docs/using-firewalls). (You can choose a different port number if needed) 

SSH into your Google Cloud platform to get started.

### Download code-server

Now, go to the [Releases page of cdr/code-server](https://github.com/cdr/code-server/releases). Copy the filename of the binary (.tar.gz) file of the latest release for Linux.

<div class="w80" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/code-server/releases.png" alt="">
</div>

Use a `wget` command to download the binary file, and unzip it with `tar`.

<pre class="enlighter" data-enlighter-language="bash">
wget https://github.com/cdr/code-server/releases/download/{version}/code-server{version}-linux-x64.tar.gz
tar -xf code-server{version}-linux-x64.tar.gz
</pre>

### Run code-server

Navigate to the unzipped folder and make the binary executable:

<pre class="enlighter" data-enlighter-language="bash">
cd code-server{version}-linux-x64.tar.gz
chmod +x code-server
</pre>

Now, we can run the binary!

<pre class="enlighter" data-enlighter-language="bash">
sudo ./code-server .. -p 8443
</pre>

The `..` denotes the root directory of VS Code, and the `-p` flag allows you to set the port number.

### Setup Password (Optional)

By default, code-server generates a password for you when you start it. However, it is tedious to memorize this randomly generated password, so it is better to set a more memorable password.

To set a password, you need to set an environment variable. You can make this a part of the `sudo` command:

<pre class="enlighter" data-enlighter-language="bash">
sudo PASSWORD=12345678 ./code-server .. -p 8443
</pre>

The `-E` flag for `sudo` preserves the environment variable.

## Accessing on the Client-side

Now, you can access the server-side code anywhere! Navigate to the server's IP address `aa.bb.cc.dd:8443`. You might get a warning like below:

<div class="w70" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/code-server/chrome_warning.png" alt="">
</div>

Click 'Advanced', then click 'proceed anyway'.

You will then be greeted with the screen asking you to enter the password. Enter the generated password or the password you set here:

<div class="w50" style="margin: 10px auto;">
  <img src="{{ absolute_url }}/assets/blog/code-server/password.png" alt="">
</div>

And you will be greeted with a VS Code!
