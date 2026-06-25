---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-sandbox
title: API Property Require Sandbox
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Blog
description: This property ensures that an API has a reference to a sandbox for
  individual APIs or as part of common properties, providing sandbox, synthetic
  data, and mock servers for use in making test requests.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
