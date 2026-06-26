---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-array-require-min-max-items
title: Schema Array Require Min Max Items
severity: info
given: $.[?(@.type=="array")]
message: Schema of type array must specify maxItems and minItems. {{path}} {{error}}
description: "Array size should be limited to mitigate resource exhaustion
  attacks. This can be done using `maxItems` and `minItems`, like in the example
  below. ``` Limited: type: array maxItems: 10 items: type: string format: date
  ``` You should ensure that the schema referenced in `items` is constrained
  too. If you delegate input validation to a library or framework, be sure to
  test it thoroughly and ensure that it verifies `maxItems`."
experience:
  - security
  - data-modeling
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-array-require-min-max-items/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-array-require-min-max-items' (Schema Array Require Min
  Max Items). Requirement: Array size should be limited to mitigate resource
  exhaustion attacks. This can be done using `maxItems` and `minItems`, like in
  the example below. ``` Limited: type: array maxItems: 10 items: type: string
  format: date ``` You should ensure that the schema referenced in `items` is
  constrained too. If you delegate input validation to a library or framework,
  be sure to test it thoroughly and ensure that it verifies `maxItems`. To fix:
  Ensure `maxItems` is defined at each matching location. Also: Ensure
  `minItems` is defined at each matching location. This rule is evaluated at the
  JSONPath `$.[?(@.type==\"array\")]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
