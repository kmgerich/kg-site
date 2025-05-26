---
title: Firefox 1.0almost
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2004-10-28T20:27:27.000Z
metadata:
  categories:
    - Firefox
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=66
  type: wordpress
  url: https://www.kmgerich.com/2004/10/28/firefox-10almost/
tags:
  - firefox
---
[Firefox 1.0 Release Candidate 1](http://www.mozilla.org/products/firefox/) is out. There isn’t anything flashy to talk about in this version except [hundreds of bug fixes](http://www.mozilla.org/projects/firefox/qa/changelog-rc1.html). Version 1.0 for Windows and Linux is scheduled for release on November 9. The Mac version will get special attention and come out sometime later.

Between 1.0RC1 and 1.0 I’m going to finish up tweaking the Windows and Linux theme. Here are a few of my priorities. Feel free to suggest other theme tweaks that should make it into 1.0.

-   [Scrollbar arrows rendered incorrectly](https://bugzilla.mozilla.org/show_bug.cgi?id=247161)
-   [Themes should be RTL compatible](https://bugzilla.mozilla.org/show_bug.cgi?id=221824)
-   [\-moz-appearance: none gives the urlbar a 2px inset border…](https://bugzilla.mozilla.org/show_bug.cgi?id=263750) (could use some help here)
-   Javascript Console: toolbar icons, clean up CSS

## Comments

**Eric Lutz** on 2004-10-28 13:18:54
> Aw, no sweet new FireFox-swirling-around-the-globe throbber for the official 1.0 release?  ;-)
> I was kinda hoping for something like that...

**Nat Hooper** on 2004-10-28 13:22:35
> I've been using firefox for some time with no problems until all of a sudden Ver. 1PR refuses to show pixes in eBay, and messes up my Yahoo page.
> 
> Hate to say this, but I've had to go back to the Explorer.
> 
> Nat

**anon** on 2004-10-28 13:31:01
> Why release it on 9/11? Why not 8/11 or 10/11?
> 
> I dread to think what the new about:mozilla would be for this release.

**Sanji** on 2004-10-28 13:38:13
> Unfortn. Firefox doesn't work at all for me. It just refuses to load pages. Don't know why. Last workin version was around 0.8 or so. Can't remember whether this error was caused by XP's Service Pack 2.
> 
> Anyway, Mozilla 1.x works fine. Internet Explorer really sucks, so I'll use Mozilla.  Not only because of "Adblock" ... :D
> 
> Hope that the problem with Firefox will be fixed in 1.0 final.

**TwisterMc** on 2004-10-28 14:10:45
> How about new icons for images that are loading or broken?

**dory** on 2004-10-28 14:36:26
> If "Firefox broke for me around version 0.x" then it's worth trying it with a new profile - there have been a lot of changes to the profile and the extension architecture, and Firefox works extremely well for the rest of us...

**José Jeria** on 2004-10-28 15:03:44
> Kevin, how about this Firefox only regression:
> https://bugzilla.mozilla.org/show_bug.cgi?id=250355
> 
> Reminds a bit of the "Scrollbar arrows rendered incorrectly" bug.

**Kevin** on 2004-10-28 15:10:09
> TwisterMc, changing the "loading" icons is a big change though it might not seem like it .. I don't know if it'll happen for 1.0. Stephen has come up with some new icons though. Check it out: https://bugzilla.mozilla.org/show_bug.cgi?id=240463
> 
> Jose, I think that'll be fixed when I fix the scrollbar arrows bug. I'll keep that one in mind though. Thanks for pointing it out.

**TwisterMc** on 2004-10-28 15:20:46
> It's that big of a deal?  I'd never have guessed.  I just replaced the two icons by 'showing package contents' and overwriting them.  Good to know someone is working on it though.  Like the new ones a lot.

**Luke Shingles** on 2004-10-28 15:28:51
> Anon - "Why release it on 9/11? Why not 8/11 or 10/11?"
> 
> Why release it on 8/11 or 10/11? Why not 9/11?

**Kevin** on 2004-10-28 15:30:33
> The "big deal" is that these small images live outside of the Firefox themes, outside of Firefox totally. They are actually a part of the layout engine. So that means someone else is in charge there :) There may also be other requirements that we don't know about for those images such as maximum number of colors.
> 
> Hopefully I can bug the right people to get a decision by 1.0. :)

**José Jeria** on 2004-10-28 15:39:24
> Also, forgot to say that in my previous comment, I think you are doing a great job. Really. This is for sure the most proffesional theme i seen in any browser.
> 
> Keep up the good work.

**Maximilian Seifert** on 2004-10-28 15:39:40
> Although i don't now if it's in the control of the theme:
> 
> Please flatten the 'Clean Up' button the way that the 'All files downloaded to: Downloads' button is.
> 
> Also, the 'Clean Up' don't show any icon when the button is inactive.
> The icon isn't even grayed out. Just missing.
> 
> thanx max

**Peter da Silva** on 2004-10-28 15:41:09
> When you maximize the window, you need to call [NSScreen visibleFrame] and clip the resize to the result if you're not going to just do a vertical zoom. Let my docklet breathe!

**Jason** on 2004-10-28 16:50:39
> Firefox doesn't render FeedBurner RSS feeds correctly.
> 
> Info down the page on this link: http://www.feedburner.com/fb/a/faq
> 
> Example Feedburner feed at: http://feeds.feedburner.com/xtrarant (my feed)
> 
> Basically FB says about the problem at the first link: "Unfortunately, this shortcoming is due to incomplete XSLT implementation in Firefox/Mozilla and not a problem with Browser-Friendly. As instructed by our XSLT templates, IE6 renders any HTML it finds inside feed content items for the RSS and Atom feed formats we support. Current versions of Mozilla and Firefox ignore this XSLT instruction and treat this code as literal text, displaying the encoded characters. Unfortunately there is no fix we can apply on our end to improve the formatting of feed item text in the browser view. We'll certainly take advantage of any updates these popular browsers make available, however."

**Mark Carson** on 2004-10-28 16:54:22
> Is Thunderbird scheduled to achieve verison 1.0 status shortly after Firefox? Any hope of a Winstripe theme for Thunberbird by version 1.0?
> 
> Scratch and I have been working on an "Unofficial Winstripe" theme for Thunderbird which we hope will provide you guys with a good starting point. Meanwhile, it gives us a companion theme to Firefox's Winstripe theme while we wait for an Official Winstripe theme for T-Bird.
> 
> <a href="http://forums.mozillazine.org/viewtopic.php?t=127860" rel="nofollow ugc">MozillaZine forum</a>
> 
> <a href="http://markcarson.com/images/thunderbird/Screenshot-28-OCT-2004.png" rel="nofollow ugc">screenshot</a>
> 
> Thanks, we appreciate the fine work you and others have done on Firefox.

**TwisterMc** on 2004-10-28 17:51:42
> In my opinion Mark, Thunderbirds theme now is much nicer.  I'm on OS X and I love the current look and feel!

**Timothy Lim** on 2004-10-28 21:31:20
> "Aw, no sweet new FireFox-swirling-around-the-globe throbber for the official 1.0 release? ;-)
> I was kinda hoping for something like that..."
> 
> im hoping that wont happen. i imagine you remember qute and you've tried the rotating fox icons someone made out of the firefox logo?
> 
> the main reason im much happier with the current throbber (although its by no means perfect) is because i dont think function should be secondary to form. the fox around the globe trobber was unnecessarily destracting, and it doesn't have a reason to be. as compared to the current version it is much harder to ignore when you see it spinning in the corner of your eye.
> 
> the throbber performs the function of notifying you that there is currently activity within the page/site you are viewing. it should not distract you to the point it tries to attracts your attention.
> 
> * obviously that's just my opinion, and i know a lot of people dont agree with the "form should follow function" mantra, but i just wanted to explain why i dont agree on that. also dont agree with unnecessary branding.
> 
> 
> 
> Kevin, excellent work on winstripe. here are just a few suggestions;
> 
> 1. Download Manager "Clean Up" icon; the previous icon of a trash bin was in my opinion better than the current icon (looks like a red stop button).
> 
> 2. Popup Blocker notification icon; slightly increase the size of the red "X" in the icon and increase the contrast to make the red colour better stand out would improve it.
> 
> otherwise i'd say this theme is pretty much perfect :)

**James Henstridge** on 2004-10-28 21:38:34
> Jason: The feedburner XSLT stylesheet is using the disable-output-escaping attribute, which adjusts how an XSLT serialiser should output a document.  However, firefox is not using an XSLT serialiser -- it passes the result tree directly to the layout code.
> 
> There are a few ways they could get your page to display right:
> 
> 1. don't escape the content in the Atom feed.  Then you wouldn't need the XSLT disable-output-escaping hack.
> 
> 2. in the XSLT stylesheet, check for the transformiix transformation engine, and if you find it output a javascript block that essentially does ".innerHTML = .innerText" for each of the content blocks.

**Andrew Smith** on 2004-10-29 04:19:39
> The activity indicator (throbber) has no right-hand padding now on Gnome. This is less apparent with the BlueCurve theme than other themes, unless you maximize the window. I've filed bug 266648 and attached a screen shot. It would be great if you could take a look at it.
> 
> https://bugzilla.mozilla.org/show_bug.cgi?id=266648

**Thomas** on 2004-10-29 08:34:49
> The only thing I can think of is that the toolbar buttons only move 1 px to the right when you press them, and not like other buttons in Windows 1 right and 1 down (Don't know if there is a bug for this?).
> 
> I understand that replacing the icons for images that are loading or broken is a big change but I really hope that you will change it, before or after 1.0. I like the new icons.
> 
> Keep up the good work!

**Kevin** on 2004-10-29 10:25:13
> Thomas, on Windows XP with the Luna theme, IE and the MyComputer toolbar icons have the same behavior (shift to the right but not down), at least on the systems I tested. It's a little thing, but it's by design. I can be bribed to change it however. Suggested bribes: Fresh roasted Sumatra coffee, Mozilla polo shirt, new Powerbook.

**Thomas** on 2004-10-29 11:31:09
> I'm not THAT serious about it :D
> 
> I have uploaded a screenshot to show you IE's behavior on my system (and 2 other systems that I tested).
> 
> http://img23.exs.cx/img23/4678/button4.png
> 
> The Go button and the throbber in Firefox behaves like IE (1 right, 1 down).

**Thomas** on 2004-10-29 12:17:41
> By the way, in the Bookmarks Manager and in the Mozilla Firefox Help the buttons don't move at all.  I hope you will fix that too.

**Ernst Persson** on 2004-11-02 17:13:07
> Please, pretty please, do something for the Linux theme!

**José Jeria** on 2004-11-08 08:16:12
> Will these fixes make it for 1.0?

**Kevin** on 2004-11-08 10:57:06
> José, I'm rather embarrased to say that none of the bugs in the list above made it to 1.0 because they didn't get approval in time.

**Anonymous** on 2004-11-11 16:11:35
> And so at last the beast fell and the unbelievers rejoiced. But all was not lost, for from the ash rose a great bird. The bird gazed down upon the unbelievers and cast fire and thunder upon them. For the beast had been reborn with its strength renewed, and the followers of Mammon cowered in horror.
> 
> from The Book of Mozilla, 7:15

**Terry** on 2004-12-04 01:16:48
> Good work.

**Free Vision** on 2004-10-28 21:27:34
> <strong>The answer is "Mozilla Network".</strong>
> 
> OK. Since I already started thinking about Firefox, I will finish it.
> By looking at your products, I am amazed how sophisticated it has become. I am trully. Also, I am amazed how great networked engineers come together and accomplish huge work. But my q
> 
