---
layout: post
title:  "OSC Controller"
author: jacob
categories: [ making ]
tags: []
image: assets/images/osccontroller1.jpeg
description: "Using an Arduino with Processing I built an OSC remote control."
comments: false
---

Using an Arduino with Processing I built an OSC remote control. 

#### About
This project is a weird ["bodge"](https://www.youtube.com/watch?v=lIFE7h3m40U) together of various components. The Arduino was running a relay script that let a Processing library control it directly. Within processing there were two apps, one running on my laptop, the other running on an Android tablet. Between the two apps a wireless OSC library was used to send information.

You can learn more about OSC [here](http://opensoundcontrol.org/introduction-osc).

While OSC is designed mainly for sound and midi, I found a way to just use these same signals to control some LEDS.

![alt text](/assets/images/osccontroller2.jpeg "Picture of Arduino 2")