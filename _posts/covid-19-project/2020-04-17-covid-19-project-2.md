---
layout: post
title: "COVID-19 Project: Background Research II: Datasets"
author: Seungjae Ryan Lee
permalink: /blog/covid-19-project/2
tags:
 - covid-19
 - covid-19-project
 - machine-learning

image: /assets/blog/covid-19-project/2/covid-chestxray-dataset.png
image_type: contain
excerpt: "Datasets are central to machine learning, and to answer a research question, one must find or create the dataset needed to answer that question. In this second post of background research, I have researched what datasets exist for COVID-19."

nav:
- name: "Datasets"
  permalink: "#datasets"

related:
- title: "COVID-19 Project: Background Research I: Data Visualizations"
  link: /blog/covid-19-project/1
  image: /assets/blog/covid-19-project/1/visualization-coronavirus-metro-area-tracker.png
  image_type: contain
---

<style>
table {
  max-width: 600px;
}
.post-main h4 {
  font: 500 20px/28px Roboto,sans-serif;
}
.post-main table a {
  font-family: "Helvetica","Arial",sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.post-main strong a {
  font-weight: bold;
}
.button-div {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.button-div + p {
  margin-top: 1em;
}
.button-div .mdl-button {
  margin-top: 0;
}
</style>


In the first post, I listed impressive visualizations created by multiple institutions and data scientist. This leads to a question: where did all this data come from? Datasets are central to machine learning, and to answer a research question, one must find or create the dataset needed to answer that question. In this second post of background research, I have researched what datasets exist for COVID-19. Again, this post will be updated as I discover more useful information.

## Datasets

| Dataset Name | Data | Region |
|:------------:|:----:|:------:|
| [2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository](#dataset-jhu-csse) | Confirmed cases, Deaths, Recovered cases | Global |
| [Epidemiological Data from the nCoV-2019 Outbreak: Early Descriptions from Publicly Available Data](#dataset-beoutbreakprepared) | Individual epidemoiological data | Global |
| [NYTimes Coronavirus (Covid-19) Data in the United States](#dataset-nytimes) | Confirmed cases, Deaths | USA |
| [COVID-19 Testing Dataset](#dataset-testing) | Tests | Global |
| [COVID-19 Image Data Collection](#dataset-image) | X-ray, CT | N/A |
| [Social Distancing Dataset](#dataset-social-distancing) | Social distancing metric | USA |
| [U.S. Consumer Activity During COVID-19 Pandemic](#dataset-consumer-activity) | Consumer activity | USA |
| [COVID-19 Open Research Dataset (CORD-19)](#dataset-cord-19) | Scholarly articles | N/A |
| [Oxford COVID-19 Government Response Tracker (OxCGRT)](#dataset-oxcgrt) | Government responses | Global |
| [Masks Recommended or Mandatory in Public](#dataset-r0down) | Mask policy | Global |
| [Google Trends](#dataset-google-trends) | Search trends | Global |
| [See Which States and Cities Have Told Residents to Stay at Home](#dataset-coronavirus-stay-at-home-order) | Statewise stay-at-home order with effective date | USA |

#### 2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository {#dataset-jhu-csse}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://github.com/CSSEGISandData/COVID-19">Dataset</a>
</div>

Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE) records the number of confirmed cases, deaths, and recovered cases per country every day.

#### Epidemiological Data from the nCoV-2019 Outbreak: Early Descriptions from Publicly Available Data {#dataset-beoutbreakprepared}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://github.com/beoutbreakprepared/nCoV2019">Dataset</a>
</div>

The nCoV-2019 Data Working Group collected epidemiological data of individuals with COVID-19. The data includes the people's travel history, dates of symptoms and hospitalizations, their chronic diseases, etc. 

#### NYTimes Coronavirus (Covid-19) Data in the United States {#dataset-nytimes}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://github.com/nytimes/covid-19-data">Dataset</a>
</div>

New York Times updates data on the number of daily confirmed cases and deaths in the United States in state level and county level, beginning on January 21st, 2020.

#### COVID-19 Testing Dataset {#dataset-testing}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://ourworldindata.org/covid-testing">Dataset</a>
</div>

Our World in Data created an ongoing dataset that gathers the number of tests performed by each country on each day. The dataset contains information of 57 countries.

<div class="w60">
  <iframe src="https://ourworldindata.org/grapher/full-list-cumulative-total-tests-per-thousand" style="width: 100%; height: 600px; border: 0px none; margin: 20px 0;"></iframe>
</div>

#### COVID-19 Image Data Collection {#dataset-image}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://github.com/ieee8023/covid-chestxray-dataset">Dataset</a>
</div>

Cohen, Morrison, and Dao created a database of chest X-ray and CT images of COVID-19 cases.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/2/covid-chestxray-dataset.png" alt="">
</div>

#### Social Distancing Dataset {#dataset-social-distancing}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.safegraph.com/blog/stopping-covid-19-with-new-social-distancing-dataset">Dataset</a>
</div>

SafeGraph released a dataset that measures how strictly each census block group in the United States followed social distancing measures by "analyzing GPS location data from a large panel of anonymized mobile devices."

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/2/safegraph-social-distancing-dataset.png" alt="">
</div>

#### U.S. Consumer Activity During COVID-19 Pandemic {dataset-consumer-activity}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.safegraph.com/dashboard/covid19-commerce-patterns">Dataset</a>
</div>

SafeGraph also released a dataset that measures the foot-traffic in the United States before and during the COVID-19 pandemic. Although this dataset is not explicitly for COVID-19, it can be seen as an indirect measure of social distancing.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/2/safegraph-foot-traffic.png" alt="">
</div>

#### COVID-19 Open Research Dataset (CORD-19) {#dataset-cord-19}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://pages.semanticscholar.org/coronavirus-research">Dataset</a>
</div>

The Allen Institute of AI, partnered with multiple leading research groups in the world, compiled scholarly articles related to COVID-19, SARS-CoV-2, and related coronavirus. The dataset contains over 51000 scholarly articles with full text for 40000 of them.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/2/cord-19.png" alt="">
</div>

#### Oxford COVID-19 Government Response Tracker (OxCGRT) {#dataset-oxcgrt}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.bsg.ox.ac.uk/research/research-projects/coronavirus-government-response-tracker">Dataset</a>
</div>

Oxford University students and staff collected data on governments' responses to COVID-19 around the world. They have 13 indicators: 9 categorical indicators measuring policies and 4 continuous financial indicators.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/2/oxcgrt.png" alt="">
</div>

#### Masks Recommended or Mandatory in Public {#dataset-r0down}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://r0down.org/">Dataset</a>
</div>

Thomas collected information on 29 countries and regions that recommended or mandated wearing masks in public.

#### Google Trends {#dataset-google-trends}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://trends.google.com/trends/explore?date=today%201-m&geo=US&q=coronavirus%20%2B%20COVID-19">Dataset</a>
</div>

This is not exactly a dataset, but Google Trends can also provide useful insight! Google Trends can show which states in the United States searched COVID-19 most, or how the search trend changed over time.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/2/google-trends.png" alt="">
</div>



#### See Which States and Cities Have Told Residents to Stay at Home {#dataset-coronavirus-stay-at-home-order}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.nytimes.com/interactive/2020/us/coronavirus-stay-at-home-order.html">Visualization</a>
</div>

New York Times created a map of the United States that display the states that instructed their residents to stay at home. The article also has data on the full announcement, local coverage of this announcement, and when these announcements became effective for each state.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/2/visualization-coronavirus-stay-at-home-order.png" alt="">
</div>
