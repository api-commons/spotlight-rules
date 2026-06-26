---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-get-cache-control
title: Response Get Cache Control
severity: info
given: $.paths[*].get.responses[?( @property >= 200 && @property < 300 &&
  @property != 204 )].headers
message: GET success responses should define a `Cache-Control` header.
description: GET success responses should define a Cache-Control header so
  clients and intermediaries know how to cache the representation.
experience:
  - reliability
  - usability
  - performance
spec:
  - responses
topic:
  - caching
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-get-cache-control/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-get-cache-control' (Response Get Cache Control).
  Requirement: GET success responses should define a Cache-Control header so
  clients and intermediaries know how to cache the representation. To fix:
  Ensure `Cache-Control` is present and non-empty at each matching location.
  Guidance: GET success responses should define a `Cache-Control` header. This
  rule is evaluated at the JSONPath `$.paths[*].get.responses[?( @property >=
  200 && @property < 300 && @property != 204 )].headers` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
