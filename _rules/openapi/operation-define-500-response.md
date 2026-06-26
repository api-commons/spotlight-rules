---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-define-500-response
title: Operation Define 500 Response
severity: info
given: $.paths[*][*]
message: Every endpoint SHOULD have a 500 response.
description: Every endpoint SHOULD have a 500 response.
experience:
  - error-handling
  - reliability
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-define-500-response/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-define-500-response' (Operation Define 500
  Response). Requirement: Every endpoint SHOULD have a 500 response. To fix:
  Ensure `responses.500` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath `$.paths[*][*]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
