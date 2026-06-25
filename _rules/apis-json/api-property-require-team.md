---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-team
title: API Property Require Team
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Team Defined
description: This property ensures that there is a reference to the team behind
  an API, providing a reference to business and engineering stakeholders
experience:
  - governance
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
