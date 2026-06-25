---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-production-environment
title: Include Production Environment
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Production Environment
description: This property ensures that there is a production environment
  available for an API, providing base URL, tokens, keys, and other key / value
  pairs that are needed to integrate with an API
experience:
  - usability
  - reliability
spec:
  - apis
  - properties
source: []
builtin: false
---
