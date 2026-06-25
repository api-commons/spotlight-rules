---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: write-response-require-content-type
title: Write Response Require Content Type
severity: error
given: $.paths[*].post.responses | $.paths[*].put.responses
message: "{{error}}"
description: "All API responses MUST include the Content-Type header in all
  responses. It applies a custom validation to the targeted value (evaluated at
  `$.paths[*].post.responses`, `$.paths[*].put.responses`). Severity: error."
experience:
  - consistency
  - data-modeling
spec:
  - paths
  - operations
  - responses
source:
  - trimble
builtin: false
---
