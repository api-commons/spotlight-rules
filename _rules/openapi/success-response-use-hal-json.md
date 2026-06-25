---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: success-response-use-hal-json
title: Success Response Use Hal JSON
severity: error
given: $.paths..responses[?( @property >= 201 && @property < 300 && @property !=
  204)].content[*]~
message: "Response documents MUST be of application/hal+json media types: {{error}}"
description: 'All success responses MUST be of media type
  `application/hal+json`. It requires the targeted value to be one of
  ["application/hal+json"] (evaluated at `$.paths..responses[?( @property >= 201
  && @property < 300 && @property != 204)].content[*]~`). Severity: error.'
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
