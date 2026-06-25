---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-staging-environment
title: Include Staging Environment
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Stage Environment
description: This property ensures that there is a staging environment available
  for an API, providing base URL, tokens, keys, and other key / value pairs that
  are needed to integrate with an API
experience:
  - usability
  - reliability
spec:
  - apis
  - properties
source: []
builtin: false
---
