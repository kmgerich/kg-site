---
title: Problem with phoenix-bin
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2003-02-04T09:29:56.000Z
metadata:
  categories:
    - Mozilla
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=3
  type: wordpress
  url: https://www.kmgerich.com/2003/02/03/problem-with-phoenix-bin/
tags:
  - mozilla
---
Can anyone shed some light on why [Phoenix on the Mac](misc.html) compiles just fine but gives a segmentation fault when I try to run the phoenix-bin file? I used the mozilla-bin file from a previous build of Mozilla in place of the bad phoenix-bin and to my surprise it seems to work. This probably causes problems that I haven’t run across yet.

## Comments

**pbush** on 2003-02-09 15:06:06
> You must have figured it out because I'm using your build of Phoenix to enter this message.
> 
> Nice job!!!

**Kevin** on 2003-02-09 20:19:27
> Actually no. The build of Phoenix uses the Mozilla binary renamed to 'phoenix-bin'. Why this works I have no idea!

**Numbski** on 2003-02-11 14:49:42
> Considered updating?  Apparently new Mozilla source is out today...there are a few small glitches, if I knew C at all I'd try to help, but I am but a poor PERL coding soul. :P

**Andrew** on 2003-03-11 19:50:17
> I am currious how you got it to build at all.  And if it built ok, how did it run?  wouldnt you need Xwindows or to create a Cocoa wrapper or something?  I am by anymeans an accomplished C++ developer, just a hobyist.  I know you did it, cause it does work!
> 
> Thoughts?

**Kevin** on 2003-03-12 07:56:10
> Phoenix is based on Mozilla which is a Carbon front end with a Unix back end. The <a href="http://www.mozilla.org/build/mac.html" rel="nofollow ugc">build instructions are here</a>. You have to pull the source and build Mozilla regularly. Then update your .mozconfig file with as in <a href="http://www.sitemason.com/page/eCIDQc" rel="nofollow ugc">this page</a> (without the last xft line). That'll build Phoenix. But the phoenix-bin will be corrupt somehow. You can use the phoenix-bin from my build or use a mozilla-bin file and rename it to phoenix-bin.

**Ben** on 2003-03-28 16:40:59
> Could it have to do with the optimization line (second to last)?
> 
> i686 typically has to do with optimization for Pentium 2, 3, or 4 (I'm not sure where the boundry between i586 and i686 is). Optimizing something for a PC won't help it to run on a Mac.

**Kevin** on 2003-03-29 09:53:57
> Ah, well I didn't use the i686 line either. This is the .mozconfig I used.
> 
>  export MOZ_PHOENIX=1
> mk_add_options MOZ_PHOENIX=1
> ac_add_options --disable-tests
> ac_add_options --enable-crypto
> ac_add_options --disable-mailnews
> ac_add_options --disable-jsd
> ac_add_options --disable-composer
> ac_add_options --enable-plaintext-editor-only
> ac_add_options --disable-mathml
> ac_add_options --disable-debug
> ac_add_options --enable-optimize=-O2
> ac_add_options --enable-strip
> ac_add_options --enable-extensions=cookie,xmlextras,typeaheadfind,wallet
> 
> I've made a build recently and phoenix-bin still crashes unless I replace it with an earlier version.
> 
