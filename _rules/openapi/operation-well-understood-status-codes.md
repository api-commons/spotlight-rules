---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-well-understood-status-codes
title: Operation Well Understood Status Codes
severity: info
given: $.paths.*
message: "{{error}}"
description: MUST use standard HTTP status codes [150].
experience:
  - error-handling
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-well-understood-status-codes/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-well-understood-status-codes' (Operation Well
  Understood Status Codes). Requirement: MUST use standard HTTP status codes
  [150]. This rule is evaluated at the JSONPath `$.paths.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
