---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-optional-include-examples
title: Parameter Optional Include Examples
severity: info
given: $..parameters[?(@ && @.required != true)]
message: Optional param should have examples
description: Optional param should have examples.
experience:
  - documentation
  - usability
spec:
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-optional-include-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-optional-include-examples' (Parameter Optional
  Include Examples). Requirement: Optional param should have examples. To fix:
  Ensure `examples` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$..parameters[?(@ && @.required != true)]`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-optional-include-examples:
    title: Parameter Optional Include Examples
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-optional-include-examples/
    description: Optional param should have examples.
    message: Optional param should have examples
    severity: info
    given: $..parameters[?(@ && @.required != true)]
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
      governance rule 'parameter-optional-include-examples' (Parameter Optional
      Include Examples). Requirement: Optional param should have examples. To fix:
      Ensure `examples` is present and non-empty at each matching location. This
      rule is evaluated at the JSONPath `$..parameters[?(@ && @.required !=
      true)]` — inspect every location it matches and correct only what violates
      the rule. Make the smallest change that satisfies the rule, leave all
      unrelated content, key order, comments, and formatting unchanged, and keep
      the document valid OpenAPI. Return only the complete corrected document,
      with no commentary."
---
