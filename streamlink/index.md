[[Home]](https://orange.haus)

# Stream Link

[Download Extension](https://orange.haus/streamlink/StreamLink.aix)

[Download Chat Demo](https://orange.haus/streamlink/StreamLinkDemo.aia)

[Extension Source](https://github.com/holyokecodes/appinventor-sources)

[Server Source](https://github.com/tgb20/StreamLink)

![alt text](https://orange.haus/streamlink/hostimage.png "Picture of Host Device")

![alt text](https://orange.haus/streamlink/clientimage.png "Picture of Client Device")

# Changelog

## V5
- Using default android Base64 encoding and decoding

## V4
- Migrated to Heroku

## V3
- Fixed Typo

## V2
- Icon shows ! if the extension needs an update
- Corrected spelling mistakes
- Removed OnLinkCreated

## V1
- Device IDs are now enforced by the extension and not user configurable
- Links can now have descriptions
- When joining a link you now get the link code and description returned
- Links are now deleted after 24 hours (if not in use)

## About
StreamLink is an App Inventor Extension created as a part of an NSF project titled GIRLS Immersed in Robotics Learning Simulations. This project will provide co-robotics workshops run by Holyoke Codes at Girls Inc. and Boys and Girls Club of Holyoke. 

StreamLink provides video and audio streaming, as well as other data types, between devices across networks. StreamLink provides blocks to easily create apps such as video calling, chat applications, home security systems, and remote control devices. Devices just need a shared LinkCode and an optional password.

StreamLink works directly with the camera input from a device and provides a video source for the App Inventor video player, allowing for easy integration with existing App Inventor components. StreamLink is not just limited to audio/video transmission, but supports other common App Inventor data types, including Logic, Text, and Math blocks. An additional method of sending any object is provided, but should be used with an understanding of what is being sent in a message.

StreamLink provides code blocks that add the ability to create an encrypted connection between authenticated devices through a server. Built on socket.io and NodeJS, the server is open source and can be deployed and customized as desired.

[Draw Together APK](https://orange.haus/streamlink/DrawTogether.apk)

[Chat App APK](https://orange.haus/streamlink/StreamLinkDemo.apk)
