---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-schema-use-ref
title: Parameter Schema Use Ref
severity: info
given: $.components.parameters.*.schema
message: Parameters MUST Use Schema Reference
description: Parameters must always use a schema reference that utilizes
  reusable schema that are defined as part of a centralized schema components
  library.
experience:
  - consistency
  - data-modeling
spec:
  - parameters
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-schema-use-ref/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-schema-use-ref' (Parameter Schema Use Ref).
  Requirement: Parameters must always use a schema reference that utilizes
  reusable schema that are defined as part of a centralized schema components
  library. To fix: Ensure `$ref` is absent or empty (falsy) at each matching
  location. This rule is evaluated at the JSONPath
  `$.components.parameters.*.schema` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-schema-use-ref:
    title: Parameter Schema Use Ref
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-schema-use-ref/
    description: Parameters must always use a schema reference that utilizes
      reusable schema that are defined as part of a centralized schema components
      library.
    message: Parameters MUST Use Schema Reference
    severity: info
    given: $.components.parameters.*.schema
    then:
      field: $ref
      function: falsy
    tags:
      - format:openapi
      - spec:parameters
      - spec:schemas
      - spec:components
      - experience:consistency
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-schema-use-ref' (Parameter Schema Use Ref).
      Requirement: Parameters must always use a schema reference that utilizes
      reusable schema that are defined as part of a centralized schema components
      library. To fix: Ensure `$ref` is absent or empty (falsy) at each matching
      location. This rule is evaluated at the JSONPath
      `$.components.parameters.*.schema` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
