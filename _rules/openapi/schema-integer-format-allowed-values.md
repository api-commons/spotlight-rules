---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-integer-format-allowed-values
title: Schema Integer Format Allowed Values
severity: info
given: |
  $.[?(@.type=="integer")]
message: Type format is "{{value}}", expected one of [int32, int64]. {{path}}
description: To improve interoperability, integer and number formats are
  constrained to a shared subset. See recommendation RAC_REST_FORMAT_004.
experience:
  - data-modeling
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-integer-format-allowed-values/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-integer-format-allowed-values' (Schema Integer Format
  Allowed Values). Requirement: To improve interoperability, integer and number
  formats are constrained to a shared subset. See recommendation
  RAC_REST_FORMAT_004. To fix: Set `format` to one of the allowed values: int32,
  int64. This rule is evaluated at the JSONPath `$.[?(@.type==\"integer\")] ` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
