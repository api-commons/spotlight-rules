---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-post-define-201
title: Response Post Define 201
severity: info
given: $.paths[*].post.responses
message: POST Responses MUST Have 201 Status Codes
description: POST responses should have a 201 success HTTP status codes,
  communicating a success created response to consumers.
experience:
  - reliability
  - consistency
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-post-define-201/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-post-define-201' (Response Post Define 201).
  Requirement: POST responses should have a 201 success HTTP status codes,
  communicating a success created response to consumers. To fix: Ensure `201` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths[*].post.responses` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
