---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-schema
title: Parameter Require Schema
severity: info
given: $.components.parameters.*
message: Parameters MUST Have Schema
description: Parameters must always possess a schema to help define the format
  and shape of the parameter, setting expections with consumers about what
  should be passed in.
experience:
  - data-modeling
  - documentation
spec:
  - parameters
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-require-schema/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-require-schema' (Parameter Require Schema).
  Requirement: Parameters must always possess a schema to help define the format
  and shape of the parameter, setting expections with consumers about what
  should be passed in. To fix: Ensure `schema` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.components.parameters.*` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  parameter-require-schema:
    title: Parameter Require Schema
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-require-schema/
    severity: info
    description: Parameters must always possess a schema to help define the format
      and shape of the parameter, setting expections with consumers about what
      should be passed in.
    message: Parameters MUST Have Schema
    given: $.components.parameters.*
    then:
      field: schema
      function: truthy
    tags:
      - format:openapi
      - spec:parameters
      - spec:components
      - experience:data-modeling
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-require-schema' (Parameter Require Schema).
      Requirement: Parameters must always possess a schema to help define the
      format and shape of the parameter, setting expections with consumers about
      what should be passed in. To fix: Ensure `schema` is present and non-empty
      at each matching location. This rule is evaluated at the JSONPath
      `$.components.parameters.*` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
