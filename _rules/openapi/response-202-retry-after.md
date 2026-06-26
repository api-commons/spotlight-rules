---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-202-retry-after
title: Response 202 Retry After
severity: info
given: $.paths[*][*].responses['202'].headers
message: 202 Accepted responses should document a Retry-After header.
description: 202 Accepted responses should document a Retry-After header
  suggesting how long clients should wait before polling the status resource.
experience:
  - reliability
  - usability
  - performance
spec:
  - responses
topic:
  - rate-limiting
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-202-retry-after/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-202-retry-after' (Response 202 Retry After).
  Requirement: 202 Accepted responses should document a Retry-After header
  suggesting how long clients should wait before polling the status resource. To
  fix: Ensure `Retry-After` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath
  `$.paths[*][*].responses['202'].headers` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
