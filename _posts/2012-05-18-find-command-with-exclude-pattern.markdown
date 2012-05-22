--- 
layout: post
title: find command with exclude pattern
comments: true
categories: Linux
---
In occasions we might tend to follow the eliminate rule to find out the desired output.

_find_ is one of the powerful command used to locate files on a Unix or Linux system.

For using find to exclude pattern, we need to add a ‘!‘ before the expression as:

`find <path> ! -name “<expression>”`

Eg: `find . ! -name “*.mp3″` => finds all files/folders in the current working directory except with name ending in .mp3

To exclude more than one pattern,

`find <path> ! \( -name “<expression1>” -o -name “<expression1>” \)`

Eg: `find . ! \( -name “*.png” -o -name “*.jpg” -o -name “*.pdf” \)` => finds all files/folders in the current working directory except with name ending in .png, .jpg and .pdf

_Note_:

1. space before ` \)` is important

2. _-iname_ in place of _-name_ implies pattern case insensitive 
