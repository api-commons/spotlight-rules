---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-openapi-governance-rules
title: Include Openapi Governance Rules
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has API Rules
description: This property ensures that an OpenAPI has support governance rules,
  that can be applied during design time via editors, development time via IDE,
  and run-time via CI/CD pipelines
experience:
  - governance
spec:
  - apis
  - properties
source: []
builtin: false
---
