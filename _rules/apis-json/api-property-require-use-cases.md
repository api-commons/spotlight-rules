---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-use-cases
title: API Property Require Use Cases
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Use Cases
description: This property ensures there is a reference to the use cases for an
  API, helping align an API with the who, what, how, and why of putting an API
  to work
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
