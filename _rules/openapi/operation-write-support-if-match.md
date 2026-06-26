---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-write-support-if-match
title: Operation Write Support If Match
severity: info
given: $.paths[*][put,patch,delete]
message: Operation should accept a `If-Match` request header.
description: Write operations should accept an If-Match request header to enable
  optimistic concurrency / conditional writes.
experience:
  - reliability
  - usability
spec:
  - parameters
topic:
  - conditional-requests
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-write-support-if-match/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-write-support-if-match' (Operation Write Support If
  Match). Requirement: Write operations should accept an If-Match request header
  to enable optimistic concurrency / conditional writes. To fix: Adjust
  `parameters` so it conforms to the schema this rule requires. Guidance:
  Operation should accept a `If-Match` request header. This rule is evaluated at
  the JSONPath `$.paths[*][put,patch,delete]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
