---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-error-match-problem-schema
title: Response Error Match Problem Schema
severity: info
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
  recommendation RAC_REST_NAME_007.'
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-error-match-problem-schema/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-error-match-problem-schema' (Response Error Match
  Problem Schema). Requirement: WARN: This rule is under implementation and just
  provides an hint. Error management is a key enabler of a resilient API
  ecosystem. Enforcing a consistent schema for errors between different APIs,
  enables client to properly implement an error management strategy, with
  positive impacts for users. This rule inspects the schema returned by an error
  response and verifies whether it contains the main properties defined in
  RFC7807: `status`, `title` and `detail`. An example of a valid payload is ```
  { \"title\": \"Not Found\", \"status\": 404, \"detail\": \"Book does not
  exist; id: 123\" } ``` See recommendation RAC_REST_NAME_007. To fix: Adjust
  the targeted value so it conforms to the schema this rule requires. This rule
  is evaluated at the JSONPath
  `$.paths.[*].responses[?(@property.match(/^(4|5|default)/))][[schema]]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
