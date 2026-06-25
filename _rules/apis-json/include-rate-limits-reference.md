---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-rate-limits-reference
title: Include Rate Limits Reference
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Terms of Services
description: This property ensures there is an API rate limits reference
  associated with API, ensuring the rate limits applied to an API are clearly
  communicated
experience:
  - reliability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
