---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-error-use-problem-json
title: Response Error Use Problem JSON
severity: info
given: $.paths..responses[?( @property >= 400 && @property < 600)].content[*]~
message: "Error response documents MUST use the application/problem+json media
  type: {{error}}"
description: All 4xx and 5xx error responses MUST use the
  `application/problem+json` media type (RFC 7807).
experience:
  - consistency
  - error-handling
spec:
  - paths
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-error-use-problem-json/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-error-use-problem-json' (Response Error Use Problem
  JSON). Requirement: All 4xx and 5xx error responses MUST use the
  `application/problem+json` media type (RFC 7807). To fix: Set the targeted
  value to one of the allowed values: application/problem+json. This rule is
  evaluated at the JSONPath `$.paths..responses[?( @property >= 400 && @property
  < 600)].content[*]~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
