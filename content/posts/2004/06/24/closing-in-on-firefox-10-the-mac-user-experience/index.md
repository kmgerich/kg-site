---
title: 'Closing in on Firefox 1.0: the Mac user experience'
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2004-06-24T21:33:31.000Z
metadata:
  categories:
    - Stuff
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=57
  type: wordpress
  url: >-
    https://www.kmgerich.com/2004/06/24/closing-in-on-firefox-10-the-mac-user-experience/
tags:
  - stuff
---
Now that the dust is settling from the 0.9 release, I thought I’d turn my attention to the Mac Firefox experience and what I think needs to happen to make 1.0 great. Firefox’s UI is “good enough” for day to day use, but there are some not so subtle rough edges that make Mac Firefox user experience less than stellar. Here’s a list with some thoughts. The ones on the top are very important in my opinion. The ones near the bottom will probably be random gibbering 🙂  

### Natively-drawn widgets

This may take a lot of work, but [native look and feel are critical for usability](http://ocallahan.org/mozilla/why-no-native-widgets.html). Camino uses Mac OS X to draw its widgets. The code seems to be there.

### Make the Customize Toolbar dialog work as expected

When you click “Customize…” in the menu, the customization dialog rolls open, pinned to the top left of the screen. You have to reposition the dialog to drag icons back and forth from the toolbars. This is not how a Mac customize toolbar dialog should work. [Bug 206649](http://bugzilla.mozilla.org/show_bug.cgi?id=206649).

### Disable menus when certain dialogs are open

The Find dialog, Download dialog, Extension Manager, Theme Manager, all have active menu items “File, Edit, etc..” when the dialogs are shown, but if you choose any of those menu items, nothing happens. The menus items should work or be the whole menu bar should be disabled. The best solution would be to go through the menu and determine which items should be disabled when the dialogs are up. For instance, if the Download dialog is open, it makes sense that File > New Window should be enabled but File > New Tab should not. See Bug [227774](http://bugzilla.mozilla.org/show_bug.cgi?id=227774).

### Sort out modal versus non-modal dialogs

The Add Bookmark dialog should be modal. The About and Preferences dialogs should not. Particularly in the Preferences dialog, nested sheets are pretty ugly. When you click on the “View Saved Passwords…” button in Preferences, the whole Preferences dialog rolls up and disappears then the Passwords dialog rolls open. when you finish with the Passwords dialog, it rolls up and then the Prefs dialog rolls out again. Ick. See Bugs [222364](http://bugzilla.mozilla.org/show_bug.cgi?id=222364), [228165](http://bugzilla.mozilla.org/show_bug.cgi?id=228165), [206649](http://bugzilla.mozilla.org/show_bug.cgi?id=206649).

### Make sure that new browser windows always fit on the screen

[bug 218214](http://bugzilla.mozilla.org/show_bug.cgi?id=218214).

### Re-orient Preferences window toolbar

The Preferences dialog is based on a Windows design with a vertical group of icons on the left side for changing panes. The redesigned dialog should have a toolbar across the top. [Bug 222686](http://bugzilla.mozilla.org/show_bug.cgi?id=222686).

### Use native OS X menus instead of XUL popups

I know this one may not be realistic, but native menus would improve the user experience just as the implementation of native scrollbars have. The menus that we have now try to fake a Mac look, but they don’t have the subtle transparency of the real thing and they don’t change colors when you change the system theme.

I’m sure you can help me fill out this list, so please leave a comment 🙂 By the way, theme/icon changes are easy and incremental changes are in the works. This post deals with UI issues outside of themes.

## Comments

**Ludovic hirlimann** on 2004-06-24 14:27:48
> The code used in Camino could not be used in FF. The goals of those projects are different. If you *need* native UI switch to camino

**Jonathan Dobres** on 2004-06-24 15:07:06
> I'm curious.  Does clicking on a link with the middle mouse button in Firefox OSX open that link in a new tab?  My friend is an OSX user and says that it doesn't work, and I was wondeirng if it was just him.  I find this feature indispensible.  It'd be a shame if it wasn't there on Mac.

**Jon Hicks** on 2004-06-24 15:07:53
> I'm with you for all of these, although it's amazing how much you've done already with pinstripe.
> 
> The native menus and widgets are my particular bugbear, although, I was always under the impression that Camino faked the native widgets with the browser view? Therefore making it possible for it to happen in Firefox.
> 
> One more thing for the list, and Its an easy one! Can we have new icons for the 'loading image' and 'broken image' that live the 'Res' folder? They look so out of place with the gorgeous pinstripe theme.

**Kevin** on 2004-06-24 15:47:01
> Sure Firefox and Camino have differnet goals. Camino is the real thing. Firefox fakes it. But that doesn't mean Firefox can't fake it well ;)
> 
> AFAIK, the code that draws the native widgets is not specific to Camino. Look at <a href="http://bugzilla.mozilla.org/show_bug.cgi?id=188254" rel="nofollow ugc">Bug 188254</a>. From reading the comments, it seems as if this code could work for carbon apps. There was actually a way to force natively drawn widgets in Mac Mozilla a long time ago with a bit of hackery but all traces have been removed.
> 
> <a href="http://mozdev.org/pipermail/camino/2004-January/001323.html" rel="nofollow ugc">Exhibit B</a>: <a href="http://weblogs.mozillazine.org/pinkerton/" rel="nofollow ugc">Mike Pinkerton</a> wrote about a checkin made in January to Firebird:
> 
> <blockquote>
> their plan is to eventually switch all of mozilla onto the cocoa widget layer so we only have to maintain one and not two widget layers on the mac. this really won't make fb and more or less of a mac browser, just makes the architecture a little more up to date and easier to work with. There shouldn't be any visible side effect, except now they'll share our bugs with NSQuickdrawView.
> </blockquote>
> 
> I'd love to know where all this stands..

**Kevin** on 2004-06-24 15:53:50
> Jonathan, I think middle-clicking will be fixed soon. Here's <a href="http://bugzilla.mozilla.org/show_bug.cgi?id=151249" rel="nofollow ugc"> a link to the bug report</a>. it has a patch waiting to be checked in!

**DoS** on 2004-06-24 17:53:47
> How can you say that now you need to worry with Mac?! What about Winstripe? When Pinstripe is happy, colorful and nice, Winstripe is crying, and so do Firefox users...

**Andrew Dunning** on 2004-06-24 19:55:35
> I definitely agree. For Mac users, it's the details that matter.
> 
> One thing you missed: Firefox (along with the App Suite) has the About item in the Help menu as well as the application menu. That's driven me crazy for quite some time.

**Mike** on 2004-06-24 20:22:53
> Man, the things I'd care about if I had a Mac... I added two of these to the 1.0 Mac blockers list, since they're obvious.  I'm working on the modal/modeless/sheet stuff primarily on GNOME, but I think its mostly common stuff for Apple HIG so the work will be benefitting both.

**Robert Curtis** on 2004-06-25 06:24:17
> I should love it if you could get all of those things fixed Kevin (not personally I know, but oversee it).
> 
> Here's another:
> 
> • A nice new icon for image/broken image.

**jup** on 2004-06-25 07:35:30
> please no aqua buttons like in safari, i hate them, they are not skinable with css.

**Greg K Nicholson** on 2004-06-25 09:45:17
> Firefox 1.0 for Windows will use native menus - http://bugzilla.mozilla.org/show_bug.cgi?id=243078 - so it seems likely that Firefox 1.0mac will.

**Kevin** on 2004-06-25 11:08:44
> Good point Greg. I don't think that you can say that the Mac will necessarily get the same treatment, but I'm glad to see that addressing UI inconsistencies like this is a goal. Maybe I should start filing requests..

**allen** on 2004-06-25 13:27:36
> I agree about the native widgets, but my second biggest peeve is the way the green 'zoom' button always seems to massively oversize the Firefox window.
> 
> Try this out: go to http://www.mozilla.org/products/firefox/ in Safari, manually shrink the window so it's really small, then hit zoom. On my machine, the window is resized to fill the screen vertically (since the page is longer than the screen is high), but it's only 800 pixels wide, which is the optimum width (i.e. the smallest width at which all contents fit horizontally and there is no need for horizontal scrolling).
> 
> If you do the same thing with Firefox, the window is again resized to fill the screen vertically, but it's a massive 1152 pixels wide (I think this figure may be some function of the display's resolution, so it may vary on your Mac - I use a 1280x854 15" PB). That is far wider than the window needs to be.
> 
> If I wanted applications to fill my screen, I'd use Windows. I like my apps to take up as much real estate as necessary and no more. Safari does this perfectly: I can use another app side-by-side. To non-Mac users (or Mac users that don't use the zoom much) I'm sure this seems trivial - but to me it's a major reason why I use Safari over Firefox on OS X.

**Michael** on 2004-06-25 15:36:21
> And for the love of everything that is holy, why is there still a hidden window? It shows up when you have FF running and you Exposé all open windows. It comes rolling in from the left.
> 
> That, and the widgets, is the primary reason I don't use FF on OS X.

**Kevin** on 2004-06-25 15:54:20
> The hidden window needs to be there to keep the application open when all the normal windows are closed. You're right Michael, it shouldn't appear in Exposé. Here's <a href="http://bugzilla.mozilla.org/show_bug.cgi?id=223779" rel="nofollow ugc">the bug report</a> and it has been marked for Firefox 1.0.

**ts** on 2004-06-26 14:38:16
> What me annoys is the fact that a help window can not be in backgrund when I switch to a "browse" window.

**Andrea** on 2004-06-26 21:36:02
> Please, when you are at it, don't forget the Manage Bookmarks window toolbar, it is not customizable at all, when you right-click on it the popup menu doesn't show up, and you can't change the icon size to small. I'm not sure if that happens on windows too.

**Jon Hicks** on 2004-06-27 16:45:51
> Oh, and another thing. Any chance of getting the subtle white/grey stripes on things like the bookmark window / history sidebar?

**Kevin** on 2004-06-27 18:59:25
> Hmm .. I'm not sure what you mean Jon. Care to elaborate? :)

**Hendrik** on 2004-06-27 22:20:23
> Maybe i'm the only one seeing this, but what annoys me is that command-clicking on the toggle toolbar-button in firebird (and seamonkey) does have the same effect as a normal click.
> 
> command clicking should change the size of the buttons. (Try in Camino/Any other cocoa app)

**ts** on 2004-06-28 03:54:33
> Hendrik: This has nothing to do with cocoa or not. It is just there with every app which has a native toolbar (I wrote a carbon app which has the same behaviour).
> 
> This issue is only there because there is no native toolbar (and the existing one looks very strange when using non default themes).
> 
> Additionally I would like to get rid of these toolbar buttons when the window has no toolbar (e.g. Page Info).

**martin** on 2004-06-29 09:25:53
> The backspace key does not move back to previous page in Mac. Does on windows... with that and mouse gestures never working for me, it is very difficult to switch to Firefox full-time on Mac.

**Jon Hicks** on 2004-06-29 12:05:49
> "Hmm .. I'm not sure what you mean Jon. Care to elaborate? :)"
> 
> Kevin, if you look in iTunes, Safari's bookmark manager or even Firefox's download manager, each entry row is an alternating white/light grey background colour. Its one of those little OS X touches that really makes the interface shine. I'd love to see that in the sidebar and the bookmark manager.
> 
> Do you know what I mean?

**Nathan Gray** on 2004-06-29 14:36:48
> The biggest annoyance to me on the Mac platform is the abuse of sheets.  Sheets are *not* meant to be used for every modal dialog!  They're only supposed to be used for dialogs that are both modal *and* only affect one window.  They're meant to solve the problem of, for example, forgetting which browser window an error pop-up refers to.
> 
> In particular, note that the preferences dialog does *not* qualify for sheet treatment -- it affects the entire application, not just one window!  This is why Safari, Mail.app, and the rest of the Apple suite don't use sheets for preferences dialogs.

**Xian** on 2004-06-29 14:39:58
> My biggest problem with FireFox (and Camino) MacUI wise is their non-Cocoa text fields. This applies to  inputs, textareas, the address bar + etc. OS X has some great default text handling features. It has built in ctrl-key text navigation short cuts (which can be extended any way you please [1]) and once you get used to using the same keyboard commands everything from Emacs to the terminal to Mail to safari it's annoying when you press ctrl-a and all it does is beep at you.
> 
> [1] http://www.gnufoo.org/macosx/#emacs

**Marc Poirier** on 2004-07-02 10:13:48
> I certainly certainly agree with the desire for native widgets and menus, but I will just add another reason for them:  accessibility.  Currently, Firefox is terrible with accessbility in dialogs and menus.  The Mac system widgets have this solved in a standard way, so Firefox needs to use them to gain the standard keyboard accessibility for widgets and menus.

**Kevin** on 2004-07-02 10:55:41
> Unfortunately truly native widgets will probably not come to Firefox unless some enterprising hacker wants to do it. Camino doesn't even have truly native form widgets. I think the best we can do for the short term is draw the widgets based on the OS theme. See <a href="http://ocallahan.org/mozilla/why-no-native-widgets.html" rel="nofollow ugc">http://ocallahan.org/mozilla/why-no-native-widgets.html</a>

**Marc Poirier** on 2004-07-02 11:33:27
> I can only speak for myself and not others who have commented, but I know that I was not talking about native widgets within web rendering but within dialogs, non-browser windows (bookbmarks, history, etc.), toolbars, preferences, etc.  Basically, everything <i>but</i> the browser's web page rendering.  The article that you link seems to be about native widgets <i>only</i> in web rendering.  I can understand the argument that the author is making there, but I don't think that it applies to anything that I am asking for.

**Neil** on 2004-07-09 22:38:27
> I just opened a bug to address another issue with the Mac OS X version of Firefox that I find a wee bit annoying - the fact that command + period doesn't cancel actions as it does in other Mac OS X browsers / applications.
> 
> The main place I see this is when I try to stop a page from loading by hitting command+period. In Safari, Omniweb, Opera, iCab, and IE this works - the page stops loading. Firefox ignores the key command.
> 
> http://bugzilla.mozilla.org/show_bug.cgi?id=250702

**dzd** on 2004-08-04 23:12:32
> "How can you say that now you need to worry with Mac?!"
> You Windows people are used to having crappy interfaces. Plus you can always install Qute.

**Josh S** on 2004-08-11 10:42:31
> I really wish Firefox 1.0 would have the favicons in the Bookmarks menu.  It's there in windows, and it's the one feature I really miss.  Easier to find things and you mind organizes them easier by icon.

**macfixer** on 2004-08-20 08:53:47
> On FF for Windows, there is a little pop-up "your downloads are complete" dialog. I know it's not 100% mac-like, but I *really* miss it on the Mac.
> 
> Any chance this could be added?
> 
> //k

**Xenedar** on 2004-10-05 14:41:38
> Re: Re-orienting preferences window toolbar.
> AFAIK, there is no Apple HIG that says that the toolbar has to be horizontal. In fact, I don't mind Firefox's preferences window toolbar at all. It's colorful and it's easy to follow.
> 
> I'd probably put a redesign of the layout (and in particular fitting all the preferences sub-categories and sub-sub-categories - all those disclosure triangles - into the window without generating scrollbars) ahead of a toolbar redesign. I mean, some developers have taken that appearance on for their applications (Camino, RealPlayer 10, Proteus, etc), but Microsoft Word's Preferences dialog (for example) isn't regarded as being contrary to Aqua guidelines, is it?

**Peter da Silva** on 2004-10-28 15:32:56
> Native widgets and native menus: yes, at least in the default theme.
> 
> Maximise: you need to call [NSScreen visibleFrame] and clip the resize to the result if you're not going to just do a vertical zoom. Let my docklet breathe!
> 
> I'd also like to see the default theme use less aggressively rounded tabs, if that's possible. These ones have a definite "Commodore 64" feel.

**Peter Hammer** on 2004-11-12 16:26:16
> For the longest time my barrier to entry in the Firefox arena for Mac was the lack of an import wizard for Safari. I had already stored everything in Safari (passwords, favorites, etc...) and not having them on Firefox, kept me from using it for a long time. One day Safari finally annoyed me and I switched manually - not too much of a hassle, and also easily scripted using Applescript - but also too much work for the average Joe using a mac.

**Kesh** on 2004-11-14 21:59:04
> It's not a matter of using an import wizard. Rather, Firefox doesn't take advantage of the Mac's Keychain, while Safari does. That's the only serious complaint I have about FF.
