---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: duplicated-entry-in-enum
title: Duplicated Entry In Enum
severity: info
given: $..[?(@property !== 'properties' && @.enum && @.enum.constructor.name ===
  'Array')]
message: "{{error}}"
description: Enum values must not have duplicate entry.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/duplicated-entry-in-enum/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'duplicated-entry-in-enum' (Duplicated Entry In Enum).
  Requirement: Enum values must not have duplicate entry. This rule is evaluated
  at the JSONPath `$..[?(@property !== 'properties' && @.enum &&
  @.enum.constructor.name === 'Array')]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
---
