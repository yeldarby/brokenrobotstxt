# brokenrobotstxt
 MRE for broken dynamic robots.txt on Firebase Hosting

## Overview

Having a Firebase Function provide the content for `robots.txt` provides a 404
once deployed (even though it works locally).

## Details

This repo contains a minimum reproducible example. It works with the local emulator
but does not work once deployed.

* The index is backed by the static index.html: https://brokenrobotstxt.web.app/
* All other routes are backed by the function `allRoutes` defined in `functions/index.js` (and mapped in `firebase.json`). Example: https://brokenrobotstxt.web.app/any/route.here
* `robots.txt` should be backed by `allRoutes` just like all the other routes but produces a 404: https://brokenrobotstxt.web.app/robots.txt
