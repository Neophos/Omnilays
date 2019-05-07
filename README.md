# Omnilays
Omnilays is a program for managing overlays for tournaments. It uses a simple dashboard to control the overlay easily from a dashboard.

## Prerequisites

Omnilays runs on Node 10.15.2 LTS and NodeCG 1.3.1. You install it as a bundle for NodeCG.

There is a portable version for Windows here: https://mega.nz/#!HpgAVQDa!XX49b1lcm6CNY1WsaE68xQ78N95MxzJORwxU-ldRs3Y You simply download, unzip and then run StartOmnilays.bat to run the app.

## Usage

Omnilays is preconfigured to run on localhost:9090. It currently supports fetching tournaments from smash.gg.

Fetch the names using the SmashGG Dashboard, and press the buttons next to the matches to add that to the scoreboard. If you manually change a name, use "Update View" to push to the overlay. If restarting a match manually, use "Start new match" to reset scores. Otherwise, when you add a match from smash.gg control panel it will automatically start a new match.

## Thanks

This program was based on earlier versions of Omnilays made by:
* [HoggeL](https://github.com/hoggel)
* [Charleon](https://github.com/charleon)
