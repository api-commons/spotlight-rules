---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-correlation-id
title: Request Support Correlation ID
severity: info
given: $.paths[*][get,post,put,patch,delete]
message: Operation should accept a `Correlation-Id` request header.
description: Operations should accept a correlation / request ID request header
  (e.g. Correlation-Id or X-Request-Id) so a caller-supplied id can be traced
  end to end.
experience:
  - reliability
  - usability
  - observability
spec:
  - parameters
topic:
  - tracing
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-support-correlation-id/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-support-correlation-id' (Request Support Correlation
  ID). Requirement: Operations should accept a correlation / request ID request
  header (e.g. Correlation-Id or X-Request-Id) so a caller-supplied id can be
  traced end to end. To fix: Adjust `parameters` so it conforms to the schema
  this rule requires. Guidance: Operation should accept a `Correlation-Id`
  request header. This rule is evaluated at the JSONPath
  `$.paths[*][get,post,put,patch,delete]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
