---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-examples-value-or-externalValue
title: OAS3 Examples Value Or ExternalValue
severity: info
given: $.components.examples[*] | $.paths[*][*]..content[*].examples[*] |
  $.paths[*][*]..parameters[*].examples[*] |
  $.components.parameters[*].examples[*] | $.paths[*][*]..headers[*].examples[*]
  | $.components.headers[*].examples[*]
message: Examples must have either "value" or "externalValue" field.
description: Examples must have either "value" or "externalValue" field.
experience:
  - documentation
  - consistency
spec:
  - paths
  - parameters
  - headers
  - media-types
  - components
  - examples
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-examples-value-or-externalValue/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-examples-value-or-externalValue' (OAS3 Examples Value Or
  ExternalValue). Requirement: Examples must have either \"value\" or
  \"externalValue\" field. To fix: Include exactly one of: externalValue, value.
  This rule is evaluated at the JSONPath `$.components.examples[*] |
  $.paths[*][*]..content[*].examples[*] |
  $.paths[*][*]..parameters[*].examples[*] |
  $.components.parameters[*].examples[*] | $.paths[*][*]..headers[*].examples[*]
  | $.components.headers[*].examples[*]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
ruleyaml: >
  oas3-examples-value-or-externalValue:
    title: OAS3 Examples Value Or ExternalValue
    reference: https://spotlight-rules.com/spec/rules/openapi/oas3-examples-value-or-externalValue/
    description: Examples must have either "value" or "externalValue" field.
    message: Examples must have either "value" or "externalValue" field.
    severity: info
    given:
      - $.components.examples[*]
      - $.paths[*][*]..content[*].examples[*]
      - $.paths[*][*]..parameters[*].examples[*]
      - $.components.parameters[*].examples[*]
      - $.paths[*][*]..headers[*].examples[*]
      - $.components.headers[*].examples[*]
    then:
      function: xor
      functionOptions:
        properties:
          - externalValue
          - value
    tags:
      - format:openapi
      - spec:paths
      - spec:parameters
      - spec:headers
      - spec:media-types
      - spec:components
      - spec:examples
      - experience:documentation
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'oas3-examples-value-or-externalValue' (OAS3 Examples Value
      Or ExternalValue). Requirement: Examples must have either \"value\" or
      \"externalValue\" field. To fix: Include exactly one of: externalValue,
      value. This rule is evaluated at the JSONPath `$.components.examples[*] |
      $.paths[*][*]..content[*].examples[*] |
      $.paths[*][*]..parameters[*].examples[*] |
      $.components.parameters[*].examples[*] |
      $.paths[*][*]..headers[*].examples[*] | $.components.headers[*].examples[*]`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
