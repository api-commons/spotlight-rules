---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-versioning
title: API Property Require Versioning
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Versioning for API
description: This property ensures there is a reference to how APIs are
  versioned, providing a single place where teams can learn about how change is
  communicated
experience:
  - versioning
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
