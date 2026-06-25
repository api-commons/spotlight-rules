---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-sdk
title: API Property Require SDK
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has SDK
description: This property ensures that there is an SDK available for an API,
  making it easier for developers to integrate an API into their applications
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
