---
title: about:Aquafication
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2004-11-08T21:44:35.000Z
metadata:
  categories:
    - Firefox
    - Mac
  uuid: >-
    11ty/import::wordpress::http://kmgerich.com/journal/2004/11/08/aboutaquafication/
  type: wordpress
  url: https://www.kmgerich.com/2004/11/08/aboutaquafication/
tags:
  - firefox
  - mac
---
A little over a week ago, [Ben](http://weblogs.mozillazine.org/ben/archives/006795.html) informed me of the decision to push back the Mac-specific Firefox work to a 1.1 release that would come out in March 2005.

Firefox 1.0 was going to be released on Windows and Linux first. After the Windows version was out the door, we (meaning Ben and the few Mac hackers who work on Firefox) would focus on [the Mac user experience](http://kmgerich.com/archive/000065.html) to bring it closer to the level of polish and integration that OS X users expect.

But the Mac-specific work will take a while – with the holidays it could easily take until early 2005. Ben and crew want to merge the work that’s been going on in the Firefox branch with the Mozilla trunk as soon as possible to get on with the post-1.0 development.

[Chris Hofmann wrote](http://mail.mozilla.org/pipermail/aviary/2004-October/000110.html):

> Ben, Asa and I met to review a plan for synchronizing the Mac 1.0 with the Windows and Linux releases on 11/9. We looked at feedback and satisfaction data from version tracker and other sources, recent Mac specific bugs fixed and decided to move forward with a plan to ship Mac Firefox 1.0 on 11/9. The hard and anecdotal data shows the satisfaction rating of Mac Firefox to be very close to Safari, and we see many users choosing Firefox over Safari which is a clear sign that we should be calling it 1.0.

This is disappointing but I agree with the reasoning behind the decision. Hopefully we will be able to use the extra time to make Firefox 1.1 the best browser on the Mac platform. Of course you can help! Look over the bugs targetted at Firefox 1.0mac and file requests if you think something is missing.

## Comments

**Mitch** on 2004-11-08 12:31:20
> hopefully they will take care of this one before 1.1 - it is by far the most annoying functionality bug left (now that Cmd-M was fixed):
> 
> https://bugzilla.mozilla.org/show_bug.cgi?id=151249
> 
> there are no 1.1 branches yet, so i can't nominate this one for that - asa already said it was too late for 1.0

**TwisterMc** on 2004-11-08 12:39:40
> Sad but I see that it was a well thought out plan.  Any chance of getting aqua check boxes or buttons to work in 1.0?  Or is that 1.1.  Either way it's a great browser and I see some great bugs in that list.  Some that get me every day!!  Keep up the good work.

**Kevin** on 2004-11-08 12:54:11
> You know, I don't think I've seen a Bugzilla report actually asking for Aqua form widgets. Someone should probably do that :)

**Siz** on 2004-11-08 13:06:38
> The reason behind it seems sound... but I don't have faith in m.o to focus on the mac specific bugs for 1.1 a long laundry list for linux and xp issues will most likely cloud the issue.

**José Jeria** on 2004-11-08 13:38:15
> About aqua form widgets, a Firefox bug was filed, but duped to this one:
> https://bugzilla.mozilla.org/show_bug.cgi?id=175279

**Nooon** on 2004-11-08 13:45:36
> disappointing.. :(

**MonsterTruck** on 2004-11-08 13:48:06
> That's because Mac isn't really important anymore as Windows (or even Linux, which b.t.w. has more users than Apple could ever dream of).
> 
> Firefox on Mac and Camino are working in each other's way, and personally I think one of the two should be discontinued in order to focus on one superior product. But I guess that's worth at least a thread or two.

**michaell** on 2004-11-08 16:39:31
> MonsterTruck: Your idea of focusing on one Mac product to make it superior depends on the assumption that if one of the browsers was discontinued the people that have been working on that would work on the other product. I would guess that assumption is mostly wrong.
> 
> Resources like visual design, marketing, and QA might benefit from being more focused, but I would imagine that if they discontinue a product (actually the Foundation can't do that as such, they can only stop supporting it - they don't own the code), a lot of the development resource (i.e. coding time) will simply disappear.

**Stephane** on 2004-11-08 21:14:50
> Disappointing to hear about it, It's still in my mind at second place behind Safari mainly because of it's Un-Mac like interface.
> 
> Off subject but I find this comment funny "Linux, which b.t.w. has more users than Apple could ever dream of". Apple use to have way more user than Linux has right now, funny how people forget. Linux has 2%  of computer users and Mac has 1.8%... wow, big difference !

**jh** on 2004-11-08 22:40:31
> Bummer...
> 
> I really like firefox. Started using it when I was on WIN then began using it on MAC. The form widgets are what keep me from using it daily. I use it for development purpose right now and that's it, so in the meantime Safari is my default browser.
> 
> And I must note that the start up time of Firefox is very slow compared to Safari.

**Dale** on 2004-11-09 03:56:55
> >"the satisfaction rating of Mac Firefox to be very close to Safari"
> 
> With respect, I think the method of obtaining these ratings needs to be examined. While I've read many 'Firefox is the best browser on the Mac' comments, I've also read many comments that it's still not near as good as Safari, and that Firefox is better on Windows than on the Mac.
> 
> This is why Safari is better than Firefox:
> * Firefox is slower to start (it's slow on Windows too)
> * Firefox loads pages slower than Safari
> * Firefox doesn't behave like a Mac application eg Add Bookmark window can't be closed with Cmd+W. The non-standard (but useful) Find window/strip can't be closed with Cmd+W - this closes the window or tab. Instead you have to press the Escape key (this means cancel, not close!) to be closed. So Firefox is inconsistent with Apple HIG and within its self - compare how Sidebar is closed (not the Esc key as you'd expect) and how the Add Bookmarks window is closed. Also, why aren't some windows a sheet? eg the Print dialog box?
> * Safari's keyboard shortcuts for navigating tabs are better placed on the keyboard (Cmd+Left/Right arrow) - they do not require you to move your hands.
> * Firefox doesn't include keyboard shortcuts in its menus.
> * Firefox chokes significantly more than Safari when opening many tabs at once.
> * Bookmark Toolbar folders can't be opened in tabs with a single click like Safari's can.
> * Firefox's UI is slower than Safari's. eg click the Preference categories like General, Privacy, etc.

**Gary** on 2004-11-09 08:22:16
> Well there's a problem to start with: "We looked at feedback and satisfaction data from version tracker..." There is good reason why many have dubbed versiontracker - perversiontracker. The feedback often seems to be either insulting or merely trawling for reactionary statements about the ills of particular developers or products.
> 
> I ditched Safari as my default browser a long time ago for what i consider very logical reasons: stability, extensibility, ease of use, but also the ability to block advertising was a major triumph. I disagree with much of Dale's (see above) post. Command-W closes my windows fine; startup time, especially when you're talking about 5 seconds, (and is there a reason to close your browser at all anyway?) is largely irrelevant; the escape key is not necessarily logical to close your bookmarks sidebar etc. etc.
> 
> I think most of the problems Dale (and many mac users) are highlighting are actually based in the ui processes of routine. We become aclimatised to certain functionality performing in certain ways, in the way that i find it ridiculously illogical and frustrating to do something as simple as open and find files on a windows box.

**Kevin** on 2004-11-09 09:09:39
> I can't say how heavily they relied on Versiontracker comments to form their opinion. You don't have to dig very far into the various Mac forums to find out that users (not just enthusiasts) think Mac Firefox's weakness the slightly alien feel of the menus, HTML widgets, etc.
> 
> On the other hand, we've made good progress on Mac-specific bugs. Remember when Phoenix didn't even have a Window menu? Now we have a lot of Mac-specific enhancements for Firefox and I look forward to seeing more as development goes on.

**Darrel** on 2004-11-09 13:36:01
> Do we really NEED an aquafied version?

**David** on 2004-11-09 16:17:55
> Darrel said: "Do we really NEED an aquafied version?"
> 
> Do we *need* it? No. But it's a big deal for some users and the more reasons they have to use it the better!

**Kevin** on 2004-11-09 17:00:19
> We don't *need* an Aquafication release per se, but if Firefox expects to attract normal human users as well as power users, it has to follow the OS conventions that users expect. Also note that Firefox 1.1 will contain GNOME as well as Mac integration features.

**Siz** on 2004-11-09 22:31:30
> Kevin, thats the problem Firefox 1.1 will contain GNOME intergration... Brendan has spoke more than once how he thinks GNOME is key to the development of the m.o platform his comments also make it seem as if spending time developing key parts of the m.o platform for OS X is a waste of time. I fully expect the GNOME intergration and Longhorn intergration to get major attention and push the Aquafication to the back burner. I'm willing to bet the order of importance will be Longhorn first, GNOME second and Aquafication might get some attention.
> 
> It is a sad state of affairs...

**James** on 2004-11-10 01:35:47
> Dale: Have you tried the <a href="http://forums.mozillazine.org/viewtopic.php?t=149532" rel="nofollow ugc">G4</a> or <a href="http://forums.mozillazine.org/viewtopic.php?t=156735" rel="nofollow ugc">G5</a> optimised builds? Apparently they dramatically increase overall speed.

**4 Banalitaten** on 2004-11-09 07:33:14
> <strong>Per tutti ma non per Mac</strong>
> 
> Finalmente Firefox diventa adulto e raggiunge la versione 1.0.

**Skyzyx.com - Sidebar** on 2004-11-10 12:04:55
> <strong><a href="http://kmgerich.com/archive/000076.html" rel="nofollow ugc">about:Aquafication</a></strong>
> 
> about:Aquafication. A brief insight on the Mac Aquification release of Firefox....

**Alan Francis** on 2004-12-01 18:53:54
> <strong>Mac Version of FireFox</strong>
> 
> http://kmgerich.com/archive/000076.html...

**PD** on 2004-12-13 22:27:34
> <strong>Firefox for the Mac</strong>
> 
> So there is method to the madness - from the story:Firefox 1.0 was going to be released on Windows and Linux first. After the Windows version was out the door, we (meaning Ben and the few Mac hackers who work
> 
