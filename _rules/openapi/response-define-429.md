---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-define-429
title: Response Define 429
severity: info
given: $.paths..responses
message: "{{description}}. Missing {{property}}"
description: Responses should contain common response - 429 (too many requests).
experience:
  - error-handling
  - reliability
  - performance
spec:
  - paths
  - responses
topic:
  - rate-limiting
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/response-define-429/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-define-429' (Response Define 429). Requirement:
  Responses should contain common response - 429 (too many requests). To fix:
  Ensure `429` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths..responses` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
