---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: error-response-use-problem-type-2
title: Error Response Use Problem Type 2
severity: error
given: $.paths...responses[?(@property.match(/^(4|5)/))].content.*~
message: ""
description: 'Every error response SHOULD support RFC 7807. It requires the
  targeted value to be one of
  ["application/problem+xml","application/problem+json"] (evaluated at
  `$.paths...responses[?(@property.match(/^(4|5)/))].content.*~`). Severity:
  error.'
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
  - media-types
source:
  - sps-commerce
builtin: false
---
