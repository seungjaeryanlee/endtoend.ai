---
layout: post
title: "Collapsible Code Blocks in GitHub Pages"
author: Seungjae Ryan Lee
permalink: /collapsible-code-blocks
tags:
 - blogging

nav:
- name: "What are Collapsible Code Blocks?"
  permalink: "#what-are-collapsible-code-blocks"
- name: "The \"safe\" arduous way"
  permalink: "#the-safe-arduous-way"
- name: "The \"dangerous\" simple way"
  permalink: "#the-dangerous-simple-way"

image: /assets/blog/collapsible-code-blocks/example.png
image_type: contain
excerpt: "Here is a quick guide on using collapsible code blocks in GitHub pages. This might be useful when there is a large output that might be useful only to a few people reading the post."
---

Here is a quick guide on using collapsible code blocks in GitHub pages. This might be useful when there is a large output that might be useful only to a few people reading the post.

## What are Collapsible Code Blocks?

Markdown (or HTML, to be precise) offers collapsibles: here is an example:

<details><summary>Click this!</summary>
Here is some more text that was hidden before.
</details>
<br/>

This is created using HTML `<details>` and `<summary>` tags.

```html
<details><summary>Click this!</summary>
Here is some more text that was hidden before.
</details>
```

However, by default, you cannot use Markdown syntax inside HTML blocks, so it is not possible to use backticks to add code blocks inside these. Luckily, by setting the `parse_block_html` option in the Kramdown parser, you can add code blocks in them like this!

{::options parse_block_html="true" /}

<details><summary markdown="span">Let's see some code!</summary>
```python
print('Hello World!')
```
Of course, it has to be Hello World, right?
</details>
<br/>

{::options parse_block_html="false" /}

In Kramdown, there is the `parse_block_html` option. If this option is TRUE, means that the kramdown parser will process the content of block HTML tags as text containing block-level elements. (For more information, [read the official Kramdown guide](https://kramdown.gettalong.org/parser/kramdown.html#option-parse-block-html).) We want this option to be enabled to use backticks in collapsibles. There are two ways to enable this: the "safe" way and the "dangerous" way. 

## Method 1. The "safe", arduous way

Here is the safe way! In Kramdown, you can set option values inside markdown files.

```
{::options parse_block_html="true" /}  # Sets parse_block_html option to true
{::options parse_block_html="false" /} # Sets parse_block_html option to false
```

Thus, we can encapsulate the collapsible code block with these options, and it will render correctly!

~~~
{::options parse_block_html="true" /}

<details><summary markdown="span">Let's see some code!</summary>
```python
print('Hello World!')
```
Of course, it has to be Hello World, right?
</details>
<br/>

{::options parse_block_html="false" /}
~~~

{::options parse_block_html="true" /}

<details><summary markdown="span">Let's see some code!</summary>
```python
print('Hello World!')
```
Of course, it has to be Hello World, right?
</details>
<br/>

{::options parse_block_html="false" /}


## Method 2. The "dangerous", simple way

**Method 1** is great, but we need to add those two lines every time we want to add a collpasible code block. That sounds tiring, can we just have it enabled all the time? Yes!

Of course, one way would be to enable it at every page by adding a single line at the beginning of every file:

```
{::options parse_block_html="true" /}
```

An even simpler way to have it enabled by default. Go to `_config.yml` file, and add these lines (unless they are already there).

```
markdown: kramdown
kramdown:
  parse_block_html: true
```

Now it is enabled in every file.

~~~
<details><summary markdown="span">Let's see some code!</summary>
```python
print('Hello World!')
```
Of course, it has to be Hello World, right?
</details>
<br/>
~~~

{::options parse_block_html="true" /}

<details><summary markdown="span">Let's see some code!</summary>
```python
print('Hello World!')
```
Of course, it has to be Hello World, right?
</details>
<br/>

{::options parse_block_html="false" /}

So, why is this dangerous? Because it might introduce some troublesome situations when you use HTML tags in other ways.

{::options parse_block_html="true" /}

<details><summary markdown="span">Possible Problem</summary>
```
<div>
Suppose that we use two star symbols here **and two more here**. What could go wrong?
</div>
```

<span>
Suppose that we use two star symbols here **and two more here**. What could go wrong?
</span>

Oops!

</details>
<br/>

{::options parse_block_html="false" /}
