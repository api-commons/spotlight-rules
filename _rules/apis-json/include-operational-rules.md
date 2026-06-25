---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-operational-rules
title: Include Operational Rules
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Operational Rules
description: This property ensures that an API has operational level rules for APIs
experience:
  - governance
spec:
  - apis
  - properties
source: []
builtin: false
---
