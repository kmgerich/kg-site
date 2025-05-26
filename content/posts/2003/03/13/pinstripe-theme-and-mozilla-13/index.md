---
title: Pinstripe Theme and Mozilla 1.3
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2003-03-14T02:20:21.000Z
metadata:
  categories:
    - Pinstripe Theme
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=10
  type: wordpress
  url: https://www.kmgerich.com/2003/03/13/pinstripe-theme-and-mozilla-13/
tags:
  - pinstripe-theme
---
Pinstripe will not install on Mozilla 1.3 final. From the Mozilla 1.3 [release notes](http://www.mozilla.org/releases/mozilla1.3/): “On Mac OS X, XPInstall has been disabled for 1.3. This means that extensions and themes will not install for Mozilla 1.3 on Mac OS X. (bug [196959](http://bugzilla.mozilla.org/show_bug.cgi?id=196959 "Browser draws gray instead of toolbars if new window is opened with focus in an outliner"))”.

**Update** (April 22, 2003): [Mozilla 1.3.1 builds](http://www.mozillazine.org/articles/article3101.html) have been released which fixes the software installation mechanism on OS X!

## Comments

**fred** on 2003-03-13 17:10:17
> Well, I can verify it doesn't work on 1.3 Final. What in the heck is up with that?? :(

**Shylock** on 2003-03-13 17:16:06
> I just installed Mozilla 1.3 over 1.3 beta. I am able to switch from the pinball to the pinstripes theme without any problem. (Pinstripes was already installed prior to updating to Mozilla 1.3 final).

**Kevin** on 2003-03-13 18:37:25
> Apparently the software installation mechanism (which includes theme installation) is broken in 1.3 final so the Mozilla developers decided to turn the feature off for this release. Let's hope they come out with a 1.3.1 release quickly to correct the problem.

**Kevin** on 2003-03-13 18:50:52
> A workaround would be to do what Shylock did and install Pinstripe under an old version of Mozilla then upgrade to 1.3.

**Demolition** on 2003-03-14 02:26:23
> Like Shylock, I also installed Mozilla 1.3 Final over Mozilla 1.3 Beta, but it still started up with the Modern theme.  Looks like I'm stuck with it since the Classic theme has problems according to the release notes.  Oh well.
> 
> D.

**Shylock** on 2003-03-14 05:38:39
> Demolition: Perhaps I succeeded in using the Pinstripe theme because Pinball was my active theme prior to installing Mozilla 1.3 Final.

**Rifton** on 2003-03-14 10:51:13
> This is such bad news (for now). I can't use Mozilla with out Pinstrip installed bacause all the other themes are way to ugly. Pinstrip is the best theme Mozilla has, I'll miss it for now.

**Crispin** on 2003-03-14 14:04:34
> The other option is to download one of the new nightly builds and use them. I am using Pinstripe with Build 2003031103 Mozilla 1.4a and it works great.

**Jesse** on 2003-03-14 15:10:49
> Seems like there ought to be a better workaround: can't we just download the pinstripe .jar file (or whatever it is) and install it manually?  Or are there too many things to change for this to be practical?

**Kevin** on 2003-03-14 16:28:29
> This is just crazy enough it might work. To manually install Pinstripe first close Mozilla then:
> 
> 1) Download pinstripe.jar and copy it to your ~/Library/Mozilla/[profile name]/[random string].slt/chrome folder.
> 
> 2) In that same folder, open the CHROME.RDF file in a text editor. BACKUP this file before you modify it!
> 
> 3) Copy the code below to a text editor.
> 
> 4) It is IMPORTANT that you change the bits that are in brackets to reference your own user name, profile name, and randomly named slt folder.
> 
> 5) Copy the modified text and paste it just before the last line of the chrome.rdf file and save the file.
> 
> 6) Open Mozilla and you should have Pinstripe in your theme list and be able to switch to it.
> 
> Let me know if this works. I did it on my machine but I'm not positive it'll work on yours.
> 
> <a href="http://kmgerich.com/archive/chromebits.txt" rel="nofollow ugc">Download Code snippet here</a>

**Xian** on 2003-03-14 17:41:45
> Even crazier than that. I just downloaded the <a href="http://ftp.mozilla.org/pub/mozilla/nightly/latest/mozilla-mac-MachO.dmg.gz" rel="nofollow ugc">Latest nightly build</a> instead of the "official" 1.3. And downloading/installing themes works correctly.
> 
> Hopefully that fixes it for all of you.

**Kevin** on 2003-03-14 19:44:51
> But that's no fun. You didn't edit a single config file by hand!
> 
> Seriously though, the recent nightly builds will install Pinstripe but are probably more unstable than the 1.3 release. YMMV.

**Michael Adams** on 2003-03-15 08:22:05
> Thanks kevin, the manual technique you described works just fine on my moz1.3 final; no problems at all!

**Dan** on 2003-03-15 12:32:16
> Thank you, Kevin! It worked just fine for me, all I had to do was switch the theme in the menu and restart again. You saved me from having to use Camino .7 (which doesn't work with some of my favorite sites) as my default browser.

**Yuri** on 2003-03-20 16:11:22
> Thanks Kev. This theme is really what I was looking for. It also has the potential to get better. I got the 1.3 version of Mozilla and with the technique you described before (editing the chrome.rdf), this is working just fine.

**Jason** on 2003-03-21 02:43:34
> Hi Kevin,
> Anyone have any problems using the manual method above? I edited the chrome.rdf file following the instructions but I just end up with a blank browser window. No widgets etc. I added my own info (using search and replace) and eyeballed it and it looks fine to me (verified paths etc). Tried several times with the same results. Anyone have any ideas as to why this might not be working?
> Thanks

**Kevin** on 2003-03-21 05:26:21
> Jason, it's important to replace the text in brackets (like [profile name] and [your user name]) with the the info on your particular machine so Mozilla will know where to find Pinstripe. Go double check that you didn't spell anything wrong. It's also important that the pinstripe.jar file is in your Mozilla chrome folder. Doublecheck that the file is in the right place. By the way these instructions will work only for Pinstripe Blue, not Graphite.

**Jason** on 2003-03-21 17:57:11
> Yes! Thanks for the reply Kevin. I had pretty much given up since I felt confident I had edited the file properly but decided to give it one more go after reading your reply. On a whim I downloaed the .jar file again and sure enough my old one was apparently corrupted. It's file size was less than 300k. I replaced the bad .jar with the freshly downloaded and voila! Thanks again Kevin for making the best looking/functional Mozilla theme hands down.

**Mike** on 2003-03-23 17:05:00
> I can confirm that pinstripe works on Mozilla 1.3, Nightly build id 2003032309.
> 
> Just installed it.

**John** on 2003-03-26 19:43:30
> Thanks Kevin! The manual method worked fine with Pinstripe Graphite. (Mac OS X 10.2.4, Moz 1.3f). I simply renamed pinstripe_graphite.jar to pinstripe.jar.

**Demolition** on 2003-04-01 04:06:24
> Kevin,
> 
> Finally got around to trying your manual Pinstripe install method.  Works like a charm.  Thanks, man!
> 
> D.
> 
> 
> p.s. Happy April Fools' Day, y'all.  ;-)

**Bill** on 2003-05-28 08:36:40
> Pinstripe seems to be broken in OS 10.2.6.  The Personal Toolbar no longer is visible.  As you toggle the view on/off, a thick line appears/disappears, but no toolbar.  Happened on both my desktop and PB as soon as I upgraded to 10.2.6.
> 
> I am running a different theme for OS X.  I haven't tried going back to default Aqua to see if that brings back the toolbar.

**whois** on 2003-08-22 21:36:24
> Interesting. My previous post is missing.
