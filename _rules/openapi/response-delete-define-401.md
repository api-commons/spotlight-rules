---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-delete-define-401
title: Response Delete Define 401
severity: info
given: $.paths[*].delete.responses
message: DELETE MUST Have 401 Response
description: DELETE operations should define a 401 Unauthorized response to
  document authentication requirements for destructive operations.
experience:
  - security
  - error-handling
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-define-401/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-delete-define-401' (Response Delete Define 401).
  Requirement: DELETE operations should define a 401 Unauthorized response to
  document authentication requirements for destructive operations. To fix:
  Ensure `401` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths[*].delete.responses` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
