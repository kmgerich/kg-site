---
title: Mozilla Firebird update (aka the Rubber Chicken build)
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2003-05-02T20:15:44.000Z
metadata:
  categories:
    - Firefox
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=16
  type: wordpress
  url: >-
    https://www.kmgerich.com/2003/05/02/mozilla-firebird-update-aka-the-rubber-chicken-build/
tags:
  - firefox
---
Aren’t codenames fun? I was going to wait for Firebird 0.6 but since a few of you have asked for a new build, [here it is](http://kmgerich.com/misc.html). The much hated bookmarks bug has been fixed among other things. Check out the included README file for a little more info.

If you’re having trouble downloading the file, please look at the [comments](http://kmgerich.com/archive/000017.html) for a mirror of the file.

## Comments

**Jon Hicks** on 2003-05-02 12:18:55
> All seems fine and dandy so far. Uncompressed and installed with no problems, running as fast as ever! Good work.
> 
> The preferences option is greyed out though - is that meant to be?

**Kevin** on 2003-05-02 12:42:52
> Yeah. You'll find the prefs under Tools > Options...
> 
> The interface of Firebird was rewritten and at the time it was not intended to run on the Mac. So in many places the code that the Mozilla developers put in place to make Mac Mozilla work never got over to Firebird. I expect this to change once Mozilla.org officially supports Firebird on the Mac.

**Jim** on 2003-05-02 13:46:14
> The first time I downloaded it, I got "Download decoding failed".  The second time, it extracted fine.  Weird.
> 
> Other than that, it seems to work fine.

**JimS** on 2003-05-02 13:55:42
> Mozilla Firebird decompressed and installed just fine.
> 
> John-
> If you close all windows inside of Mozilla Firebird you should find that Preferences is no longer grayed out and is accessible. This is how you will need to access any settings for extensions you may add to Mozilla Firebird, such as Preferences Toolbar.
> 
> Kevin-
> So far this sucker is working like a charm. Thanks for everything. It is most appreciated.

**JimS** on 2003-05-02 14:21:13
> Okay. I have noticed a couple of quirks. I don't know yet if they are bugs in Mozilla Firebird or just this MacOS X build. If I access and change any preferences, my bookmarks will no longer work until I restart Mozilla Firebird. Also, I noticed that when I select a bookmark it always opens in a new window. I can't get the bookmark to open in the existing window. If there is a setting I have missed I would love to be directed there.
> 
> Otherwise, I am thoroughly enjoying this MacOS X port of Mozilla Firebird.

**kaos** on 2003-05-02 18:06:12
> Download decoding failed.
> Download decoding failed.
> Download decoding failed.
> Download decoding failed.
> Download decoding failed.
> Download decoding failed.
> 6 times

**Stefan Urbat** on 2003-05-02 19:11:41
> Seems to work fine at least at the moment --- some minor flaws have gone. Especially good for a thing, which has to be considered as a nightly build. And the official nightly ones I tested the last days on GNU/Linux and Solaris work no better... Also no problems with downloading and installing encountered.

**kaos** on 2003-05-02 19:53:30
> Your download is worse than a virus! No current browser is capable of downloading it past the 3MB mark.... and stuffit will expand the corrupted download to about 50 MB of trash info. Really, check that out. I am beginning to believe that the other posters are relatives of yours or liars...., or possibly both.

**Derek Scott** on 2003-05-02 19:53:42
> JimS: The bug where bookmarks open up in a new window instead of the current one has been around since the initial unofficial build of Phoenix for OSX.  Hopefully that bug will get fixed eventually.
>   Also I noticed that if you use the Tabbed Browsing Extension you lose the ability to select any of your bookmarks, for some reason a blank bookmark Properties window pops up instead, which is too bad because the Tabbed Browsing Extension adds some really useful tab related functionality.

**ndjhfuydnhfjhry@mndhrj.com** on 2003-05-02 20:09:19
> learning how to make a dmg.gz file would help a lot!

**Scott Henderson** on 2003-05-02 22:04:56
> Dowloaded and gzipped just fine here. Very impressive for a nightly build. Seems a tad faster overall than Safari and the interface is light years cleaner.

**Kevin** on 2003-05-02 22:06:55
> No need to resort to insults, kaos. I'm not sure why your download isn't going through all the way. I've downloaded twice myself from home and work. It may be my ISP that's being flaky. Would someone be so kind as to mirror the file? Anyone else have ideas why some people would get the "Download decoding failed"?

**kaos** on 2003-05-03 08:33:16
> sorry... didn't mean to insult you. I really like your build and am frustrated that I cannot download it. I have tried from two different dialups and one cable connection, at least four times at each. One time I got a 60 MB download and a crashed system [10.2.5]... Other times I got total corruption, on three different ISP's.

**Kevin** on 2003-05-03 09:55:36
> Here is a mirror of the file (Thanks Wil!)
> 
> <a href="http://homepage.mac.com/scotth115/MozFirebird-Mac-20030430.dmg.gz" rel="nofollow ugc">Download link</a>
> 
> Please use this link only if you have problems downloading using the main link.

**kaos** on 2003-05-03 12:53:43
> Thank you very much, especially for your patience. I apologize again for my comments. The reason I have a tendency to blame the file is because of some of my own miserable efforts along this line. I was projecting, so to speak.
> 
> And thanks Wil..., whoever you may be!
> 
> After the "Rubber Chicken" release, maybe a Baby Duck release would be apropos..., to celebrate, of course!
> 
> BTW... do you know why the dinosaur crossed the road?
> 
> Because there were no chickens yet at that époque ..

**David** on 2003-05-03 21:25:45
> I also seem to have problems downloading from here, but I have a couple of friends that will download it and mirror it for me.

**ube** on 2003-05-04 03:28:01
> Hi,
> Thanks for building this for us and all :)
> 
> I was just wondering how long did it take to build? :)
> 
> Thanks

**Stefan Urbat** on 2003-05-04 14:05:33
> There appeard officially on mozilla.org in the nighties directory
> 
> ftp://ftp.mozilla.org/pub/phoenix/nightly/latest-trunk/
> 
> a nightly build for Mozilla Firebird, still named Phoenix as file. It seems to me no noticeable different (save for the build date, one day difference) to your last build either way; are you involved or did they indenpendently?

**Jinketsu** on 2003-05-04 19:06:39
> Will there be a pinstripe theme for firebird? I installed it to see what would happen and it just gave it an aqua bg and the Mozilla open and close tabs. :)

**Stefan Urbat** on 2003-05-05 00:23:03
> When I tried some days ago, virtually no theme worked correctly with current Firebird builds but Coffein (this last is used by me on OS X and Solaris as well). The build-in default theme Luna is an ugly XP Trojan/monopoly shit and IMHO totally unacceptable.

**Wil Henderson** on 2003-05-05 12:40:35
> Kevin,
> 
> I noticed that this build is not listed on Versiontracker but is listed on Macupdate. Any reason for that (then than VT being evil incarnate)?
> 
> Wil

**Kevin** on 2003-05-05 16:21:15
> Wil, I don't advertise my build of Mozilla Firebird at all except to the Mozilla development and testing community. So I'm not sure what VT and MacUpdate do.  Why is VT evil incarnate?
> 
> Stefan, my build of Firebird was independant of the Mozilla.org developers.

**Wil Henderson** on 2003-05-05 21:16:39
> Kevin-
> 
> Seeing as OS X Firebird has gone legit I'll take the mirror down.
> 
> VT went from an indispensable, visit everyday asset to a slow-loading, ad-riddled, spam inducing data miner. I'm sorry to see it's sad decline....

**mog** on 2003-05-07 02:31:49
> Re downloading, I have found some browsers, Mozilla, Camino, have a problem with completing downloads if one is running Airport. Stuff comes out garbage. It is a known bug. I did file an update that it affected Camino at bugzilla. Seems not to have affected Firebird so far.
> 
> Now I have noticed that installing the pinstripe theme wasn't a total success here as I got the old icons and the back ones doesn't quite fit, looks jagged. Haven't played much to find other bugs. I do like your theme the best.

**mog** on 2003-05-07 02:40:21
> OK, I did notice one. When I submit a comment, the page doesn't refresh. I am testing the latest nightly for each of my Mozilla browsers so I'll be spending time at bugzilla. I am aware this is an early build and hopefully will become more OS X like as time goes on.
> 
> And there's no text option in case I don't like the icons. Yours are nice but I can't get them to work.
> 
