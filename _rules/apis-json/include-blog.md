---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-blog
title: Include Blog
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Blog
description: This property ensures that an API has a reference to a blog where
  anyone can find updates and other stories that will help keep API consumers
  and other stakeholders up to speed on what is happening with an API, and the
  larger operations
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
