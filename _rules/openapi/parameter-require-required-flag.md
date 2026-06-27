---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-required-flag
title: Parameter Require Required Flag
severity: info
given: $.components.parameters.*
message: Parameters Required Property MUST Be Set
description: Providrequiredg an required property for parameters gets explicit
  about whether a parameter is required the path, query, or a header, making it
  clear to consumers where they can configure their request.
experience:
  - data-modeling
  - documentation
spec:
  - parameters
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-require-required-flag/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-require-required-flag' (Parameter Require Required
  Flag). Requirement: Providrequiredg an required property for parameters gets
  explicit about whether a parameter is required the path, query, or a header,
  making it clear to consumers where they can configure their request. To fix:
  Ensure `required` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.components.parameters.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-require-required-flag:
    title: Parameter Require Required Flag
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-require-required-flag/
    description: Providrequiredg an required property for parameters gets explicit
      about whether a parameter is required the path, query, or a header, making
      it clear to consumers where they can configure their request.
    message: Parameters Required Property MUST Be Set
    severity: info
    given: $.components.parameters.*
    then:
      field: required
      function: truthy
    tags:
      - format:openapi
      - spec:parameters
      - spec:components
      - experience:data-modeling
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-require-required-flag' (Parameter Require
      Required Flag). Requirement: Providrequiredg an required property for
      parameters gets explicit about whether a parameter is required the path,
      query, or a header, making it clear to consumers where they can configure
      their request. To fix: Ensure `required` is present and non-empty at each
      matching location. This rule is evaluated at the JSONPath
      `$.components.parameters.*` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
