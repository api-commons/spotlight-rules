---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-throttled-require-retry-after
title: Response Throttled Require Retry After
severity: info
given: $.[responses][?(@property == "429" || @property == "503"  )][headers]
message: "Missing ratelimit header: {{property}} in {{path}}"
description: "When a client is either: * throttled out with a 429 status code; *
  warned about a temporary server issue with a 503 status code; the server
  should explicitly communicate how long to wait before issuing further requests
  using the Retry-After header. Retry-After is defined in RFC7231."
experience:
  - reliability
  - error-handling
  - performance
spec:
  - responses
  - headers
topic:
  - rate-limiting
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/response-throttled-require-retry-after/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-throttled-require-retry-after' (Response Throttled
  Require Retry After). Requirement: When a client is either: * throttled out
  with a 429 status code; * warned about a temporary server issue with a 503
  status code; the server should explicitly communicate how long to wait before
  issuing further requests using the Retry-After header. Retry-After is defined
  in RFC7231. To fix: Ensure `Retry-After` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.[responses][?(@property == \"429\" || @property == \"503\" )][headers]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
