---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-examples
title: Parameter Require Examples
severity: info
given: $..parameters.*
message: "{{description}}; missing {{property}}"
description: Parameters must include examples.
experience:
  - documentation
  - usability
spec:
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-require-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-require-examples' (Parameter Require Examples).
  Requirement: Parameters must include examples. To fix: Include exactly one of:
  example, examples. This rule is evaluated at the JSONPath `$..parameters.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
