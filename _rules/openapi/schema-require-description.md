---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-require-description
title: Schema Require Description
severity: info
given: $.components.schemas.*
message: Schema MUST Have a Description.
description: Schema should have descriptions that provide a narrative of what a
  schema object is for, and how it can be used, leaving examples to demonstrate
  what can actually be expected.
experience:
  - documentation
  - data-modeling
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-require-description' (Schema Require Description).
  Requirement: Schema should have descriptions that provide a narrative of what
  a schema object is for, and how it can be used, leaving examples to
  demonstrate what can actually be expected. To fix: Ensure `description` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.components.schemas.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-require-description:
    title: Schema Require Description
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-require-description/
    description: Schema should have descriptions that provide a narrative of what a
      schema object is for, and how it can be used, leaving examples to
      demonstrate what can actually be expected.
    message: Schema MUST Have a Description.
    severity: info
    given: $.components.schemas.*
    then:
      field: description
      function: truthy
    tags:
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:documentation
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-require-description' (Schema Require Description).
      Requirement: Schema should have descriptions that provide a narrative of
      what a schema object is for, and how it can be used, leaving examples to
      demonstrate what can actually be expected. To fix: Ensure `description` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.components.schemas.*` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
