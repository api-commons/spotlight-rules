---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: throttled-response-require-retry-after
title: Throttled Response Require Retry After
severity: warn
given: $.[responses][?(@property == "429" || @property == "503"  )][headers]
message: "Missing ratelimit header: {{property}} in {{path}}"
description: 'When a client is either: * throttled out with a 429 status code; *
  warned about a temporary server issue with a 503 status code; the server
  should explicitly communicate how long to wait before issuing further requests
  using the Retry-After header. Retry-After is defined in RFC7231. It requires
  the `Retry-After` field to be present and non-empty (evaluated at
  `$.[responses][?(@property == "429" || @property == "503"  )][headers]`).
  Severity: warn.'
experience:
  - reliability
  - error-handling
spec:
  - responses
  - headers
source:
  - team-digitale
builtin: false
---
