---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-patch-define-404
title: Response Patch Define 404
severity: info
given: $.paths[*].patch.responses
message: PATCH MUST Have 404 Response
description: PATCH operations should define a 404 Not Found response for cases
  where the resource to be updated does not exist.
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-patch-define-404/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-patch-define-404' (Response Patch Define 404).
  Requirement: PATCH operations should define a 404 Not Found response for cases
  where the resource to be updated does not exist. To fix: Ensure `404` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths[*].patch.responses` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
