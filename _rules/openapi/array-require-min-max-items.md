---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: array-require-min-max-items
title: Array Require Min Max Items
severity: warn
given: $.[?(@.type=="array")]
message: Schema of type array must specify maxItems and minItems. {{path}} {{error}}
description: 'Array size should be limited to mitigate resource exhaustion
  attacks. This can be done using `maxItems` and `minItems`, like in the example
  below. ``` Limited: type: array maxItems: 10 items: type: string format: date
  ``` You should ensure that the schema referenced in `items` is constrained
  too. If you delegate input validation to a library or framework, be sure to
  test it thoroughly and ensure that it verifies `maxItems`. It requires the
  `maxItems` field to be defined, and requires the `minItems` field to be
  defined (evaluated at `$.[?(@.type=="array")]`). Severity: warn.'
experience:
  - security
  - data-modeling
spec:
  - document
source:
  - team-digitale
builtin: false
---
