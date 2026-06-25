---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-go-sdk
title: API Property Require Go SDK
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Go SDK
description: This property ensures that there is a Go SDK available for an API,
  making it easier for Go developers to integrate an API into their applications
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
