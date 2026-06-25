---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-deprecation-policy
title: Include Deprecation Policy
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Deprecation Policy
description: This property ensures that an API has a deprecation policy shared
  as part of the contract, communicating what the lifespan of APIs are, each
  individual version, as well as communication around the deprecation of APIs
experience:
  - versioning
  - governance
spec:
  - apis
  - properties
source: []
builtin: false
---
