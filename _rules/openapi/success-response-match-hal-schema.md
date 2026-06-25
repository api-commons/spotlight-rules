---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: success-response-match-hal-schema
title: Success Response Match Hal Schema
severity: error
given: $.paths..responses[?( @property == 200 && @property < 300 && @property !=
  204)].content[?(@property === "application/hal+json")]
message: "Response documents MUST follow application/hal+json schema: {{error}}"
description: 'All success responses MUST follow `application/hal+json` schema.
  It validates the `schema` field against a JSON Schema (evaluated at
  `$.paths..responses[?( @property == 200 && @property < 300 && @property !=
  204)].content[?(@property === "application/hal+json")]`). Severity: error.'
experience:
  - data-modeling
  - consistency
spec:
  - paths
  - responses
  - media-types
source:
  - adidas
builtin: false
---
