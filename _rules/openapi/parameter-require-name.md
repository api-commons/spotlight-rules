---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-name
title: Parameter Require Name
severity: info
given: $.components.parameters.*
message: Parameters MUST Have a Name
description: Providing a simple, intuitive, and consistent names for your
  parameters helps make it easier for API consumers to understand how they are
  able to configure their API requests.
experience:
  - naming
  - documentation
spec:
  - parameters
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-require-name/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-require-name' (Parameter Require Name).
  Requirement: Providing a simple, intuitive, and consistent names for your
  parameters helps make it easier for API consumers to understand how they are
  able to configure their API requests. To fix: Ensure `name` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.components.parameters.*` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  parameter-require-name:
    title: Parameter Require Name
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-require-name/
    description: Providing a simple, intuitive, and consistent names for your
      parameters helps make it easier for API consumers to understand how they are
      able to configure their API requests.
    message: Parameters MUST Have a Name
    severity: info
    given: $.components.parameters.*
    then:
      field: name
      function: truthy
    tags:
      - format:openapi
      - spec:parameters
      - spec:components
      - experience:naming
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-require-name' (Parameter Require Name).
      Requirement: Providing a simple, intuitive, and consistent names for your
      parameters helps make it easier for API consumers to understand how they are
      able to configure their API requests. To fix: Ensure `name` is present and
      non-empty at each matching location. This rule is evaluated at the JSONPath
      `$.components.parameters.*` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
