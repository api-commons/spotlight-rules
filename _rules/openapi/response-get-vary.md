---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-get-vary
title: Response Get Vary
severity: info
given: $.paths[*].get.responses[?( @property >= 200 && @property < 300 &&
  @property != 204 )].headers
message: GET success responses should define a `Vary` header.
description: GET success responses should define a Vary header so caches key
  correctly on the request headers that affect the representation.
experience:
  - reliability
  - usability
  - performance
spec:
  - responses
topic:
  - caching
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-get-vary/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-get-vary' (Response Get Vary). Requirement: GET
  success responses should define a Vary header so caches key correctly on the
  request headers that affect the representation. To fix: Ensure `Vary` is
  present and non-empty at each matching location. Guidance: GET success
  responses should define a `Vary` header. This rule is evaluated at the
  JSONPath `$.paths[*].get.responses[?( @property >= 200 && @property < 300 &&
  @property != 204 )].headers` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
