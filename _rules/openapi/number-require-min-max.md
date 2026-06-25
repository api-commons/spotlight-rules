---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: number-require-min-max
title: Number Require Min Max
severity: warn
given: $.[?(@.type=="number")] | $.[?(@.type=="integer")]
message: Schema of type number or integer must specify a maximum and a minimum.
  {{path}} {{error}}
description: 'Numeric values should be limited in size to mitigate resource
  exhaustion using `maximum` and `minimum`. If you delegate input validation to
  a library or framework, be sure to test it thoroughly. It requires the
  `maximum` field to be defined, and requires the `minimum` field to be defined
  (evaluated at `$.[?(@.type=="number")]`, `$.[?(@.type=="integer")]`).
  Severity: warn.'
experience:
  - security
  - data-modeling
spec:
  - document
source:
  - team-digitale
builtin: false
---
