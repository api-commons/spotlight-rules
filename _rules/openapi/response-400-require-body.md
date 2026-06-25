---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-400-require-body
title: Response 400 Require Body
severity: error
given: $.paths.*.*.responses['400']
message: ""
description: "All 400 responses must include a response body. It requires the
  `content` field to be present and non-empty (evaluated at
  `$.paths.*.*.responses['400']`). Severity: error."
experience:
  - error-handling
  - documentation
spec:
  - paths
  - responses
source:
  - trimble
builtin: false
---
