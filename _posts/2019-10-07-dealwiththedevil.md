---
layout: post
title:  "Deal with the Devil"
author: jacob
categories: [ game ]
tags: []
image: assets/images/dealwiththedevil/dealwiththedevil.png
description: "Deal with the Devil is a gameboy game I made for Ludum Dare 45"
comments: false
---

Deal with the Devil is a gameboy game I made for Ludum Dare 45

#### About

Deal with the Devil was my first gameboy game. I created it in a total of about 5 hours across 3 days. Wanted to have more time but ran into a big project for work. First time writing with C and first time making something for the gameboy. I think it went well but had to greatly reduce the game of it to finish in time.

How to play:

![alt text](/assets/images/dealwiththedevil/souls.png "Souls")
In the top left is the amount of souls you have. If you run out you lose, if you have 100 you win. I wanted to start with 0 but didn't have time to add the logic to not instantly lose.

![alt text](/assets/images/dealwiththedevil/indicator.png "Indicator")
In the top right is an indicator of whether your card needs to be higher or lower than the devils. H means you need a higher card, L means you need a lower card.

![alt text](/assets/images/dealwiththedevil/hand.png "Hand")
In the center you have your hand. These three cards are what you can choose from to bet against the devil. You select them with the D-Pad. Left - Left Card, Up - Middle Card, Right - Right Card.

There are 11 cards in the game with this order: A < 2 < 3 < 4 < 5 < 6 < 7 < 8 < 9 < Jack < King.

There isn't much of a game but it was a good experience learning about memory management and reusing of sprites. This game is unlike anything I have ever programmed before.

Thanks to Nick for the Art. If only I had time for sound.

You can find the rom download on [itch.io](https://tgb20.itch.io/deal-with-the-devil)

Source Code can be found on [Github](https://github.com/tgb20/LDJAM45)