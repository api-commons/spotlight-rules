---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-get-must-return-200
title: Response Get Must Return 200
severity: info
given: $.paths[*].get.responses
message: GET operations must always return 200 status code.
description: GET operations must always return 200 status code.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-get-must-return-200/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-get-must-return-200' (Response Get Must Return 200).
  Requirement: GET operations must always return 200 status code. To fix: Ensure
  `200` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths[*].get.responses` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
