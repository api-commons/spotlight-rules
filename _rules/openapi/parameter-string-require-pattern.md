---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-string-require-pattern
title: Parameter String Require Pattern
severity: info
given: $.apis.*.properties.* | $.common.*
message: Parameter Schema Type String Pattern
description: Parameters that are of the string schema type must have a pattern
  set, using a regex to define the shape of parameter data passed in with a
  request.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-string-require-pattern/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-string-require-pattern' (Parameter String Require
  Pattern). Requirement: Parameters that are of the string schema type must have
  a pattern set, using a regex to define the shape of parameter data passed in
  with a request. To fix: Ensure `pattern` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-string-require-pattern:
    title: Parameter String Require Pattern
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-string-require-pattern/
    description: Parameters that are of the string schema type must have a pattern
      set, using a regex to define the shape of parameter data passed in with a
      request.
    message: Parameter Schema Type String Pattern
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      field: pattern
      function: truthy
    tags:
      - format:openapi
      - spec:schemas
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-string-require-pattern' (Parameter String Require
      Pattern). Requirement: Parameters that are of the string schema type must
      have a pattern set, using a regex to define the shape of parameter data
      passed in with a request. To fix: Ensure `pattern` is present and non-empty
      at each matching location. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
