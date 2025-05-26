---
title: Firefox 1.0 Preview Release
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2004-09-14T19:04:38.000Z
metadata:
  categories:
    - Firefox
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=61
  type: wordpress
  url: https://www.kmgerich.com/2004/09/14/firefox-10-preview-release/
tags:
  - firefox
---
[Mozilla Firefox One Dot Oh Preview Release](http://www.mozilla.org/products/firefox/releases/0.10.html) is available! [Live Bookmarks](http://www.mozilla.org/products/firefox/live-bookmarks.html) is one of the handful of new features in this release which focuses on stability and security. The Mac version also has an [updated visual style](http://kmgerich.com/archive/000068.html). Grab it, try it, and tell us what we’re doing wrong (and right)!

## Comments

**gopinaths** on 2004-09-14 11:12:02
> cool..
> 1 thing that bothers me, im not able to cut/copy/paste any text in firefox0.10 PR .Does any body experience similar probs??

**José Jeria** on 2004-09-14 11:18:39
> I think that winstripe is getting better and better and I really like it.
> 
> Things that I hope will make it for the 1.0 release:
>  - Use different icon for flexibale space in customize... U cant see the difference now
>  - Missing clean-up icon when button is disabled in download manager
>  - Fix the 1px bug where the tabbar gets 1px higher when adding a new tab

**Alex juno** on 2004-09-14 11:18:49
> The link to download Firefox is broken.

**XtC4UALL** on 2004-09-14 11:19:49
> that's this bug:
> 
> http://bugzilla.mozilla.org/show_bug.cgi?id=220900
> 
> vote for it & pray as it has _NOT_ been selected as 1.0 blocker

**Kevin** on 2004-09-14 11:47:59
> The problem on the copy and paste bug is that nobody has been able to reliably reproduce it. I'm sure once someone comes up with a test case (a set of steps that will trigger the bug), it will be considered for 1.0.

**** on 2004-09-14 12:05:31
> the "File > add new live bookmark" doesn't work for me. Still dunno why they didn't implemented sage instead...

**Kevin** on 2004-09-14 12:32:07
> It seems to me that the functionality of Sage goes beyond Firefox's mandate of keeping it simple. I don't mean that in a bad way.
> 
> Actually you could argue that the Live Bookmarks feature is not essential to the browser so it should be an extension itself, but balancing innovative features versus bloat is more of an art than a science ;)

**Jordan** on 2004-09-14 13:24:09
> When o WHEN will they fix the middle-click bug in OSX? /sob
> 
> http://bugzilla.mozilla.org/show_bug.cgi?id=151249

**Jordan** on 2004-09-14 13:26:56
> btw, Kevin....Are your chrome suggestions going to be incorporated into the source tree?
> 
> http://kmgerich.com/archive/000069.html

**Laurens Holst** on 2004-09-14 13:58:45
> I think the 'real' RSS reader functionality is just aimed at Thunderbird, where it imho fits more appropriately, too. It is in there, so why add it to Firefox as well. And there's always the livemarks and Sage as a plugin.
> 
> ~Grauw

**Kevin** on 2004-09-14 14:09:26
> The midle-click bug has a patch that is waiting to go in.
> 
> Jordan, I'm not sure if my chrome suggestions will be incorporated. I'll elaborate in another blog post later today :)

**Brion Vibber** on 2004-09-14 16:40:58
> I first submitted that middle-click patch at the beginning of May, over a month before the 0.9 release, hoping it might get into a beta release and actually be widely tested before Firefox 1.0. Unfortunately some patches get more lovin' than others and nobody's been willing to commit it yet.
> 
> Either it won't make it into 1.0 or it'll be shoved in at the last minute... who knows. :(  Maybe in time for Thunderbird 1.0... or Mozilla 2.0... ;)

**atom** on 2004-09-14 18:50:32
> kevin, any word on that graphite version of the mac theme? too many colors! ahh! :) really, i love the new theme, would just like a graphite version.

**Kevin** on 2004-09-14 19:02:28
> Yeah, the word is .. not yet :) Sorry. we have a huge to-do list for Firefox and Thunderbird 1.0, and a Graphite theme is on the list, but a low priority.
> 
> I'd love it if Firefox were able to swap in the Graphite toolbar icons if the Graphite theme is selected. Any enterprising hackers out there want to take a shot at that? Brion? :)

**Macskeeball** on 2004-09-14 20:12:43
> Kevin, didn't Firefox used to detect that with an older version of Pinstripe? I seem to remember that it did. This was way before Winstripe et al was even thought of, and before the monochrome theme. I think it was even before Pinstripe became the default theme.

**Brion Vibber** on 2004-09-14 20:19:41
> Not sure if it helps, but I notice that the CSS color keyword -moz-mac-focusring comes up with a different color depending on whether Blue or Graphite is selected. (Tested on Mac OS X 10.3.5, Firefox 1.0PR) Don't know if the chrome can get at the actual value of that, or if the check needs to be explicit elsewhere...

**Kevin** on 2004-09-14 20:39:39
> Macskeeball, I had a Graphite version of Pinstripe once upon a time as well as a Blue version :) But Mozilla didn't automatically know what OS theme you had selected.
> 
> Brion, brilliant approach! -moz-mac-focusring computes to rgb(126,173,217) for the Blue theme. I looked it up with the DOM Inspector. So we'd need some code that says if the focus ring color computes to rgb(126,173,217), use the regular toolbar icon image, and if not, use the Graphite image. I wish I could do this with regular CSS :) Do you think it could be done with Javascript/XUL or is something else necesary?

**Macskeeball** on 2004-09-14 21:58:54
> This wasn't with Mozilla, but what was then Firebird. I know it wasn't with Phoenix because I only used that on Windows. Maybe it's just a senior (in high school) moment. ;)
> 
> Something about the RSS button feels wrong. I understand the point (tying in Firefox with mozilla.org in appearance) but as you know that button allows for Atom feeds as well. Maybe it should just say XML since technically RSS and Atom are both XML?

**Samual Icky** on 2004-09-15 08:51:24
> On the RSS issue... I can't seem to find a way to turn off that cr@p. Don't want it... don't need it... should be an extention for sure...
> 
> Love Kevins chrome fix... but I'm using Macskeeball updated one... has a few fixes...
> 
> I still hope to see update square-box-safari-like theme update.

**Macskeeball** on 2004-09-15 17:15:48
> I know this is nitpicky, but the little things all add up. Look at your Firefox toolbar, then look closely at the New Window toolbar icon. It's still showing the version of Pinstripe before you made the "Mac Firefox Icon Update" post. It's subtle, but present.

**Ryan Rafferty** on 2004-09-19 13:18:17
> A few things I noticed with the new theme is that the RSS button in the bottom right hand corner is flush with the resize tab. My only other request would be to see a special icon for Live-Update bookmarks so that they are distinguishable from regular bookmark folders.

**Kevin D** on 2004-09-20 14:38:34
> Kevin,
> 
> Are the icons in the "Options" panel going to be updated for 1.0?  They don't really seem to fit with the rest of the theme.
> 
> Thanks,
> 
> Kevin D

**Michael Romero** on 2004-09-30 11:19:10
> I have to agree with some of the other people here that Sage is a much better implementation of the desired features. Sage fits in well with the Sidebar philosophy and is easy to use and organize (just add the RSS bookmark to the folder Sage looks in). Plus, the interface is easy to pick up and use.

**supershady** on 2004-11-28 10:16:13
> anyone updating this theme for firefox 1.0 final? that would be nice
