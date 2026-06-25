---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-api-lifecycle
title: Include API Lifecycle
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Lifecycle
description: This property makes sure there is an API lifecycle schema defining
  all of the stages of a lifecycle and which policies get applied at each stage
  of the API lifecycle
experience:
  - governance
  - versioning
spec:
  - apis
  - properties
source: []
builtin: false
---
