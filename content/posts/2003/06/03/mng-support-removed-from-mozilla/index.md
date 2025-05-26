---
title: MNG support removed from Mozilla
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2003-06-04T07:58:44.000Z
metadata:
  categories:
    - Pinstripe Theme
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=21
  type: wordpress
  url: https://www.kmgerich.com/2003/06/03/mng-support-removed-from-mozilla/
tags:
  - pinstripe-theme
---
![throbber.png](throbber-gk1u75pFNj65.png)  
Support for the MNG file format was [removed from Mozilla today](http://bugzilla.mozilla.org/show_bug.cgi?id=195280). [Multiple-image Network Graphics](http://www.libpng.org/pub/mng/) is like a GIF animation but with alpha-transparency so it can blend in with images among other neat [features](http://www.libpng.org/pub/mng/#history). Look at the image above with the loading animation blending in with the Aqua tab. This looks pretty awful when in GIF format. The thing is that there is no alternative to MNG in Mozilla, so I will have to go back to GIF animations or find some other way of doing an animated icon with alpha-transparency. Any suggestions?

Update: Please vote for [Bug 18574](http://bugzilla.mozilla.org/show_bug.cgi?id=18574) if you’d like to see MNG support restored to Mozilla. But please don’t use the bug for advocacy – that’s what the [MozillaZine](http://www.mozillazine.org) forums and your blogs are for. Thanks!

## Comments

**Jeff** on 2003-06-04 17:40:24
> This really sucks. I don't see how their reasoning justifies the removal.

**Sabaco** on 2003-06-10 10:33:01
> I was also disappointed with this, so I've gone and registered my vote.  As it is, only 3 bugs have ever had more than 300 votes, including this one.  Seems like that should indicate to mozilla that we want the feature.  Hopefully it will go back in soon.

**Greg Kolanek** on 2003-06-13 03:20:05
> Note that Christian Biesinger packaged the removed code as an XPI installer () you can use to restore MNG/JNG funtionality to builds newer than June 4.

**Greg Kolanek** on 2003-06-13 03:21:53
> Forgot the URL; get the XPI <a href="http://stud4.tuwien.ac.at/~e0225227/" rel="nofollow ugc">here</a>.

**Greg Kolanek** on 2003-06-15 19:01:50
> Kevin, you should add a note advising people to only vote, and not add comments to, that bug.

**Kevin** on 2003-06-16 09:45:10
> Good point Greg
