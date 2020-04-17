---
layout: post
title: "COVID-19 Project: Background Research I: Data Visualizations"
author: Seungjae Ryan Lee
permalink: /blog/covid-19-project/1
tags:
 - covid-19
 - covid-19-project
 - machine-learning

image: /assets/blog/covid-19-project/1/visualization-coronavirus-metro-area-tracker.png
image_type: contain
excerpt: "TODO"

nav:
- name: "Visualizations"
  permalink: "#visualizations"

# related:
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

Background research is a necessary step before embarking on a project. Since there are so many projects, papers and studies on COVID-19, this background research cannot be exhaustive. Still, a thorough background research can help avoid duplicate work and generate better ideas. Therefore, the next few posts will be dedicated to understanding prior works and existing data. These posts will be updated as I discover more useful information.

For this first post, I have compiled a list of data visualizations. Data visualizations present the data in a way is more digestable than tables of numbers, allowing for better intuition and help formulating hypotheses. Thus, it is perhaps the easiest way to introduce oneself to an unfamiliar topic.



## Visualizations

| Visualization Name | Visualized Data | Region |
|:------------------:|:---------------:|:------:|
| [COVID-19 Dashboard](#visualization-jhu-csse) | Cumulative confirmed cases, Deaths, Recovered cases, Fatality rate, Incidence rate, Tests (USA), Hospitalized (USA) | Global, USA |
| [Bing COVID Tracker](#visualization-bing) | Total confirmed cases, Active cases, Recovered cases, Fatal cases, News, Videos | Global |
| [U.S. State Live Tracker](#visualization-politico) | Positive tests, Total tests, Deaths | USA |
| [Genomic epidemiology of novel coronavirus - Global subsampling](#visualization-nextstrain) | Evolutionary relationships | Global |
| [COVID vs. New York Daily Average Cause of Death](#visualization-ny-cause-of-death) | Cause of death | New York |
| [Coronavirus Map: Tracking the Global Outbreak](#visualization-nytimes-map) | Confirmed cases, Deaths, Confirmed cases per capita, Deaths per capita, Doubling rate (Global, USA) | Global, Italy, UK, USA |
| [How the Virus Got Out](#visualization-nytimes-how-the-virus-got-out) | Story | Global, China |
| [How Severe Are Coronavirus Outbreaks Across the U.S.? Look Up Any Metro Area](#visualization-coronavirus-metro-area-tracker) | Confirmed cases, Deaths, Growth rate | USA |

#### COVID-19 Dashboard {#visualization-jhu-csse}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">Visualization</a>
</div>

The Center for Systems Science and Engineering (CSSE) at JHU created a dashboard showing confirmed cases, deaths, recovered cases, fatality rate, and incidence rate of countries around the world. For United States, they also offer insight on the number of tests given and the number of people hospitalized.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/1/visualization-jhu-csse.png" alt="">
</div>

#### Bing COVID Tracker {#visualization-bing}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://bing.com/covid">Visualization</a>
</div>

Bing also has a dashboard that shows the number of active cases, recovered cases, and fatal cases around the world. Bing also lists news articles and videos related to each countries' COVID-19 outbreak.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/1/visualization-bing.png" alt="">
</div>

#### U.S. State Live Tracker {#visualization-politico}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.politico.com/interactives/2020/coronavirus-testing-by-state-chart-of-new-cases/">Visualization</a>
</div>

Politico created visualizations for each state in the United States that show the growth of number of positive tests, total tests, and deaths over time. The data is from [The COVID Tracking Project](https://covidtracking.com/).

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/1/visualization-politico.png" alt="">
</div>

#### Genomic epidemiology of novel coronavirus - Global subsampling {#visualization-nextstrain}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://nextstrain.org/ncov/global">Visualization</a>
</div>

"This phylogeny shows evolutionary relationships of hCoV-19 (or SARS-CoV-2) viruses from the ongoing novel coronavirus COVID-19 pandemic."

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/1/visualization-nextstrain.png" alt="">
</div>

#### COVID vs. New York Daily Average Cause of Death {#visualization-ny-cause-of-death}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://public.flourish.studio/visualisation/1742289/">United States</a>
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://public.flourish.studio/visualisation/1741938/">New York</a>
</div>

Fabio Gratton created a bar race plot that shows how COVID-19 became the primary cause of death in the United States and New York.

Note that the data for non-COVID-19 deaths for New York is from [2017 data from CDC](https://www.cdc.gov/nchs/pressroom/states/newyork/newyork.htm), and the data used for United States is unknown.

<div class="flourish-embed flourish-bar-chart-race" style="margin-top: 10px" data-src="visualisation/1741938" data-url="https://public.flourish.studio/visualisation/1741938/embed"><script src="https://public.flourish.studio/resources/embed.js"></script></div>

#### Coronavirus Map: Tracking the Global Outbreak {#visualization-nytimes-map}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.nytimes.com/interactive/2020/world/coronavirus-maps.html">Global</a>
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.nytimes.com/interactive/2020/world/europe/italy-coronavirus-cases.html">Italy</a>
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.nytimes.com/interactive/2020/world/europe/united-kingdom-coronavirus-cases.html">UK</a>
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html">USA</a>
</div>

New York Times created multiple visualizations showing the confirmed cases, deaths, and growth rates of different regions in the world.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/1/visualization-nytimes-global-doubling-rate.png" alt="">
</div>

#### How the Virus Got Out {#visualization-how-the-virus-got-out}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.nytimes.com/interactive/2020/03/22/world/coronavirus-spread.html">Visualization</a>
</div>

New York Times created a visualization with text that shows how COVID-19 spread from Wuhan. They discuss how the Lunar New Year affected the spread in China and how COVID-19 global pandemic.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/1/visualization-nytimes-how-the-virus-got-out.png" alt="">
</div>

#### See Which States and Cities Have Told Residents to Stay at Home {#visualization-coronavirus-stay-at-home-order}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.nytimes.com/interactive/2020/us/coronavirus-stay-at-home-order.html">Visualization</a>
</div>

New York Times created a map of the United States that display the states that instructed their residents to stay at home.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/1/visualization-coronavirus-stay-at-home-order.png" alt="">
</div>

#### How Severe Are Coronavirus Outbreaks Across the U.S.? Look Up Any Metro Area {#visualization-coronavirus-metro-area-tracker}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.nytimes.com/interactive/2020/04/03/upshot/coronavirus-metro-area-tracker.html">Visualization 1</a>
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="https://www.nytimes.com/interactive/2020/03/21/upshot/coronavirus-deaths-by-country.html">Visualization 2</a>
</div>

New York Times also created several visualizations on the growth rates of confirmed cases and deaths.

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/1/visualization-coronavirus-metro-area-tracker.png" alt="">
</div>

<!--
#### TODO {#todo}

<div class="button-div">
  <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" href="TODO">Visualization</a>
</div>

<div class="w60">
  <img src="{{ absolute_url }}/assets/blog/covid-19-project/1/visualization-todo.png" alt="">
</div>

https://covid19dashboards.com/
https://healthmap.org/covid-19/
https://hgis.uw.edu/virus/
-->
