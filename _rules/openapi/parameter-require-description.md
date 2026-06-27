---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-description
title: Parameter Require Description
severity: info
given: $.paths.*.*.parameters.*
message: Parameters MUST Have a Description
description: Having a parameters description provides more depth to what a
  parameter does and will be displayed via documentation, and other tooling used
  across the API lifecycle.
experience:
  - documentation
spec:
  - paths
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-require-description' (Parameter Require
  Description). Requirement: Having a parameters description provides more depth
  to what a parameter does and will be displayed via documentation, and other
  tooling used across the API lifecycle. To fix: Ensure `description` is present
  and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths.*.*.parameters.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-require-description:
    title: Parameter Require Description
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-require-description/
    severity: info
    description: Having a parameters description provides more depth to what a
      parameter does and will be displayed via documentation, and other tooling
      used across the API lifecycle.
    message: Parameters MUST Have a Description
    given: $.paths.*.*.parameters.*
    then:
      field: description
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:parameters
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-require-description' (Parameter Require
      Description). Requirement: Having a parameters description provides more
      depth to what a parameter does and will be displayed via documentation, and
      other tooling used across the API lifecycle. To fix: Ensure `description` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.paths.*.*.parameters.*` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
