---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-singular-tag
title: Operation Singular Tag
severity: info
given: "#OperationObject"
message: Operation must not have more than a single tag.
description: Operation must not have more than a single tag.
experience:
  - consistency
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-singular-tag/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-singular-tag' (Operation Singular Tag).
  Requirement: Operation must not have more than a single tag. To fix: Ensure
  the length of `tags` is at most 1. This rule is evaluated at the JSONPath
  `#OperationObject` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
---
