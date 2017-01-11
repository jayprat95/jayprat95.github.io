---
layout: post
title:  "MindMapper: a investigation into bringing insight to EEG Devices"
banner_img: "jhana_icon.png"
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
<img src="/img/affinity_jh.png">
<p id="post-caption">Affinity Diagram from our interviews</p>

</div>


</div>

# Our Prototyping 

We built low-fi paper prototypes and built a marvel prototype to test our interface. We quickly found that our data entry process was fairly straight forward and didn't get many complaints. 

We then moved to a higher fidelity prototype so that we could test some of our interactions on iPhone and Apple Watch. We wanted to make extensive use of swiping on both of these devices since it is a natural and intuitive gesture. 

In addition to intuitive gestures, We wanted to make use of the hardware features of the Apple Watch, such as the digital crown (knob on the side of the Apple Watch) and make the app feel at home on a user's home screen rather than a research project. 

To bring these ideas to fruition, I designed a swiping leikert scale to make it easier and delightful for users to select how focused they were. Here are examples of this interaction on iPhone and Apple Watch. 

<iframe src="//giphy.com/embed/wBHZfKccOgA5q" width="480" height="859" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

<iframe src="//giphy.com/embed/26FL9ovWI3vCtLU1a" width="480" height="683" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
<br> 

We built out our iPhone app using the interactions we learned from these interactions. We used Core Data to create a local database and made use of a lot of App Kit features such as storyboards and auto-layout to make our app compatible with all screen sizes. 

# Our Evaluation 

We ran a 2 day user study to study how using a wearable device would change user's attention. We did pre and post study interviews to understand our users and get their opinions on the product. In addition to that, I integrated <a href="https://developer.yahoo.com/analytics/">Flurry Analytics</a>  into our iPhone and WatchOS app in order to log usage information of the app such as how long users took in order to fill out a survey. We initially thought that users would favor having the combination of an Apple Watch and iPhone and would be able to perform tasks faster. However, we came to some interesting conclusions from our findings. 

- We found out that users "felt" that the watch app was much easier to log entries with....however, from our Flurry dashboard we found that the time difference between the watch and the iPhone apps was very small 
- We found that users were in fact changing their behavior based after using our app. One user reported to us that she changed her studying habits after getting notifications from the app. 
- We also found that users were not yet acquainted with Apple Watch. Most of our drawbacks came from lack of Apple Watch education. If we performed the study again, we would spend additional time prompting users on how to use the Apple Watch and teach them additional functionality on how to use it. 


