---
layout: post
title: "githubtocolab: Open GitHub Jupyter Notebooks in Colab!"
author: Seungjae Ryan Lee
permalink: blog/githubtocolab/
redirect_from:
 - githubtocolab/
# tags:
#  - github

nav:
- name: "How To Use"
  permalink: "#how-to-use"
- name: "Behind the Scenes"
  permalink: "#behind-the-scenes"

image: /assets/blog/misc/githubtocolab/front.png
image_type: contain
excerpt: "GitHub is a great place to host jupyter notebooks, and Colab is a great place to run jupyter notebooks. Use githubtocolab.com to instantly open jupyter notebooks in GitHub on Colab!"
---

## How To Use

<div class="w100" style="margin: 10px auto;">
  <img src="/assets/blog/misc/githubtocolab/githubtocolab.gif" alt="">
</div>

1. Find the jupyter notebook in GitHub.

    <pre class="enlighter" data-enlighter-language="bash">
    github.com/tensorflow/agents/blob/master/tf_agents/colabs/0_intro_rl.ipynb
    </pre>

2. In the link, add `tocolab` after `github`.

    <pre class="enlighter" data-enlighter-language="bash">
    githubtocolab.com/tensorflow/agents/blob/master/tf_agents/colabs/0_intro_rl.ipynb
    </pre>

3. A Google Colab page with the jupyter notebook will open!


## Behind the Scenes

Last week, I read this from [the official Colab GitHub Demo](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb):

<div class="w80" style="margin: 10px auto;">
  <img src="/assets/blog/misc/githubtocolab/rationale.png" alt="">
</div>

I thought that it would be lot easier if the link was more memorizable, so I decided to create [githubtocolab.com](githubtocolab.com), a simple wepbage that redirects to Google Colab.

I have very little front-end knowledge, so I had to read a lot of tutorials to set it up correctly. Below, I briefly describe what I had to do to and what resources I used.

### Purchase Domain and Server

To create a webpage, I needed a domain name and a place to host my website. I purchased the "githubtocolab.com" domain in Namecheap, which was <span>&#36;</span>12 per year. For the place to host my website, I chose DigitalOcean since it had the most tutorials. I chose the smallest "droplet," which cost <span>&#36;</span>5 a month.

<!-- <div class="w60" style="margin: 10px auto;">
  <img src="/assets/blog/misc/githubtocolab/digitalocean_5dollar.png" alt="">
</div> -->

**Total cost: &#36;6 per month**

### DNS Setup: Connect Domain and Server

To Point Namecheap domain to DigitalOcean, I had to setup Nameservers and A Records:

<div class="w80" style="margin: 10px auto;">
  <img src="/assets/blog/misc/githubtocolab/dns.png" alt="">
</div>

The `142.93.177.234` IP is the DigitalOcean droplet IP.

Here are the three tutorials I read to setup DNS:
- [How To Point to DigitalOcean Nameservers From Common Domain Registrars (DigitalOcean)](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars#registrar-namecheap)
- [How to Add Domains (DigitalOcean)](https://www.digitalocean.com/docs/networking/dns/how-to/add-domains/)
- [How to Create DNS Records (DigitalOcean)](https://www.digitalocean.com/docs/networking/dns/how-to/manage-records/)

### Nginx Setup: Setup Redirects

I set up the server to do two things:

1. Redirect "githubtocolab.com" to this blog post.
2. Redirect all other (non-root) urls to colaboratory.

<pre class="enlighter" data-enlighter-language="bash">
server {
    root /var/www/githubtocolab.com/html;
    index index.html index.htm index.nginx-debian.html;

    server_name githubtocolab.com www.githubtocolab.com;

    location = / {
        return 301 https://endtoend.ai/blog/githubtocolab/;
    }
    location / {
        return 301 https://colab.research.google.com/github/$request_uri;
    }

     # managed by Certbot
    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/githubtocolab.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/githubtocolab.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
server {
    # managed by Certbot
    if ($host = www.githubtocolab.com) {
        return 301 https://$host$request_uri;
    }
    if ($host = githubtocolab.com) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    listen [::]:80;

    server_name githubtocolab.com www.githubtocolab.com;
    # managed by Certbot
    return 404;
}
</pre>

Here are the four tutorials I read to setup NGINX:
- [Initial Server Setup with Ubuntu 18.04 (DigitalOcean)](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04)
- [How To Install Nginx on Ubuntu 18.04 (DigitalOcean)](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)
- [How To Secure Nginx with Let's Encrypt on Ubuntu 18.04 (DigitalOcean)](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04)
- [Creating NGINX Rewrite Rules (NGINX)](https://www.nginx.com/blog/creating-nginx-rewrite-rules/)
