---
title: Pinstripe for Mozilla 1.5+
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2004-05-20T20:59:59.000Z
metadata:
  categories:
    - Pinstripe Theme
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=53
  type: wordpress
  url: https://www.kmgerich.com/2004/05/20/pinstripe-for-mozilla-15/
tags:
  - pinstripe-theme
---
Finally. Here’s a version of Pinstripe for the Mozilla suite. I’m not done yet but I thought I’d share what I have so far. The status bar icons need some work. I didn’t touch the Composer or Chatzilla components so they still have a partially Classic look. [Click here to install](http://kmgerich.com/pinstripe/beta/install.php). Mac OS X only please.

This should work with any version of the Mozilla suite back to 1.5, but I have only tested so far with the latest 1.7rc. If you want to know what the theme looks like, check out the [Firefox gallery](http://kmgerich.com/archive/000049.html) and [Thunderbird screen shots](http://kmgerich.com/archive/000060.html). I welcome your questions, comments, criticism, and abuse 🙂

## Comments

**Daniel J. Wilson** on 2004-05-20 13:36:15
> I can now use a recent SeaMonkey without making my eyes bleed!
> 
> Thanks for all the great work on the Firefox and Thunderbird themes.

**Joel** on 2004-05-20 13:48:10
> Looks great Kevin! The only minor hitch was having to slightly re-size (larger) the Installation window to be able to see the OK after it was done (installing over NautiPolis, if this matters). And I second Daniel's sentiments above!

**Kevin** on 2004-05-20 14:02:23
> Thanks guys. I'm glad to know that it works :)
> 
> Since I don't use Seamonkey myself, I'm sure there are a lot of little buggy things that I won't see. Please feel free to post nitpicks. The more detail the better :)

**Daniel J. Wilson** on 2004-05-20 14:26:28
> Two icons which I don't believe have been updated or replaced:
> 
> 1. The mail icon that appears in the lower left status bar when new messages arrive does not change.  A green arrow pointing downward to the letter might work.
> 
> 2. The updated bookmark icon - the fugly standard Netscape classic icon is used.  The exact same basic Pinstripe bookmark icon could be used, but the ribbon would be colored green rather than light blue.

**Aaron Spuler** on 2004-05-21 10:01:17
> It would be a rather trivial matter to make this theme work on non-Mac platforms.  Global/scrollbars.css is the only difference.  I'd be willing to give the code for global/scrollbars.css for non-Mac platforms if desired.  I sure do wish that some progress would be made on http://bugzilla.mozilla.org/show_bug.cgi?id=222654 so that themes would truly be cross platform.  If just one file makes or breaks the theme, that is pretty sloppy in my opinion.

**Kevin** on 2004-05-21 11:11:13
> Pinstripe is for Mac users first. I think that once you take Pinstripe out of its native Mac environment, it loses some of its mojo, but maybe that's just me :)
> 
> The problem with a non-Mac version for me is there's a fair amount of tweaking to be done to end up with something that doesn't quite look at home on Windows. I'm happy to let others take Pinstripe to other platforms if they would like to make their programs look like a Mac, but I just don't have the time or inclination to do it myself.
> 
> Aaron (or anyone else), if you'd like to maintain Pinstripe for non-Mac platforms, send me an email.

**benishs** on 2004-05-21 13:35:01
> I'm very happy to finally have Pinstripe for Mozilla. A couple things I've noticed:
> 
> - I start to type something in to the addres bar, then hit the down arrow to move through the list of auto-complete choices. The entry in the address bar changes as per usual, but it doesn't highlight the part of the URL that is being auto-completed and the "selected" entry in the list of auto-complete choices doesn't highlight.
> 
> I'm not sure if I'm explaining that well - basically, as you arrow up and down through the auto-complete list nothing is highlighted, so it's a bit like stumbling around in the dark.
> 
> - It would be nice to have a hover/rollover state for the Navigation toolbar buttons. Since there are no visible borders it can be a bit hard to know which one you are over if you are near the edge. Sure, you can move more towards the one you want, but it'd be nicer/easier to just know which one you are over at any given time.
> 
> I though it particualalry odd because the tabs and Personal Toolbar have hover/rollover states.
> 
> I noticed this behavior is the same on Firefox, so I guess this is more a feature request than a bug report.
> 
> keep up the good work,
> 
> scott

**Jacob Christensen** on 2004-05-21 19:26:31
> Installed the theme on 1.8a (2004-05-20). Seems to work o.k.
> 
> A huge thank you for your elegant design work on this as well as on Firefox and Thunderbird.

**Bryan** on 2004-05-21 23:01:05
> The new tab button seems to be missing.  The close tab button is there on the right, but the "new" button on the left is awol.  I really like that feature : )  Otherwise looks good.
> 
> Bryan

**Simon G** on 2004-05-22 20:01:04
> Great! support for moz suite a last. Many thanks.

**D.Gall** on 2004-05-25 01:50:42
> I noticed the generic bookmark icon is different for the suite. Is that a change coming to the Firefox theme?

**Ryan** on 2004-05-25 17:51:34
> I love the pinstripe theme, it makes such a huge difference in terms of my user-experience. I am using 1.7rc2 and I noticed some of the favicons didn't show up in the URL window- I don't think it's related to the pinstripe theme but I just thought I'd pass it along. I look forward to seeing the next version.

**Ryan** on 2004-05-25 17:55:11
> Oh I also forgot... there are some good icons in Apple's mail and maybe a couple from Microsoft word that would work well with composer.

**Michael P. McHugh** on 2004-05-26 17:25:33
> Looking great! Two things:
> 
> 1. There's no close widget in the sidebar when it's open.
> 
> @. Also the Open New Tab widget is missing.
> 
> -Michael

**Michael P. McHugh** on 2004-05-29 15:20:01
> One other thing I noticed, is that when using Web Developer's Toolbar with the beta pinstipe theme, the spacing between the items is such that the rightmost buttons don't fit unless the browser window is a full 1024 wide or so.
> 
> It'd be nice if you could reduce the default spacing between toolbar items.
> 
> Thanks,
> Michael

**David** on 2004-05-31 22:37:10
> If possible, it would be nice to have the mailbox names not in bold in Mail & Newsgroups. I've become used to the way Thunderbird's Pinstripe works, and at a glance seeing mailbox names in bold makes me think there are new messages when there really aren't.

**David** on 2004-05-31 22:37:41
> I apologize for the error on my last comment -- I mean the account names, not mailbox names.

**Fnord** on 2004-06-07 03:01:08
> The progress wheel thing in the upper right corner (throbber?) is visible when nothing is loading. The darkest part is at the twelve oclock position. Didn't it used to be invisible when nothing was loading? I'm using Mozilla 1.6.
> 
> Other than that, thanks. It's good to have pinstripe again.

**Terrence** on 2004-06-08 19:31:55
> Yes! This is great. Very, very nicely done. Very eye-pleasing. Using Mozilla is fun again!

**Daniel J. Wilson** on 2004-06-09 12:41:24
> The installer isn't working for me with 1.7RC3.

**Norbert** on 2004-06-10 12:24:02
> For me, the installer doesn't work either with 1.7RC3 :-(
> 
> With 1.7RC2 it was okay, but i found 2 minor bugs:
> 
> 1. (as already mentioned above) It would be great if the status bar icon for Mail&News would change when  there are new mails.
> 
> 2. In the Navigator there should appear an arrow on the right end of the toolbar when there are more bookmarks than the window width allows to be displayed, such as it is e.g. in the Mozilla Modern theme.
> 
> However, the appearance of Pinstripe is great, really Mac-like. I hope it will work with 1.7RC3 soon (or, much more important, with 1.7final when it's released...)
> 
> Thanks for the work, Kevin!
> 
> Regards from Germany/Europe

**Norbert** on 2004-06-12 06:50:45
> Hello again,
> just to make more precise what i wrote 2 days ago:
> 
> > the installer doesn't work with 1.7RC3 :-(
> 
> When i try to install Pinstripe (from the web as well as from my downloads-folder), the following message appears:
> 
> ---
> The file "pinstripe3test.jar" is of type application/octet-stream (Java JAR File), and Mozilla does not know how to handle this file type.
> This file is located at: [...]
> What should Mozilla do with this file?
> () Open it with ________
> () Save it to disk
> ---
> 
> Is it a problem of the installer file or a local one?
> 
> And one more thing i have to correct:
> 
> > With 1.7RC2 it was okay
> 
> It was 1.7beta, not 1.7RC2. I already had downloaded RC2 but not yet installed it when RC3 came out, so i got a little bit confused.
> 
> Sorry, i'm not a techie - that's why i use a Mac ;-) - but perhaps someone can tell me if i can do anything or if i just have to wait for a new Pinstripe version...
> 
> Thanks in advance,
> Regards from Europe
> Norbert

**Charles** on 2004-06-26 12:58:36
> Thank you thank you thank you.  I've been eagerly awaiting your release of the theme for Mozilla, and it was well worth the wait.  I can now use my favorite browser package again!  Thanks for your hard work.

**Norbert** on 2004-06-27 12:44:59
> Hello Kevin,
> waiting 15 days since my last comment was worth it - now i tried it again with Mozilla 1.7 final version and the installer worked.
> Mozilla looks much better now :-)
> 
> Thank you for your work!
> 
> Regards from Europe
> Norbert

**Peter** on 2004-09-28 16:27:37
> This is definitely the best Mac theme I've seen. Unfortunately, I'm running the 1.8a4 Nightly from 20040927 and I'm getting crashes when I try to choose preferences -- in this case, the crash is so bad that it corrupted my entire chrome profile (lost all themes and adblock). I hope you'll be able to update the theme soonish as I doubt I'll be able to keep with it if these crashes continue.

**Axel Klaus** on 2004-11-29 03:53:29
> Great site, well done. I enjoy beeing here and i´ll come back soon. You do a great job. Many greetings.

**Thor** on 2005-01-28 10:09:48
> When autocompleting addresses, and arrowing down in the dropdown of recent addys, there is no highlight.
> 
> This is akward and frustrating.
> Aside from this-- very nice.
> 
> (Moz 1.7.3)
