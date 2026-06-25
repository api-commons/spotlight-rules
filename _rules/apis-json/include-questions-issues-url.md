---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-questions-issues-url
title: Include Questions Issues URL
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Questions Issues URL
description: This property ensures that an API has a dedicated link to Git
  issues for asking questions
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
