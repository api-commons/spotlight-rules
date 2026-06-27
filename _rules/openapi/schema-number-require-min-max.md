---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-number-require-min-max
title: Schema Number Require Min Max
severity: info
given: $.[?(@.type=="number")] | $.[?(@.type=="integer")]
message: Schema of type number or integer must specify a maximum and a minimum.
  {{path}} {{error}}
description: Numeric values should be limited in size to mitigate resource
  exhaustion using `maximum` and `minimum`. If you delegate input validation to
  a library or framework, be sure to test it thoroughly.
experience:
  - security
  - data-modeling
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-number-require-min-max/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-number-require-min-max' (Schema Number Require Min
  Max). Requirement: Numeric values should be limited in size to mitigate
  resource exhaustion using `maximum` and `minimum`. If you delegate input
  validation to a library or framework, be sure to test it thoroughly. To fix:
  Ensure `maximum` is defined at each matching location. Also: Ensure `minimum`
  is defined at each matching location. This rule is evaluated at the JSONPath
  `$.[?(@.type==\"number\")] | $.[?(@.type==\"integer\")]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-number-require-min-max:
    title: Schema Number Require Min Max
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-number-require-min-max/
    description: Numeric values should be limited in size to mitigate resource
      exhaustion using `maximum` and `minimum`. If you delegate input validation
      to a library or framework, be sure to test it thoroughly.
    message: Schema of type number or integer must specify a maximum and a minimum.
      {{path}} {{error}}
    severity: info
    given:
      - $.[?(@.type=="number")]
      - $.[?(@.type=="integer")]
    then:
      - field: maximum
        function: defined
      - field: minimum
        function: defined
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:schemas
      - experience:security
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-number-require-min-max' (Schema Number Require Min
      Max). Requirement: Numeric values should be limited in size to mitigate
      resource exhaustion using `maximum` and `minimum`. If you delegate input
      validation to a library or framework, be sure to test it thoroughly. To fix:
      Ensure `maximum` is defined at each matching location. Also: Ensure
      `minimum` is defined at each matching location. This rule is evaluated at
      the JSONPath `$.[?(@.type==\"number\")] | $.[?(@.type==\"integer\")]` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
