---
title: Pretty Widgets
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2004-08-31T04:45:31.000Z
metadata:
  categories:
    - Design
    - Firefox
    - Projects
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=60
  type: wordpress
  url: https://www.kmgerich.com/2004/08/30/pretty-widgets/
tags:
  - design
  - firefox
  - projects
---
Inspired by [Jon’s attempt](http://hicksdesign.co.uk/journal/551/native-looking-firefox-os-x-widgets) to make Mac Firefox HTML form widgets a little easier on the eyes, I’ve taken a shot at making a set of widget styles that blends with Mac Firefox. It has focus rings too!

![widgets.png](http://kmgerich.com/archive/archive/images/widgets.png)

Instructions: [Download the userContent.css file](/archive/temp/userContent.css) and copy it to your ~/Library/Application Support/Firefox/Profiles/(profile name)/chrome folder. Or add the code within to your existing userContent.css file. It’ll look best on a recent Firefox branch build.

## Comments

**GURT** on 2004-08-30 20:53:36
> those are hot.
> just for Mac or will that work with Windows builds as well?
> 
> mmm sugar.

**Ryan S** on 2004-08-30 21:02:23
> Great work! One less reason for Mac people to use Safari over Firefox.

**Ben** on 2004-08-30 21:36:41
> Dude. Figure out how to do this as a patch to the existing Mozilla code for Mac-only and do all the widgets, and we'll slurp this up.

**Asaf Romano** on 2004-08-30 21:47:32
> Kevin, why not use the new images for buttons from
> http://hicksdesign.co.uk/journal/551/native-looking-firefox-os-x-widgets

**Luke Shingles** on 2004-08-31 03:24:34
> I need to stop visiting this blog, it's making me want to buy a Mac.

**Kevin** on 2004-08-31 07:07:57
> GURT, I'm not sure if this will work with Windows or Linux. Windows uses -moz-appearance to style the HTML form widgets based on the OS theme.
> 
> Asaf, Jon's buttons using the image backgrounds look great but they don't scale. They also don't change colors when you change the theme. I want to create styles that don't necessarily copy the Mac buttons pixel-by-pixel, but are a little nicer than the primitive widgets that we have now.

**Stephen Duncan Jr** on 2004-08-31 08:34:30
> It does affect Windows.  But it doesn't work quite right (I assume, since I can't see what effect it actually has on a Mac).
> 
> Input and text areas dissapear when selected, there's no hover effeect on buttons, etc.

**Jon Hicks** on 2004-08-31 08:47:39
> Nice one Kevin, they remind me slightly of Opera's own widgets. Nice style!
> 
> Asaf- Kevin's right. The ones I came up are seriously limited.

**Kevin** on 2004-08-31 09:16:00
> Stephen, oh that's right. The focus rings have a style called -moz-mac-focusring which is probably not available on Windows :) For the button backgrounds, I use an image from the Pinstripe theme that doesn't exist in Winstripe.

**Kevin** on 2004-08-31 10:49:12
> Can everyone please take a few minutes to test these styles on various web sites, especially those that apply CSS to form widgets? I'd like to make these styles not stomp on web page CSS too much. for that reason I'll probably lose the gradient background image on buttons.

**Chris Moritz** on 2004-08-31 11:05:01
> Looks great.  The day draws near where I might actually consider ditching Camino for Firefox.  Can't wait!

**Stephen Horlander** on 2004-08-31 11:23:24
> Fields look strange if they have a background color set. You can see the white part of the shadow.

**Kevin** on 2004-08-31 12:06:27
> Example URLs? :)

**Stephen Horlander** on 2004-08-31 12:45:51
> Mozilla.org the search field.

**Stephen Horlander** on 2004-08-31 12:57:13
> Even better :)
> 
> http://www.fred.net/dhark/demos/css/css_form_val_exp.html

**Kevin** on 2004-08-31 14:01:51
> Ow, my eyes! :) OK, two problems: First, I'm using -moz-border-*-colors to get the sunken Mac OS X text field look. It seems that web page CSS border colors do not override my -moz-border-*-colors rules.
> 
> Seeing that Safari doesn't allow CSS in form fields at all, this might be acceptable. I could explicitly set a white background but I don't want to override any more styles than I have to.

**Josh Hughes** on 2004-08-31 14:03:21
> Another heavily styled form:
> http://www.picment.com/articles/css/funwithforms/step5.html
> 
> Regardless, I really like the style. Thanks for putting it together :)
> 
> Josh

**Macskeeball** on 2004-08-31 17:18:16
> This is beautiful!

**Joel** on 2004-08-31 19:26:06
> http://wwwa.accuweather.com/adcbin/public/radar_menu.asp?partner=accuweather
> 
> The drop down radar menus are unreadable unless you are highlighting or mousing over an option. They sure look nice though ;-)

**Macskeeball** on 2004-09-01 01:12:42
> Joel, I fixed that issue by adding the following (the Lucida Grande part isn't required)...
> 
> "input, button, select, texarea {
> 	font-family: "lucida grande" !important;
> 	color: black !important;
> 
> }"
> 
> Kevin, if you'd like I can slim down that CSS for you (minus my changes unless you want them). I think the same effects can be produced with less code and it makes sense to make Firefox as fast as possible. Just send me an email if you're interested and I'll be more than happy to help.

**Macskeeball** on 2004-09-01 03:03:30
> After a little browsing, I've come to the conclusion that it would actually be better to use the following code instead of what I posted above...
> 
> "input, button, select, texarea {color: black !important; background: white !important;}"
> 
> Do not specify a font because it will make some form elements larger than intended.

**Ethan** on 2004-09-01 09:15:02
> Lovely work, Kevin &mdash; thanks so much.
> 
> Now, if we only had proper tabindex support for these sexy form fields...  ;)

**Kevin** on 2004-09-01 09:58:55
> Macskeeball, feel free to share any changes :) I've made a lot of changes myself and will post them soon.

**Rob Mientjes** on 2004-09-01 11:00:07
> The Windows users are drooling ATM, so I'm looking for a way to mimic these in FF/Win. I'll keep you updated.

**Kevin** on 2004-09-01 11:55:49
> To Ethan and anyone else who wants to tab to all fields in Mozilla or Firefox:
> 
> 1. type about:config in the url bar
> 2. in the Filter field, type tabfocus
> 3. double-click on the accessibility.tabfocus preference and change the integer value to 7.
> 
> You might have to restart the browser.

**Ethan** on 2004-09-01 12:18:05
> Kevin, you're a rockstar &mdash; I'd been missing this functionality since moving to the Mac.  I've updated my user.js file with the accessibility.tabfocus value, and things are working wonderfully.
> 
> Is there a reason this feature is disabled by default on the Mac?

**Michele Campeotto** on 2004-09-01 12:40:56
> Kevin, it works and looks wonderfully in Linux too, but It seems to have a problem with selects, I have to either click them thrice or keep the mouse clicked for about half a second (this is FF 0.9.3).
> 
> This is weird, I'll have a try on my Mac when I get home.
> 
> 
> mic

**Riscky Abacus** on 2004-09-01 17:59:10
> Check out compusa site... button text is missing!

**Macskeeball** on 2004-09-01 22:59:24
> Ok, Kevin. I've optimized the code, made it a little more consistent, added the enhancement I posted above, and corrected typos made by both you and me: http://macskeeball.no-ip.com/forums/tjp/userContent.css

**Stephen Horlander** on 2004-09-02 10:45:57
> I also noticed a weird problem with selectable lists that are scrollable and not dropdowns.
> 
> Such as: http://bonsai.mozilla.org/cvsqueryform.cgi

**Macskeeball** on 2004-09-02 16:50:10
> I see no such problem with my version, Stephen.

**Stephen Horlander** on 2004-09-02 17:23:59
> Hmmm, well I tried both version and still get this:
> 
> http://www.noved.org/~stephen/public_files/select_with_size.png

**Asaf Romano** on 2004-09-02 18:17:11
> Hi Kevin,
> 
> With the first version (I didn't check anything else... not yet) I see an issue on mozdev's search button.
> 
> You can see an example here: http://bidiui.mozdev.org (see the search button in the top right corner).
> 
> BTW: I think the borders should not apply image buttons, but I'm not sure if we can _always_ handle this (since you can't use css selectors "on" css values :-/)
> 
> Mano.

**Macskeeball** on 2004-09-02 21:06:00
> What version of Firefox are you using, Stephen? I'm using the September 12th nightly and don't see that.

**David** on 2004-09-10 01:35:56
> Very nice. I hope this gets officially added to the Mac version of Firefox. :)

**Jinketsu** on 2004-09-10 14:17:35
> Wow, much better.
> 
> These remind me of the buttons in the Milk theme. I haven't encountered many problems. Some list menus seem to have scroll bars though.
> 
> I hope these get used for the Mac version as well.

**sea bass** on 2004-09-13 17:35:29
> Is it just me or do these buttons not have a 'down' state? Using Asa's Firefox 1.0RC-RC (or 0.10rc if you must) ;)

**frank** on 2004-09-14 18:24:43
> Here's a site that kind of trips up on this mod:
> 
> http://www.pointroll.com/ShowCase/ShowCase.asp
> 
> If background colors will be forced to be white/light gray, then the foreground color should be forced, as well, to prevent any white text on light gray fields like in the above example.

**Hendrik** on 2004-09-24 16:04:43
> This is really great!

**Jennifer** on 2004-10-04 15:16:20
> I am seeing a border added to links that I click on on Livejournal (like "comment to this post" links and such). The border appears shortly after I click and stays there until the page changes to the new URL. This is annoying and highly visible against the dark grey background of the style I set. Is there a way to remove this?
> 
> Also, wtf is with the comment above this one?

**Jennifer** on 2004-10-04 15:17:21
> ... my comment is now referring to something that is not loading anymore ... and I forgot my build info anyway.
> 
> Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.7.3) Gecko/20041003 Firefox/0.10

**Antony** on 2004-11-27 05:46:57
> Check out for mortgage company
> <a>Flmortgage</a>for Florida mortgage information and personalized mortgage rate quotes from a network of qualified Florida mortgage brokers and lenders.

**elblogg** on 2004-09-14 12:31:03
> <strong>Hot widgets</strong>
> 
> Kevin Gerich have posted a custom stylesheet for content in Mozilla firefox (known as chrome/userContent.css. It looks really neat, its made for MacOSX (those spoiled mac-users) but works on Linux too. I have not tested it on Windows. There is...

**Smallpiece** on 2004-09-15 14:38:01
> <strong>Piccolo mod per Firefox</strong>
> 
> &Egrave; appena uscita la public preview di Firefox 1.0 che nella versione per mac porta con s&eacute; un piccolo lifting all'interfaccia, molto piacevole e sobria.
> 
> Contemporaneamente a quest'uscita, Kevin Gerich (autore dell'interfaccia di Firef...

**micampe.it** on 2004-09-22 11:37:32
> <strong>Un lifting per Firefox</strong>
> 
> Saranno anche nati per il Mac, ma questi controlli stanno molto bene anche su Linux e ora il mio Epiphany e il mio Firefox sono molto più piacevoli da usare.

**risckyBabble** on 2004-12-01 22:31:38
> <strong>Old Fragments</strong>
> 
> A shell script to edit text files as root in the GUI(via)"I've Gained Strength" (via)Making Visited Links RadicalReduce compile time with distccDesktop Managerrentzsch.com: mach_injectFunny Microsoft Q Articles From The Knowledge BaseMedia Matters for Ame
> 
