---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-get-define-401
title: Response Get Define 401
severity: info
given: $.paths[*].get.responses
message: GET MUST Have 401 Response
description: GET operations should define a 401 Unauthorized response. Analysis
  of 773 specs shows 401 is the second most common response code with 4805
  occurrences, confirming authentication errors must be documented.
experience:
  - security
  - error-handling
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-get-define-401/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-get-define-401' (Response Get Define 401).
  Requirement: GET operations should define a 401 Unauthorized response.
  Analysis of 773 specs shows 401 is the second most common response code with
  4805 occurrences, confirming authentication errors must be documented. To fix:
  Ensure `401` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths[*].get.responses` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
