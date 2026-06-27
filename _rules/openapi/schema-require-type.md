---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-require-type
title: Schema Require Type
severity: info
given: $.components.schemas.*
message: Schema MUST Have Type Property
description: Schema should have a type defined, being explicit about type of
  data a schema describes and can be used to validate, helping standardize the
  type of data being made available.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-require-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-require-type' (Schema Require Type). Requirement:
  Schema should have a type defined, being explicit about type of data a schema
  describes and can be used to validate, helping standardize the type of data
  being made available. To fix: Ensure `type` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.components.schemas.*` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  schema-require-type:
    title: Schema Require Type
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-require-type/
    description: Schema should have a type defined, being explicit about type of
      data a schema describes and can be used to validate, helping standardize the
      type of data being made available.
    message: Schema MUST Have Type Property
    severity: info
    given: $.components.schemas.*
    then:
      field: type
      function: truthy
    tags:
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-require-type' (Schema Require Type). Requirement:
      Schema should have a type defined, being explicit about type of data a
      schema describes and can be used to validate, helping standardize the type
      of data being made available. To fix: Ensure `type` is present and non-empty
      at each matching location. This rule is evaluated at the JSONPath
      `$.components.schemas.*` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
