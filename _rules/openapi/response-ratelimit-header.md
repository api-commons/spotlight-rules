---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-ratelimit-header
title: Response Ratelimit Header
severity: info
given: $..responses.*
message: Responses should define a `RateLimit` header.
description: Responses should define the structured RateLimit header (current
  IETF draft) conveying quota, remaining, and reset in one field — the modern
  successor to the RateLimit-Limit/Remaining/Reset triplet.
experience:
  - reliability
  - usability
  - performance
spec:
  - responses
topic:
  - rate-limiting
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-ratelimit-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-ratelimit-header' (Response Ratelimit Header).
  Requirement: Responses should define the structured RateLimit header (current
  IETF draft) conveying quota, remaining, and reset in one field — the modern
  successor to the RateLimit-Limit/Remaining/Reset triplet. To fix: Ensure
  `headers.RateLimit` is present and non-empty at each matching location.
  Guidance: Responses should define a `RateLimit` header. This rule is evaluated
  at the JSONPath `$..responses.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
