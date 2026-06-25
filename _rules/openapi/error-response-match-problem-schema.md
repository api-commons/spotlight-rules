---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: error-response-match-problem-schema
title: Error Response Match Problem Schema
severity: hint
given: $.paths.[*].responses[?(@property.match(/^(4|5|default)/))][[schema]]
message: Your schema doesn't seem to match RFC7807. Are you sure it is ok? {{path}}
description: 'WARN: This rule is under implementation and just provides an hint.
  Error management is a key enabler of a resilient API ecosystem. Enforcing a
  consistent schema for errors between different APIs, enables client to
  properly implement an error management strategy, with positive impacts for
  users. This rule inspects the schema returned by an error response and
  verifies whether it contains the main properties defined in RFC7807: `status`,
  `title` and `detail`. An example of a valid payload is ``` { "title": "Not
  Found", "status": 404, "detail": "Book does not exist; id: 123" } ``` See
  recommendation RAC_REST_NAME_007. It validates the targeted value against a
  JSON Schema (evaluated at
  `$.paths.[*].responses[?(@property.match(/^(4|5|default)/))][[schema]]`).
  Severity: hint.'
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
  - schemas
source:
  - team-digitale
builtin: false
---
