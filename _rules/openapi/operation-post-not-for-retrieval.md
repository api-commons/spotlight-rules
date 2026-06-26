---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-post-not-for-retrieval
title: Operation Post Not For Retrieval
severity: info
given: $.paths[*].post
message: POST requests SHOULD NOT be used for retrieving information.
description: POST requests SHOULD NOT be used for retrieving information. Use GET instead.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-post-not-for-retrieval/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-post-not-for-retrieval' (Operation Post Not For
  Retrieval). Requirement: POST requests SHOULD NOT be used for retrieving
  information. Use GET instead. To fix: Ensure `summary` does NOT match the
  regular expression `(retrieve|fetch|get|read)`; rename or rewrite any value
  that does. This rule is evaluated at the JSONPath `$.paths[*].post` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
