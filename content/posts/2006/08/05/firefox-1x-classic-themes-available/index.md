---
title: Firefox 1.x Classic themes available
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2006-08-05T22:10:44.000Z
metadata:
  categories:
    - Firefox
    - Pinstripe Theme
  uuid: >-
    11ty/import::wordpress::http://kmgerich.com/2006/08/05/firefox-1x-classic-themes-available/
  type: wordpress
  url: https://www.kmgerich.com/2006/08/05/firefox-1x-classic-themes-available/
tags:
  - firefox
  - pinstripe-theme
---
![Winstripe preview](winstripe_preview-7xosQc9FtE53.png)  
The Firefox 1.x classic default themes, called Pinstripe on Mac and Winstripe on Windows, are available for your installing and downloading pleasure.

These are simply stand-alone versions of the Firefox themes before the [Firefox “visual refresh”](http://wiki.mozilla.org/FX2_Visual_Update/Default_Theme_Update) landed. The themes require at least Firefox 2.0b1. I will work on them in the coming weeks to smooth out the rough spots. I tested the themes on my machines but they may be buggy. Please let me know if they don’t work for you.

[Install Pinstripe FF Classic (Mac only)](javascript:void\(InstallTrigger.installChrome\(InstallTrigger.SKIN,'http://kmgerich.com/downloads/pinstripe_ff_classic_0.9.jar','Pinstripe FF Classic v0.9'\)\))

[Install Winstripe FF Classic (Windows only)](javascript:void\(InstallTrigger.installChrome\(InstallTrigger.SKIN,'http://kmgerich.com/downloads/winstripe_ff_classic_0.9.jar','Winstripe FF Classic v0.9'\)\))

[Download Pinstripe FF Classic](http://kmgerich.com/downloads/pinstripe_ff_classic_0.9.jar)  
[Download Winstripe FF Classic](http://kmgerich.com/downloads/winstripe_ff_classic_0.9.jar)

By the way, you can get the [Illustrator and Photoshop files used to make these themes here](http://kmgerich.com/2006/07/11/firefox-browser-ui-artwork-released/).

## Comments

**Jonathan Stanley** on 2006-08-05 13:42:03
> Whilst I can see the theme refresh has broader appeal and does actually work quite well within Windows XP's Luna theme... it really feels out of place under Classic with OS palette changed to that of Windows 2000.
> 
> So I'm glad that Winstripe is sticking around and hopefully carry on being maintained too. :D

**Download The Firefox 1.x Classic Theme - CyberNet News: Hardware, Downloads, Gadgets...Technology Done Right!** on 2006-08-05 14:39:55
> [...] There are quite a few people who were &#8220;not pleased&#8221; (to put it nicely) with the new Firefox 2 theme. It was obvious that someone would put together a classic version of the original Firefox 1.x theme but I didn&#8217;t think it would take longer than one day. [...]

**Rafael** on 2006-08-06 12:51:16
> Do you know why the "Go" button was combined w/ the search field?  I don't like having the "Go" button up there.  It's very strange.
> 
> Also, a nit.  The magnifying glass seems off in Winstripe Classic for Windows.  It seems out of place.  But thanks for maintaining this theme.

**Kevin** on 2006-08-07 08:38:12
> Rafael, I think the Go button being attached to the search field is a bug. Here are <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=347454" rel="nofollow ugc">all the bugs related to the visual refresh landing</a>.
> 
> I haven't had a chance to clean up the Classic themes yet. The first step was packaging them up into stand-alone themes. I'll be updating them soon.

**LamaBlog &raquo; Blog Archive &raquo; Blekere Firefox** on 2006-08-23 04:15:13
> [...] Vel vel, jeg blir vel vant med dette også, og om ikke så har jeg alltids muligheten for å få det gamle utseendet tilbake. [...]

**josh** on 2006-08-29 14:43:50
> thanks

**LimitedMage** on 2006-08-31 22:02:58
> I'm using Firefox 2.0 beta2 and this theme looks extremely weird... the go button is enormous! Please fix this!

**Kevin** on 2006-08-31 22:24:14
> I'll have a new version of Pinstripe soon. I haven't worked on Winstripe at all yet. If someone wants to help out, that'd be great.

**Will** on 2006-09-01 06:01:39
> For those having problems with the go button in the new beta...
> 
> http://forums.mozillazine.org/viewtopic.php?p=2449400#2449400

**Demetris** on 2006-09-01 15:17:25
> Thanks for this theme! Beta 2 looks really ugly on Windows Classic. I also installed the extension mentioned by Will to fix the Go button.

**Matt** on 2006-09-02 01:52:14
> Thanks for this theme, the "refresh" is disgustingly non-native. Speaking of which, when you update Winstripe, can you make the search go button like the other navigation bar buttons please? Native bevel included ...
> 
> Thanks again!

**Davide** on 2006-09-02 04:51:06
> What about Linux? Can we install Winstripe or are you going to release a specific Gnomestripe version?
> Thanks.

**Hasan** on 2006-09-04 10:34:26
> I installed this on 2.0, and it looks like the new theme coding has made the Go Button FUBAR. Adding the following to userChrome.css seems to fix it, plus some other issues...
> 
> * Classic Theme Fixes */
> #go-button {
>   -moz-box-flex: 0 !important;
>   margin-right: 5px !important;
>   padding-right: 3px !important;
>   padding-left: 2px !important;
> }
> 
> #go-button .toolbarbutton-text {
>   display: none !important;
> }
> 
> .search-go-button-container {
>   border: none !important;
>   margin-right: 2px !important;
>   margin-left: -1px !important;
>   -moz-appearance: none !important;
> }
> 
> .search-go-button {
>   padding-right: 0 !important;
>   padding-left: 4px !important;
>   margin-top: 2px !important;
>   margin-right: 2px !important;
>   margin-bottom: 2px !important;
>   -moz-appearance: toolbarbutton !important;
> }
> 
> .searchbar-textbox {
>   height: 22px !important;
> }[/code]
> 
> 
> I've only tested this on Windows XP. If your OS theme is Classic, remove the margin-top and margin-bottom styles from .search-go-button.
> 
> Hope that helps.
> 
> http://www.mozilla.org/support/firefox/edit#css

**Hasan** on 2006-09-04 10:35:37
> PS: ^That's for those who don't want to install an additional extension;)

**Legege** on 2006-09-04 22:12:05
> Or a bit simpler
> 
> #go-button {
>   -moz-box-flex: 0 !important;
>   margin-right: 5px !important;
>   padding-right: 3px !important;
>   padding-left: 2px !important;
> }
> 
> #searchbar {
>   background-color: -moz-field;
>   border: 1px solid #96969D;
>   min-height: 22px;
>   margin-right: 5px !important;
> }
> 
> .searchbar-textbox {
>   margin: 0px !important;
>   padding: 0px !important;
>   border: none !important;
>   -moz-appearance: none !important;
>   -moz-border: none !important;
> }

**Kevin** on 2006-09-04 22:14:39
> Thanks Hasan and Legege! I'll try to incorporate those CSS changes soon.

**Hasan** on 2006-09-05 08:29:03
> @Legege,
> 
> Nice! Love your search-go-button styling.
> 
> @ Kevin, thanks for updating this theme for 2.0. You wouldn't believe the amount of criticism the new theme is getting @ forums.mozillazine.org.
> 
> When you update the theme, maybe you can let people know about it by posting here...
> 
> 
> http://forums.mozillazine.org/viewtopic.php?t=459942

**Tema visual de Firefox 1.x | PuntoGeek** on 2006-09-05 20:42:34
> [...] Con el nuevo tema visual de Firefox 2.0 el &quot;viejo&quot; se va a perder (que dicho sea de paso el nuevo es CASI igual al anterior), por esto, alguien puso a disponibilidad el viejo tema para instalar en la versi&oacute;n 2.0. [...]

**Matt** on 2006-09-06 14:10:53
> Just saying I prefer it with both of the selector and the search go button outside of the box, the former makes it more obvious that the search engine can be selected and the latter just looks better :)
> 
> Do any of you know how to make the search engine text box the height it is using Legege's solution, whilst having both of the aforementioned items outside of the box whilst *gasp* getting rid of the grey background of the bevelled search button? Giving the search selector a native bevel on hover would also be great. Thanks in advance :D

**FireFox 2 Beta 2 at Patrik Spiesecke** on 2006-09-06 14:33:41
> [...] FireFox 2 Beta geht in die zweite Runde. Mit sehr vielen neuen grafischen Details erscheint die Beta 2. Die oben gezeigt Icons, zeigen das neue Standart Theme unter Windows. Wer die alten Icons dennoch schÃ¶ner findet, aber nicht auf den FF2.b.2 verzichten will kann sich auch das Firefox 1.x Classic themes von Kevin Gerich herunterladen. Firefox 2 Beta 2 is a developer preview release of our next generation Firefox browser and it is being made available for testing purposes only. Firefox 2 Beta 2 is intended for Web application developers and our testing community. Current users of Firefox 1.x should not use Firefox 2 Beta 2 and expect all of their extensions and plugins to work properly. [...]

**netster007x** on 2006-09-14 01:26:44
> Iâ€™m using the latest nightly and i see an incredibly long â€œgoâ€ button, as well as an extra thin search box.  It is also connected to the address bar, but I don't mind that.  What I mind is it's RIDICULOUS horizontal length
> 
> Other that that, not bad; although it is pretty noticeable that itâ€™s not real.
> 
> GO button and search box MUST be fixed before i can consider actually using this theme.

**from_brasil** on 2006-09-14 10:17:24
> Please, don't forget to create a version for Linux!
> 
> Thanks.

**Friendly Mozilla User (FMU [pronounced like canoe])** on 2006-09-14 13:43:22
> When will you implement the fixes posted in the above comments.  I, and many other people, do not want to have to change their userChrome more than necessary. Also, will you consider putting this on the Addons web site?

**Matt** on 2006-09-15 04:23:37
> Just thought I'd give the heads up that the background for the search button is fixed now, presumably due to the aforementioned button being fixed to inherit the native background - it's no longer grey.
> 
> One of the check ins for the drop down button has caused a problem though - it is too wide and shifts when the length of the string within location bar changes.
> 
> Has anyone know the fix for the latter? And also, how to give the search drop down selector a native bevel.

**Matt** on 2006-09-15 05:11:48
> Mm, partial "fix":
> .searchbar-engine-button {
> -moz-appearance:toolbarbutton !important;
>  padding: 5px
> }
> 
> Simple, really *slaps self on forehead*.
> 
> I don't know how the background hover state works, is it an additional image?

**Hasan** on 2006-09-15 12:25:00
> @netster007x,
> 
> that sounds like your not using the default theme. Anyway...
> #go-button {
>   -moz-box-flex: 0 !important;
> }
> ...should fix the go button.

**oldskool** on 2006-09-16 21:53:51
> Thank you for the Fx 2b2 theme fix!
> 
> Thank you!
> 
> Thank you!
> 
> Did I say thank you?!
> 
> :)

**à¹„à¸¡à¹ˆà¸Šà¸­à¸šà¸‚à¸µà¹‰à¸«à¸™à¹‰à¸² Firefox2 ? â€¢ FiRE.F0NT.COM** on 2006-09-19 04:09:19
> [...] à¹„à¸›à¹‚à¸«à¸¥à¸”à¸—à¸µà¹ˆà¹€à¸§à¹‡à¸š kmgerich.com à¹€à¸¥à¸¢à¸„à¸£à¸±à¸š [...]

**Nick** on 2006-09-22 08:46:12
> The windows version of the theme works ok in Linux (gnome at least), although the "Go" button is a bit too big - but definitely an improvement on the ffox 2 default theme!

**Ola** on 2006-09-27 03:38:31
> Thanx thanx thanx. Hated that new FF theme ..

**Pinstripe for Firefox: Now with 20% more Macintosh : pretty widgets** on 2006-09-27 09:55:08
> [...] This update to the stand-alone Pinstripe theme turned out to be more of a redesign than I originally intended. Stephen Horlander sent in a cool concept for the browser tabs. Check out the etched text on the inactive tabs. You&#8217;ll see some of the other details in the screenshot below. The theme has some rough edges but should be usable. As always I appreciate your feedback. [...]

**Sethramoth** on 2006-10-07 00:49:32
> I have uploaded a modified version of Kevin's Winstripe theme here:
> 
> http://www.megaupload.com/?d=ZRJADU9E
> 
> It fixes the problem regarding the search box being too wide. I have only tested it on my own system, so I can't guarantee that it will be bug free.

**Bigbootay** on 2006-10-08 03:36:00
> First, thanks for this. I could fill up the whole message box with "HATE", and it still wouldn't cover how I feel about the v2 skin.
> 
> But I'm having a problem when I visit "The Register" and ONLY when I visit the Reg. I've posted a screen capture at ImageShack:
> 
> http://img147.imageshack.us/my.phpimage=searchboxglitchatregisterhg6.gif
> 
> Please note the TWELVE magnifying glasses next to the oversized search box. They appear whether the I've edited the userChrome to remove the Go and Search-Go buttons or not, and nothing like it happens with the default look... which may be the only nice thing I can say about it.
> 
> This capture also shows all errors displayed in ConsoleÂ² while at the site. If there's more I can do to help, let me know.

**Legege** on 2006-10-08 09:37:38
> @Bigbootay,
> 
> You can use this userChrome.css:
> http://legege.com/mozilla/bugs/userChrome-winstripe-fx2.0rc2.css

**Florian Schmitz** on 2006-10-09 13:17:26
> And here is a fully 2.0 RC2 compatible version of the 1.5 theme:
> https://addons.mozilla.org/firefox/3479/
> 
> It doesn't apply CSS fixes to the theme mentioned here, but has been developed independetly. All areas have been updated carefully so it should feel quite polished. Some icon updates (effects for small icons in address bar) are also included. The theme will at least be maintained for all Firefox 2.0.* versions.

**Pinstripe For Firefox 2.0*** on 2006-10-15 07:49:15
> [...] Pinstripe For Firefox 2.0*  This update to the stand-alone Pinstripe theme turned out to be more of a redesign than I originally intended. Stephen Horlander sent in a cool concept for the browser tabs. Check out the etched text on the inactive tabs. Youâ€™ll see some of the other details in the screenshot below. The theme has some rough edges but should be usable. As always I appreciate your feedback. [...]

**Rich** on 2006-10-15 21:09:43
> Legege, the link
> 
> http://legege.com/mozilla/bugs/userChrome-winstripe-fx2.0rc2.css
> 
> is broken.  Can you get that file back up on your site, or maybe post the CSS code here as another comment?  I'm having the same problem as Bigbootay, and the theme Florian Schmitz links to (Winestripe 0.9.1) doesn't look as nice as Winstripe.  I'd like to know what code I can put into my UserChrome.css file to fix that one remaining issue in Sethramoth's theme.
> 
> Sethramoth, your theme is very nice, and I like how you applied the fixes.  I am using your theme.  Maybe you can fix this thing with the 12 magnifying glasses?  It only comes up rarely, on websites that embed OpenSearch plugins.
> 
> And for Kevin Gerich, the original theme developer, I hope you come out with a new version of your Winstripe theme that incorporates these fixes.  Thank you everybody for your hard work!  I wish I knew how to make themes!  (Please don't tell me.)

**Legege** on 2006-10-22 15:16:18
> Sorry, the link is working now.

**The new fox at BOK** on 2006-10-23 09:23:56
> [...] Only a couple of previous installed extensions -now called &#8220;add-ons&#8221;- failed to work, but I needed two of them specifically: SwitchProxy Tool 1.4 and del.iciou.us v1.1. I hacked around these by unzipping the XPI-file and editing the included RDF-file that holds the lowest and highest compatible version-information. Afterward I reZIPped the files and renamed it with the XPI-extension. Install and presto! What I don&#8217;t like in this new version is the default installed theme. I was using a Flock-lookalike, but this time I installed the Winstripe Classic FF-theme. Now let&#8217;s see what issues the upgrade on my iBook G4 will bring this evening when I get home. [...]

**Mi blog mania - Dmoz** on 2006-10-23 18:50:48
> <strong>Firefox 2.0 Final Sale al pÃºblico...</strong>
> 
> Al fina, la nueva versiÃ³n ha salido. Las actualizaciones comenzarÃ¡n el dÃ­a de maÃ±ana para todos, pero si se quieren adelantar:
> Descarga Firefox 2.0
> Linux, Mac
> Â¿No te gusto el nuevo &#8220;theme&#8221;?
> Descarga theme clÃ¡sico
> AlgÃºn plugin (extes...

**Absolutely No Machete Juggling &raquo; Turning Firefox 2 Into Firefox 1** on 2006-10-24 18:53:17
> [...] To fix this, simply install the theme &#8220;Winstripe FF Classic&#8221;. You can find a link here. [...]

**Robbie** on 2006-10-24 19:37:55
> Looks like official 2.0 released messed up the search box and the new close tab icons on the Mac. Any chance we could get a quick update on the Pinstripe FF Classic for OS X?
> 
> I know you'll probably say just use the new Pinstripe, but I like the classic FF look.
> 
> Regardless, thanks for your work!

**CODE|æºç  &raquo; Pinstripe for Firefox** on 2006-10-25 22:04:48
> [...] This update to the stand-alone Pinstripe theme turned out to be more of a redesign than I originally intended. Stephen Horlander sent in a cool concept for the browser tabs. Check out the etched text on the inactive tabs. Youâ€™ll see some of the other details in the screenshot below. The theme has some rough edges but should be usable. As always I appreciate your feedback. [...]

**Rich** on 2006-10-27 02:00:05
> Thanks for fixing the link, Legege.  So it looks like there are 2 options now for getting a working Winstripe theme, in case anyone is reading this.  You can use the modified theme by Sethramoth available here:
> 
> http://www.megaupload.com/?d=ZRJADU9E
> 
> And in that case you will need to add the following bit of code to your userChrome.css file to fix the issue Bigbootay pointed out (which you will also find if you look at any page at the Wikipedia):
> 
> .searchbar-engine-button {
>   list-style: none !important;
> }
> 
> I determined that to be the operative line of Legege's code, for fixing the bug in Sethramoth's theme.  You can find all of it here, in case you want to use Kevin Gerich's original Winstripe 0.9 instead of the modified one by Sethramoth, since it seems to solve all the problems:
> 
> http://legege.com/mozilla/bugs/userChrome-winstripe-fx2.0rc2.css
> 
> But it might be tough for you to find your chrome directory in your profile directory (which is in %appdata%\mozilla\firefox\profiles on Windows XP, in case you are interested).  And even if you do edit your userChrome.css file (which does not even exist by default), anything you do will impact other themes and possibly ruin them, if you like to switch between themes.
> 
> Of course, there is a much simpler solution.
> 
> Florian Schmitz's Winestripe theme is at 1.0 now and he fixed the problems that made the search bar look so ugly for me (I use Windows Classic style).  You can get it here:
> 
> http://cdburnerxp.se/winestripe/
> 
> I didn't like the original Winestripe he made but it is better now, and does not require any userChrome.css hacking.  So, now there are two different themes to choose from, to emulate the classic Firefox 1.x look, and they both work on Firefox 2.0, which has finally been released.  If you still do not have Firefox 2.0, get it here:
> 
> http://www.mozilla.com/en-US/firefox/

**Ilya** on 2006-10-28 23:33:50
> Thank you so much for publishing this! I was about to downgrade back primarily because of the theme.

**Words &#038; Dreams &raquo; Firefox 1.5.x (Classic) Theme** on 2006-10-31 20:21:57
> [...] I updated to Firefox 2.0 yesterday and, though I&#8217;m still adjusting to it, it&#8217;s growing on me. I&#8217;m not thrilled about the gray tab bar, but I&#8217;ll get used to it. I also don&#8217;t like the new icons on the toolbar (back, forward, etc.), but those, you can change. I initially tried the &#8220;Winstripe&#8221; theme from Kevin Gerich, and while that solved the icons issue, it makes the rest of the address bar quite aesthetically unpleasing. [...]

**Sailing Close to the Wind &raquo; Blog Archive &raquo; Firefox 2.0** on 2006-11-01 11:45:01
> [...] I don&#8217;t quite know why, but I really didn&#8217;t like the default Firefox 2 theme, much prefering the bolder, more simplistic theme of 1.5 - I guess I felt it just suited the browser better. This theme is available from: http://kmgerich.com/2006/08/05/firefox-1x-classic-themes-available/ I installed this, and was immediately disgusted by what it had done to the Search Bar. EEK (it was all shrunken, long, and out of proportion!). [...]

**Lee Kelleher** on 2006-11-23 12:08:09
> A big thank you! Something wasn't sitting right with me on the new default FF2 theme, so glad I found your site!

**Max** on 2006-11-28 19:11:51
> When will the developers recognize that you can't give software a new look just for kicks? There are people out here that chose Firefox because of a simpler look. Now, to maintain security, we are forced to upgrade to this. The arrogance. Goodbye, Firefox.

**Andy** on 2006-11-30 20:30:05
> What about Linux? Can we install Winstripe or are you going to release a specific Gnomestripe version?
> Thanks.

**Firefox 2 tidbits at the medicinal chemist** on 2006-12-08 08:26:36
> [...] There&#8217;s a lot to like about Firefox 2 but there are a few changes that long-time users such as me are finding quite annoying. The new default theme looks consistently bad across platforms (and particularly so in Mac OS X). Fortunately, designers Kevin Gerich and Stephen Horlander have updated the venerable Firefox 1.x default themes Pinstripe (Mac OS X) and Winstripe (Windows) for use in Firefox 2. Secondly, the Find As You Type search bar has been pointlessly &#8220;simplified&#8221;. Once again the customisability of Firefox comes into its own here, and it&#8217;s simply a matter of inserting the following line into your local userchrome.css file. /* Use the old-style / and &#8216; QuickFind Bar behaviour */ #FindToolbar &gt; * {display:-moz-box} [...]

**kism** on 2006-12-31 11:30:32
> This appears not working well on Firefox 2. Can you fix it? I want to try it. I prefer stripes over new version. Thanks.

**Steve** on 2007-01-22 21:11:07
> What a shame the makers of these fine themes are so anti-Linux. It's no wonder Linux is never "ready for the desktop" when people like this only support proprietary OSes.
> 
> Perhaps their unwillingness to help with other OSes is why the Firefox team went with commercial artists instead of stuck up prima-donna artistes like these cunts.

**Steve** on 2007-01-22 21:22:23
> @Andy:
> 
> Forget about linux, these fucks are too busy licking Bill Gates and Steve Jobs' nutsacks to provide anything for Linux.
> 
> "Artiste" types hate Linux users because they're "intellectual property" hoarders, and Linux users are sharers.
> 
> "Artistes" find the typical viewpoint of a Linux user sickening.
> 
> These designer types are typical faggoty little whining bitches who expect to be praised and worshipped for their "art" no matter how sadly unoriginal and derivative it is. Pretty much like Microsoft and Apple.
> 
> Real artists code. Phony faggot bitches draw.

**Kevin** on 2007-01-22 22:22:50
> I think we can all agree that the correct way to encourage contribution to Linux is to refer to people as "phony faggot bitches".

**Steve** on 2007-01-23 17:15:36
> Hey, at least you're actually talking about Linux now instead of ignoring people asking about it.

**Steve** on 2007-01-24 18:33:12
> So Kevin, what is going on with regards to a Linux version anyway?
> 
> Or have you reverted to ignoring comments by Linux users again?
> 
> A little civility towards people asking about a Linux version would go a long way, and save having to resort to childish taunts just to get a response.
> 
> Linux users have eyes too you know.

**Tony** on 2007-02-25 14:34:04
> Regards Linux, I just installed for Ubuntu 6.06 and have had no problems so far.
> 
> TBH - themes are so easy to install, try out for 10 mins and then delete/keep I'm not sure why no-one has tried this already! :)
> 
> Anyways, thanks for doing this, I hate the FF2 theme with a vengence.

**christina** on 2007-03-10 21:41:24
> Thanks for fixing the link, Legege. So it looks like there are 2 options now for getting a working Winstripe theme, in case anyone is reading this. You can use the modified theme by Sethramoth available here:

**wil** on 2007-03-16 23:40:07
> how do i install the theme??? if i got it downloaded on to my desktop?

**Gesunde ErnÃ¤hrung** on 2007-04-11 12:48:59
> Thanks for fixing the link, Legege. So it looks like there are 2 options now for getting a working Winstripe theme, in case anyone is reading this. You can use the modified theme by Sethramoth available here.

**Lebensversicherung** on 2007-05-13 17:28:11
> All areas have been updated carefully so it should feel quite polished. Some icon updates (effects for small icons in address bar) are also included.

**Eu-Neuwagen** on 2007-05-13 17:29:13
> I also installed the extension mentioned by Will to fix the Go button.

**Kunsthandel** on 2007-05-13 17:31:09
> Firefox 2 Beta 2 is a developer preview release of our next generation Firefox browser and it is being made available for testing purposes only. Firefox 2 Beta 2 is intended for Web application developers and our testing community.

**Skateboard** on 2007-05-13 17:31:48
> One of the check ins for the drop down button has caused a problem though - it is too wide and shifts when the length of the string within location bar changes.

**Zahnimplantat** on 2007-05-13 17:41:10
> The perfect Idea of Technometry was new for me but worth to be read and thought abot it (although Iâ€™m not a native english-speaker and have some difficulties whith this language)

**Kreditkarte kostenlos** on 2007-06-07 17:10:13
> A little civility towards people asking about a Linux version would go a long way, and save having to resort to childish taunts just to get a response.

**Girokonto kostenlos** on 2007-06-07 17:12:10
> I know youâ€™ll probably say just use the new Pinstripe, but I like the classic FF look.

**Kosmetische BrustvergrÃ¶ÃŸerung** on 2007-06-07 17:13:44
> Iâ€™ll have a new version of Pinstripe soon. I havenâ€™t worked on Winstripe at all yet. If someone wants to help out, thatâ€™d be great.
