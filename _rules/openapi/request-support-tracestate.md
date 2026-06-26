---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-tracestate
title: Request Support Tracestate
severity: info
given: $.paths[*][get,post,put,patch,delete]
message: Operation should accept a `tracestate` request header.
description: Operations should accept a tracestate request header (W3C Trace
  Context) so vendor-specific trace state propagates alongside traceparent.
experience:
  - reliability
  - usability
  - observability
spec:
  - parameters
topic:
  - tracing
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-support-tracestate/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-support-tracestate' (Request Support Tracestate).
  Requirement: Operations should accept a tracestate request header (W3C Trace
  Context) so vendor-specific trace state propagates alongside traceparent. To
  fix: Adjust `parameters` so it conforms to the schema this rule requires.
  Guidance: Operation should accept a `tracestate` request header. This rule is
  evaluated at the JSONPath `$.paths[*][get,post,put,patch,delete]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
