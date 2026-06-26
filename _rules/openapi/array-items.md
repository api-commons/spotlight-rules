---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: array-items
title: Array Items
severity: info
given: "#ArrayProperties"
message: 'Schemas with "type: array", require a sibling "items" field'
description: Array Items.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/array-items/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'array-items' (Array Items). Requirement: Array Items. To fix:
  Ensure `items` is present and non-empty at each matching location. This rule
  is evaluated at the JSONPath `#ArrayProperties` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
---
