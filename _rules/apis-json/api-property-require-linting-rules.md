---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-linting-rules
title: API Property Require Linting Rules
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Linting Rules
description: This property ensures that an API has governance rules applied,
  usually as part of a central set of governance rules, defined by policy, or
  stages of the API lifecycle
experience:
  - governance
  - consistency
spec:
  - apis
  - properties
source: []
builtin: false
---
