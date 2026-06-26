---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-define-500
title: Response Define 500
severity: info
given: $.paths..responses
message: "{{description}}. Missing {{property}}"
description: Responses should contain common response - 500 (server error).
experience:
  - error-handling
  - reliability
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-define-500/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-define-500' (Response Define 500). Requirement:
  Responses should contain common response - 500 (server error). To fix: Ensure
  `500` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths..responses` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
