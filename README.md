# Stroop Effect Game
CPE4750 Final Project

Introduction
------------
The Stroop effect is a psychological phenomenon in which, given text that has mismatched color and spelling and tasked with identifying the color of the text despite what the text spells, test subjects erroneously read the text rather than correctly report the color. Named after John Ridley Stroop, who first published the effect in English in 1935, the Stroop effect challenges players in their endeavor to return home.

Getting Started
---------------
- Install Node.js if you do not already have it at https://nodejs.org/en/download/

WHAT IT IS/HOW IT WORKS *--------------------------------------------------------------------------------------------------------*
The Stroop Effect Game is an express node application game.
To run, enter the command
  node server.js
from the appropriate directory. The console will alert the user
that the application is running on port 3024. The server will handle
the GET requests, both by logging actions to the console and sending
interactive HTML files. The three possible GET requests are for the
game introduction, play, and win or lose outcomes.
*The HTTP POST is used to store player information (name, high score,
and date played) to the game's database.

HOW TO PLAY *---------------------------------------------------------------------------------------------------------------------*
The Stroop Effect game is a fun way to experience the phenomena in
which people cannot help but to associate the spelling of a color with
the color itself. Elaborated more in the tutorial, gameplay requires
the player to select the correct button that best describes the color
of text presented on the left side of the screen rather than the color
spelled by it.


Firebase Node.js Realtime Database Quickstart
==========================================

The Node.js Firebase Database quickstart demonstrates how to connect to and use the Firebase Realtime Database using Node.js through a simple social blogging app. It will interoperate with the Web, iOS and Android database quickstarts.

This server will:
 - Update the star counts for all posts.
 - Send email notifications when a post has been starred.
 - Send weekly emails listing top post.

https://nodejs.org/en/download/

Getting Started
---------------

- Create your project on the [Firebase Console](https://console.firebase.google.com).
- Create a service account as described in [Adding Firebase to your Server](https://firebase.google.com/docs/server/setup) and drop the file in this directory. Or use the provided test service account.
- Change the `<PROJECT_ID>` and `<PATH_TO_SERVICE_ACCOUNT_CREDENTIAL_FILE>` placeholders in [`index.js`](index.js).
- Configure your email transport in [`index.js`](index.js).
- Run `npm install`.
- Run `node index.js` to run the Node.js app locally.
- Configure and run one of the Database quickstarts for [Web](https://github.com/firebase/quickstart-js/tree/master/database), [iOS](https://github.com/firebase/quickstart-ios/tree/master/database) or [Android](https://github.com/firebase/quickstart-android/tree/master/database). Then use one of these apps to publish new posts: you should receive email notifications when one of your posts have received a new star and the starred counter should be kept up to date by the app.

Support
-------

https://firebase.google.com/support/

License
-------

© Google, 2016. Licensed under an [Apache-2](../LICENSE) license.
