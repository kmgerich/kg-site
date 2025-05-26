---
title: Metal Phoenix
authors:
  - name: Kevin
    url: https://www.kmgerich.com
    avatarUrl: >-
      https://secure.gravatar.com/avatar/c8d6c1963572ac9a476fd65f48ea6f3a1741d7ed3b6520563cf90cb984419f86?s=96&d=mm&r=g
date: 2003-04-10T01:15:38.000Z
metadata:
  categories:
    - Firefox
  uuid: 11ty/import::wordpress::http://kmgerich.com/journal/?p=14
  type: wordpress
  url: https://www.kmgerich.com/2003/04/09/metal-phoenix/
tags:
  - firefox
---
I made a one line code addition and built Phoenix with metal windows. [Check here for a screenshot](http://kmgerich.com/archive/images/metal_phoenix.html). The bad news is that the metal windows flicker like hell when the contents are updated or resized. Also some of the chrome elements tend to vanish and reappear. Pretty, but totally unusable.

## Comments

**Michel** on 2003-04-10 05:16:56
> Looks nice :) Is that still based on 0.5 or is it based on a CVS checkout - and if the latter, could we have a standard updated build?
> 
> Thanks,
> 
> Michel

**Kevin** on 2003-04-10 10:33:27
> Based on CVS. I won't post a metallized build, but if you're interested in building your own, you can follow the instructions on the Phoenix page and add the following line of code below line 559 of file mozilla/widget/src/mac/nsMacWindow.cpp:
> 
> ::ChangeWindowAttributes ( mWindowPtr, kWindowMetalAttribute, kWindowNoAttributes );

**Metareye** on 2003-04-15 16:33:52
> I hope this becomes an option in the future. I think it looks great.

**gg** on 2003-04-28 10:30:19
> Ulgh. Someone get the holy water, that needs an exorcism.

**Kevin** on 2003-04-28 13:56:23
> I tend to agree about the metal interface, gg :)

**Steph** on 2004-11-06 23:31:56
> Was just bored and thought I would post
> 
