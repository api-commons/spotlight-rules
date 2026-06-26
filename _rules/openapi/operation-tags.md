---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-tags
title: Operation Tags
severity: info
given: "#OperationObject"
message: Operation must have non-empty "tags" array.
description: Operation must have non-empty "tags" array.
experience:
  - discoverability
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-tags/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-tags' (Operation Tags). Requirement: Operation must
  have non-empty \"tags\" array. To fix: Adjust `tags` so it conforms to the
  schema this rule requires. This rule is evaluated at the JSONPath
  `#OperationObject` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
---
