---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-number-format-allowed-values
title: Schema Number Format Allowed Values
severity: info
given: |
  $.[?(@.type=="number")]
message: Type format is "{{value}}", expected one of [decimal32, decimal64,
  decimal128, float, double]. {{path}}
description: To improve interoperability, integer and number formats are
  constrained to a shared subset. See recommendation RAC_REST_FORMAT_004.
experience:
  - data-modeling
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-number-format-allowed-values/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-number-format-allowed-values' (Schema Number Format
  Allowed Values). Requirement: To improve interoperability, integer and number
  formats are constrained to a shared subset. See recommendation
  RAC_REST_FORMAT_004. To fix: Set `format` to one of the allowed values:
  decimal32, decimal64, float, double, decimal128. This rule is evaluated at the
  JSONPath `$.[?(@.type==\"number\")] ` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
