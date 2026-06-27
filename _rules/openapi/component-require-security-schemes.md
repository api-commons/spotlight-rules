---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: component-require-security-schemes
title: Component Require Security Schemes
severity: info
given: $.components
message: "{{description}}: {{error}}"
description: The API contract MUST include a 'securitySchemes' subsection under
  the 'components' section.
experience:
  - security
  - governance
spec:
  - components
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/component-require-security-schemes/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'component-require-security-schemes' (Component Require
  Security Schemes). Requirement: The API contract MUST include a
  'securitySchemes' subsection under the 'components' section. To fix: Ensure
  `securitySchemes` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.components` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  component-require-security-schemes:
    title: Component Require Security Schemes
    reference: https://spotlight-rules.com/spec/rules/openapi/component-require-security-schemes/
    description: The API contract MUST include a 'securitySchemes' subsection under
      the 'components' section.
    message: "{{description}}: {{error}}"
    severity: info
    given: $.components
    then:
      field: securitySchemes
      function: truthy
    formats:
      - oas3
    tags:
      - owasp:api2
      - format:openapi
      - spec:components
      - experience:security
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'component-require-security-schemes' (Component Require
      Security Schemes). Requirement: The API contract MUST include a
      'securitySchemes' subsection under the 'components' section. To fix: Ensure
      `securitySchemes` is present and non-empty at each matching location. This
      rule is evaluated at the JSONPath `$.components` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
