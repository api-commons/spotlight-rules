---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-monetary-property-avoid-float
title: Schema Monetary Property Avoid Float
severity: info
given: $..properties[?(
  @property.match(/(amount|price|cost|total|fee|balance|subtotal)/i) )]
message: Monetary property should not be a floating-point number.
description: Monetary properties (amount, price, cost, fee, balance, …) should
  avoid floating-point numbers, which lose precision — use an integer of minor
  units or a decimal string instead.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-monetary-property-avoid-float/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-monetary-property-avoid-float' (Schema Monetary
  Property Avoid Float). Requirement: Monetary properties (amount, price, cost,
  fee, balance, …) should avoid floating-point numbers, which lose precision —
  use an integer of minor units or a decimal string instead. To fix: Ensure
  `type` does NOT match the regular expression `^number$`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath `$..properties[?(
  @property.match(/(amount|price|cost|total|fee|balance|subtotal)/i) )]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
