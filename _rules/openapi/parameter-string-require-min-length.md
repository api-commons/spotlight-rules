---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-string-require-min-length
title: Parameter String Require Min Length
severity: info
given: $.apis.*.properties.* | $.common.*
message: Parameter Schema Type String MinLength
description: Parameters that are of the string schema type must have their
  minimum value set, defining the shape of parameter data passed in with a
  request.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-string-require-min-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-string-require-min-length' (Parameter String
  Require Min Length). Requirement: Parameters that are of the string schema
  type must have their minimum value set, defining the shape of parameter data
  passed in with a request. To fix: Ensure `minLength` is present and non-empty
  at each matching location. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-string-require-min-length:
    title: Parameter String Require Min Length
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-string-require-min-length/
    description: Parameters that are of the string schema type must have their
      minimum value set, defining the shape of parameter data passed in with a
      request.
    message: Parameter Schema Type String MinLength
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      field: minLength
      function: truthy
    tags:
      - format:openapi
      - spec:schemas
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-string-require-min-length' (Parameter String
      Require Min Length). Requirement: Parameters that are of the string schema
      type must have their minimum value set, defining the shape of parameter data
      passed in with a request. To fix: Ensure `minLength` is present and
      non-empty at each matching location. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
