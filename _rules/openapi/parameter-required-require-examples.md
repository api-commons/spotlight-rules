---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-required-require-examples
title: Parameter Required Require Examples
severity: info
given: $..parameters[?(@ && @.required == true)]
message: Required param must have examples
description: Required param must have examples.
experience:
  - documentation
  - usability
spec:
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-required-require-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-required-require-examples' (Parameter Required
  Require Examples). Requirement: Required param must have examples. To fix:
  Ensure `examples` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$..parameters[?(@ && @.required == true)]`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-required-require-examples:
    title: Parameter Required Require Examples
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-required-require-examples/
    description: Required param must have examples.
    message: Required param must have examples
    severity: info
    given: $..parameters[?(@ && @.required == true)]
    then:
      field: examples
      function: truthy
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:parameters
      - experience:documentation
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-required-require-examples' (Parameter Required
      Require Examples). Requirement: Required param must have examples. To fix:
      Ensure `examples` is present and non-empty at each matching location. This
      rule is evaluated at the JSONPath `$..parameters[?(@ && @.required ==
      true)]` — inspect every location it matches and correct only what violates
      the rule. Make the smallest change that satisfies the rule, leave all
      unrelated content, key order, comments, and formatting unchanged, and keep
      the document valid OpenAPI. Return only the complete corrected document,
      with no commentary."
---
