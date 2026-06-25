---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-blog-feed
title: Include Blog Feed
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Blog Feed
description: This property ensures that blogs in support of APIs have an Atom or
  RSS feed of posts, allowing for the syndication of updates and information
  around individual APIs and the operations around them
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
