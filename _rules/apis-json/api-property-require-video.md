---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-video
title: API Property Require Video
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Videos for API
description: This property ensures there is a reference to a video page or
  channel for an API
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
