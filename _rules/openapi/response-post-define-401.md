---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-post-define-401
title: Response Post Define 401
severity: info
given: $.paths[*].post.responses
message: POST MUST Have 401 Response
description: POST operations should define a 401 Unauthorized response to
  document authentication requirements for write operations.
experience:
  - security
  - error-handling
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-post-define-401/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-post-define-401' (Response Post Define 401).
  Requirement: POST operations should define a 401 Unauthorized response to
  document authentication requirements for write operations. To fix: Ensure
  `401` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths[*].post.responses` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
