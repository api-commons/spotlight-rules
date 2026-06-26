---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-return-correlation-id
title: Response Return Correlation ID
severity: info
given: $..responses.*
message: Responses should return a correlation / request ID header.
description: Responses should return a correlation / request ID header (e.g.
  Request-Id or X-Correlation-Id) so callers can correlate a response with their
  request and with server-side logs.
experience:
  - reliability
  - usability
  - observability
spec:
  - responses
topic:
  - tracing
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-return-correlation-id/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-return-correlation-id' (Response Return Correlation
  ID). Requirement: Responses should return a correlation / request ID header
  (e.g. Request-Id or X-Correlation-Id) so callers can correlate a response with
  their request and with server-side logs. To fix: Adjust `headers` so it
  conforms to the schema this rule requires. This rule is evaluated at the
  JSONPath `$..responses.*` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
