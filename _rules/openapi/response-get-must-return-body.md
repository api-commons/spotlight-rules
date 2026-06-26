---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-get-must-return-body
title: Response Get Must Return Body
severity: info
given: $.paths[*].get.responses[*]
message: A `GET` operation must return a response body.
description: A `GET` operation must return a response body.
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-get-must-return-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-get-must-return-body' (Response Get Must Return
  Body). Requirement: A `GET` operation must return a response body. To fix:
  Ensure `content` is present and non-empty at each matching location. This rule
  is evaluated at the JSONPath `$.paths[*].get.responses[*]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
