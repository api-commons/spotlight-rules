---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-define-404
title: Response Define 404
severity: info
given: $.paths[?(@property.match(/.*\/{.*}.*/))]..responses
message: "{{description}}. Missing {{property}}"
description: Responses should contain common response - 404 (not found).
experience:
  - error-handling
  - documentation
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-define-404/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-define-404' (Response Define 404). Requirement:
  Responses should contain common response - 404 (not found). To fix: Ensure
  `404` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath
  `$.paths[?(@property.match(/.*\\/{.*}.*/))]..responses` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
