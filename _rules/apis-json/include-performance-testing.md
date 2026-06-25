---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-performance-testing
title: Include Performance Testing
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has API Performance
description: This property ensures that an API has performance testing in place,
  providing a URL to the performance testing, dashboard, or other resource
experience:
  - reliability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
