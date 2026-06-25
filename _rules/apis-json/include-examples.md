---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-examples
title: Include Examples
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Blog
description: This property ensures that an API has a reference to a examples for
  individual APIs or as part of common properties, providing examples and
  synthentic data that can be used for APIs.
experience:
  - documentation
  - usability
spec:
  - apis
  - properties
source: []
builtin: false
---
