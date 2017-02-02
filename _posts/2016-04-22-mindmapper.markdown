---
layout: post
title:  "MindMapper: a investigation into bringing insight to EEG Devices"
banner_img: "MindMapper.png"
date:   2016-03-22 15:33:53 -0400
description: "Understanding how to bring mental attention"
permalink: mindmapper
categories: jekyll update
---

# About This Project

<div class="row" style="margin-left:0px; margin-right:0px;">
	    <div class="col-sm-6">
            <h3> Summary </h3> 
            <p><b>Domain </b>| Mobile Health/Quantified Self </p> 
            <p><b>Skills </b>| prototyping, illustration, heuristic evaluation, persona generation, contextual inquiry, affinity diagramming, and android development  </p>
            <p><b>Tools</b> | Sketch, Android Studio</p> 
            <p><b>Role</b> | Researcher, Designer, Developer</p>
            <p><b>Team</b> | Jayanth Prathipati and <a href="http://people.cs.vt.edu/rbeaton/">Bobby Beaton</a> (Mentor)  </p> 
          </div>
          <div class="col-sm-6">
          <h3>Problem Space</h3>
          <p>With the advent of wearables and smart phones, tracking your physical activity has been getting easier. However, tracking your mental focus has not changed. we wanted to explore how we could use EEG devices (think Fitbits but for mental activity instead of physical) and see if we could bring the power of these devices to market. </p>
          </div>
</div>

<br> 
<br> 


# Solution 

We built an Android app that interfaced with EEG devices to help give actionable feedback to users. Our primary challenge was educating the market on EEG devices and helping users to gain a deeper understanding of how their mental focus trends throughout the day.

<br> 
<br> 

# Research 

<div class="row" style="margin-left:0px; margin-right:0px;">

<div class="col-sm-6">
  <p>
    We performed a literature review on quantified-self technologies as well as doing some competitive analysis on what is currently on the market, reading relevant research papers such as such as: <a target="_blank" href="http://research.microsoft.com/apps/pubs/default.aspx?id=163348">AffectAura</a>, <a target="_blank" href="http://www.academia.edu/2518447/NeuroPlace_Making_sense_of_a_place">NeuroPlace</a>, and <a target="_blank" href="http://infovis.cs.vt.edu/oldsite/papers/CHI02-periphvis.pdf">An Ordering of Secondary Task Display Attributes</a>
  </p>

  <br> 
  <p>
    In addition, we intereviewed users with attentional difficulties and tried to get a better understanding of their daily routines. I used this data to create some personas of our target users. 
  </p>
  <br> 
  <p>
    We gained some key insights from this research: 
  </p>
  <ul>
    <li>
      Users define focus based on the context that they are in. It could mean something different per user and also per activity.  
    </li>
    <li>
      Users are focused around increasing productivity
    </li>
    <li>
      Users are able to interpret this data well when it is used in conjunction with context such as location and activity
    </li>
  </ul>
</div>
<div class="col-sm-6">
<img src="/img/competitive_analysis.png">
<p id="post-caption">Existing Visualizations in Self-Tracking Apps</p>






</div>


</div>

<br> 

We created a series of personas and use cases from our initial research. We were specifically interested in how a user would use this product daily and we centered our use cases and personas based on that specific interest. 

<br> 

# Prototyping 

We created multiple prototypes in order to evaluate MindMapper. 
I created paper and pencil prototypes and made them interactive using Marvel. I then ran a quick heuristic review with my teammates to better understand if the information visualizations that I created made sense. 

<br>

<img src="/img/mindmapper_lo_fi.png" style="width:35em; height:45em;  display: block;
    margin: 0 auto;">
<p id="post-caption">Lo-Fi prototype of MindMapper</p>


<br> 

We quickly learned that some visualizations were very hard to use. Users used color as an indicator for strength rather than size. We quickly focused on another round of lo-fi prototyping and review. 


Afterwards, we created a hi-fi sketch prototype that gave target users a better idea of langugage, icons, and notifications. 


<iframe src="https://marvelapp.com/68d492?emb=1" width="390" height="755" allowTransparency="true" frameborder="0"></iframe>

<br> 

# Evaluation 

Based on our previous results, we quickly found out that 

- Users didn't understand the meaning of mental focus 
- Design metaphors such as the focus score and the attention score didn't make sense to users 
- Users felt like the flow of the app didn't make much sense

Based on these results, I led the development team to make quick 
changes to the app to better fit the mental models for users and create a faster user flow. 

This work won 6 awards at the Virginia Tech Undergraduate Research Symposium and got over $2000 of research funding money. We're proud of this work and hope to release an open source Android app to let people use their EEG's with their devices in the future. 


