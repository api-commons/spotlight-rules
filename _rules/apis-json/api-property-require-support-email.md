---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-support-email
title: API Property Require Support Email
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Support Email
description: This property ensures that an API has email support, providing a
  valid email address that can be used to get API support
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
