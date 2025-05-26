---
title: Pinstripe Theme Updated
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2003-03-06T08:59:05.000Z
metadata:
  categories:
    - Pinstripe Theme
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=8
  type: wordpress
  url: https://www.kmgerich.com/2003/03/05/pinstripe-theme-updated/
tags:
  - pinstripe-theme
---
I’ve made some minor tweaks to the [Pinstripe Theme](/pinstripe/pinstripe.html) to bring it up to date with Mozilla 1.3. If you have any questions you can leave a comment below or send me an [email](mailto:webmail@kmgerich.com).

## Comments

**Bhaveshp** on 2003-03-07 00:52:47
> Can't install your 3/5 build on the current Mozilla Nightly.  Upon clicking install, get error message that says I must use OS X to install....

**Kevin** on 2003-03-07 07:39:47
> I assume you are using OS X. You haven't modified your User Agent id, have you? I have a little Javascript that detects the string "Mac OS X" to discourage Linux and Windows users from installing Pinstripe. If you haven't changed your user agent, let me know.

**Neil** on 2003-03-08 00:52:22
> Worked fine for me. Very nice, tasteful tweaks, Kevin!

**King-On Yeung** on 2003-03-09 09:38:26
> Nice job.
> 
> I like the download progress indicator on the tab very much (vs classic theme)
> 
> any planning (is it possible?) on the look of progress bar in download manager window?
> 
> Thx.

**Bhaveshp** on 2003-03-11 18:17:16
> Yep, it was a modified userid.  Fixed that and pinstripe installed just fine.
> 
> Looks great.  Thanks!

**Alex** on 2003-03-13 23:46:29
> Is it just me or is the tab in the latest theme doesn't get the focus set? I am using the latest nightly from 3/14.

**Kevin** on 2003-03-14 07:34:48
> Alex, I saw that too. I think that's a bug in the latest nightly build. We should expect some strangeness in the nightly builds for a while because I expect that some of the new code for version 1.4 is landing and will cause instability. A good method to know if a bug you see is Pinstripe related or Mozilla related is to switch to Classic and see if the bug still exists. If not, it's probably a problem with Pinstripe.

**Alex** on 2003-03-14 23:28:06
> Understood. Here is another bug. The bookmark from the bookmark bar appears to be blank when in 'focus', i.e. mouse over. This does not happen when in Modern theme.

**Kevin** on 2003-03-16 20:44:11
> FYI, <a href="http://bugzilla.mozilla.org/show_bug.cgi?id=197107" rel="nofollow ugc">here's the bug report that covers both issues</a>.

**Simon** on 2003-03-19 19:44:30
> Just an opinion - but I'm not a fan of having the progress indicator included in each tab. I'd rather have one overall one, that spins in relation to the tab currently in focus.
> 
> I open a bookmark group every morning with a dozen tabs in them, and the 12 twirling indicators are just waay too much for me (maybe because I've yet to have a coffee!).
> 
> Also, the font used in the email client for account/folder pane and the email list (as shown in the screenshots) I find just a bit blocky. Perhaps a Mac font - LucidaGrande might be better?
> 
> I find the "appearance font" settings in moz don't effect the email client here.
> 
> In ANY case - love the theme, love mozilla.
> 
> Cheers,
> Simon

**Kevin** on 2003-03-19 19:55:10
> Simon, thanks for the comments. The font for email is the system font bumped up a bit bigger than the default. If your system font is Lucida Grande, then that's what you should see. I took a hint from Mail.app on the font size and I think it works well. Do you have your system fonts set at something other than the Mac OS X default? If you could <a>send me a screenshot</a>, that would be very helpful. Thanks!
> 
> Kevin

**Simon** on 2003-03-19 20:23:47
> Ahhhh -
> 
> Sorry, it is Lucida Grande, just a point size higher - gotcha.
> 
> Heres my system:
> 
> OSX
> System Font: Lucida Grande, 11pt
> Fixed pitch font: Monaco, 10pt
> Application Font: LucidaGrande, 11pt.
> (fonts as seen through tinker tool)
> 
> Moz
> Proportional: Serif 11px
> Serif: Lucida Grande
> Sans-serif Lucida Grande
> 
> 
> so with these settings, I can see the Moz account folder pane and email list is Lucida Grande 12px.
> 
> Comparing it to Mail.app - yep, I can see that its the same size as the mailbox panel. But their mailbox panel is (making assumptions here) is most likely for intro users(?), who may have a limited number of accounts and sub folders.
> 
> I keep track of 5 email accounts, each with 2-3 levels of folders and mail storage. Hence my  desire to make the view "lean and mean" (and as small as possible).
> 
> some other points - Even though Mail.app mailbox font is 12px, the email message browse looks to be 11px.
> 
> and the moz preferences category tree-view looks to be 11px.
> 
> Phew!!!!!!
> 
> Sorry if that got a bit long winded. Its a great theme - I'm sure I could probably open it up and modify the CSS myself (am tempted to try this ..) because I fully appreciate you can't please everyone!
> 
> Again - as I said, great theme, great browser. Keep up the good work!
> 
> Cheers,
> Simon

**Kevin** on 2003-03-19 22:02:05
> Simon, add this bit of CSS to the userChrome.css file (in your ~/Library/Mozilla/{profile name}/xxxxxxxx.slt/chrome folder)
> 
> treechildren:-moz-tree-cell-text {
>   font-size: 100% !important;
> }
> 
> That should work. I haven't tested it so it may effect other parts of the theme but I don't think so because Mail is the only place I make the font size 110%.

**Simon** on 2003-03-22 22:55:56
> Kevin you're a legend!!
> 
> Thats great - works a treat. Now I can have my cake and eat it too ...
> 
> Thanks & Cheers,
> Simon

**Ry Dude** on 2003-04-03 15:30:41
> Hello, your skin is great. Just one thing. I have found a add-on from the internet you may want to add on to your Skin. It is a Home Button for the Navigation bar, It's a great add-on and would be great if you made it appliable on your skin. Here is a link: http://home.no.net/trihand/mozilla/home/en/
> 
> Thank You for your time..
> Ry Dude
> 
