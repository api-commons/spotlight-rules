---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-schema-require-type
title: Parameter Schema Require Type
severity: info
given: $.components.parameters.*.schema
message: Parameter Schema Type
description: Parameters must always have their schema type defined, being
  precise about what type of data can be inputted and used to configure an API
  request.
experience:
  - data-modeling
  - consistency
spec:
  - parameters
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-schema-require-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-schema-require-type' (Parameter Schema Require
  Type). Requirement: Parameters must always have their schema type defined,
  being precise about what type of data can be inputted and used to configure an
  API request. To fix: Ensure `type` is present and non-empty at each matching
  location. This rule is evaluated at the JSONPath
  `$.components.parameters.*.schema` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-schema-require-type:
    title: Parameter Schema Require Type
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-schema-require-type/
    description: Parameters must always have their schema type defined, being
      precise about what type of data can be inputted and used to configure an API
      request.
    message: Parameter Schema Type
    severity: info
    given: $.components.parameters.*.schema
    then:
      field: type
      function: truthy
    tags:
      - format:openapi
      - spec:parameters
      - spec:schemas
      - spec:components
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-schema-require-type' (Parameter Schema Require
      Type). Requirement: Parameters must always have their schema type defined,
      being precise about what type of data can be inputted and used to configure
      an API request. To fix: Ensure `type` is present and non-empty at each
      matching location. This rule is evaluated at the JSONPath
      `$.components.parameters.*.schema` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
