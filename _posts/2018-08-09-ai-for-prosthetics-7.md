---
layout: post
title: "AI for Prosthetics Week 7: Understanding the Reward"
author: Seungjae Ryan Lee
permalink: /blog/ai-for-prosthetics-5/

published: false

front_image: /assets/blog/ai-for-prosthetics-5/front.png
front_text: >

nav:
- name: Latest News
  permalink: '#latest-news'
- name: Leaderboard
  permalink: '#leaderboard'
- name: Reward
  permalink: '#reward'
- name: osim-rl-helper
  permalink: '#osim-rl-helper'
- name: What's Next?
  permalink: '#whats-next'
---

## Weeks

- [Week 1: Understanding the Challenge](/blog/ai-for-prosthetics-1)
- [Week 2: Understanding the Action Space](/blog/ai-for-prosthetics-2)
- [Week 3-4: Understanding the Observation Space](/blog/ai-for-prosthetics-3)
- [Week 5: Understanding the Reward](/blog/ai-for-prosthetics-5)



## Latest News

Congrats to nskiran (#1), rl_agent (#3), ymmoy999 (#4), Firework (#6), Yongjin (#8), HP (#9), and jack@NAN (#10) for getting their new agents to Top 10 this week! Read more about the current leaderboard [in the section below](#leaderboard).

I misinterpreted the transition from Round 1 to Round 2. It has been clarified that Round 1 will continue until September 16th, and once it is over, Round 2 will be held until September 30th (tentative). Round 1 is the current round where the agent needs to follow a constant horizontal velocity vector of 3 m/s. In contrast, for Round 2, the target velocity vector will be time-dependent. More information should be available soon.

Meanwhile, congratulations to the AI for Prosthetics team for getting Google Cloud Platform as a sponsor! **Top 400 teams with positive points by August 15th will be awarded $250 cloud credits.** Hope this encourages many of you to participate, since there are currently about 50 people in the leaderboard, with 34 people with positive scores!



## Leaderboard

Here are the top 10 scores for this week. A lot of new people climbed up the ladder this week, with only Mattias_Ljungström staying in the top 10 with his old agent. Only 6 of the top 10 have participated in the Learning to Run challenge, so feel free to join the competition as a newcomer!

| Participant        | Cumulative Reward | Last Submission (UTC)  |
| ------------------ | ----------------- | ---------------------- |
| nskiran            | 2240.904          | Mon, 23 Jul 2018 05:25 |
| lijun              | 2230.505          | Mon, 16 Jul 2018 09:03 |
| rl_agent           | 2192.552          | Thu, 26 Jul 2018 07:51 |
| ymmoy999           | 1910.049          | Wed, 25 Jul 2018 13:03 |
| Mattias_Ljungström | 1632.521          | Wed, 11 Jul 2018 15:30 |
| Firework           | 1582.416          | Fri, 20 Jul 2018 03:04 |
| aadilh             | 1461.556          | Mon, 16 Jul 2018 00:02 |
| Yongjin            | 1297.568          | Wed, 25 Jul 2018 00:03 |
| HP                 | 1278.196          | Tue, 24 Jul 2018 13:48 |
| jack@NAN           | 1255.956          | Fri, 27 Jul 2018 05:26 |

![]({{ "/assets/blog/ai-for-prosthetics-5/leaderboard.png" | absolute_url }})





## What's Next?

This post concludes the series of posts about the environment! I will now write about my analysis of the best agents in the last year's competition. I also hope to add a better DDPG agent, since although the `keras-rl` package is intuitive, it is slow.

I plan to keep the new [Leaderboard](#leaderboard) section so that people can see the general trend of the scores with a single chart.

