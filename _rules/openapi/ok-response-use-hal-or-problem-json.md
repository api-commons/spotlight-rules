---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: ok-response-use-hal-or-problem-json
title: Ok Response Use Hal Or Problem JSON
severity: error
given: $.paths..responses[?( @property == 200 )].content[*]~
message: "Response documents MUST be of application/hal+json or
  application/problem+json media types: {{error}}"
description: 'All success responses MUST be of media type `application/hal+json`
  or `application/problem+json`. It requires the targeted value to be one of
  ["application/hal+json","application/problem+json"] (evaluated at
  `$.paths..responses[?( @property == 200 )].content[*]~`). Severity: error.'
experience:
  - consistency
  - data-modeling
spec:
  - paths
  - responses
  - media-types
source:
  - adidas
builtin: false
---
