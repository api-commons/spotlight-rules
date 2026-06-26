---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-number-require-format
title: Schema Number Require Format
severity: info
given: $.[?(@.type=="number")]
message: Schema of type number or integer must specify a format. {{path}}
description: Schema of type number or integer must specify a format to express
  the associated datatype, eg. `int32`, `int64`, ... You can express similar
  requirements using the `minimum` and `maximum` properties. See recommendation
  RAC_REST_FORMAT_004.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-number-require-format/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-number-require-format' (Schema Number Require Format).
  Requirement: Schema of type number or integer must specify a format to express
  the associated datatype, eg. `int32`, `int64`, ... You can express similar
  requirements using the `minimum` and `maximum` properties. See recommendation
  RAC_REST_FORMAT_004. To fix: Ensure `format` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.[?(@.type==\"number\")]` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
