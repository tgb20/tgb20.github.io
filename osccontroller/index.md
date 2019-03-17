[[Home]](https://orange.haus)

# OSC Controller

![alt text](https://orange.haus/osccontroller/osccontroller1.jpeg "Picture of Arduino")

## About
Using an Arduino with Processing I built an OSC remote control. 

This project is a weird ["bodge"](https://www.youtube.com/watch?v=lIFE7h3m40U) together of various components. The Arduino was running a relay script that let a Processing library control it directly. Within processing there were two apps, one running on my laptop, the other running on an Android tablet. Between the two apps a wireless OSC library was used to send information.

You can learn more about OSC [here](http://opensoundcontrol.org/introduction-osc).

While OSC is designed mainly for sound and midi, I found a way to just use these same signals to control some LEDS.

![alt text](https://orange.haus/osccontroller/osccontroller2.jpeg "Picture of Arduino 2")
