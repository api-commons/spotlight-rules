---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-feedback-issues-url
title: Include Feedback Issues URL
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Feedback Issues URL
description: This property ensures there is a URL to Git issues specifically for
  providing feedback
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
