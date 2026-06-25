---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-terms-of-service
title: API Property Require Terms Of Service
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Terms of Service
description: This property ensures that an API has a reference to a terms of
  service, covering the legal side of using an API
experience:
  - governance
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
