---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-feedback-email
title: Include Feedback Email
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Feedback Email
description: This property ensures that there is an email available for API
  consumers to provide feedback
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
