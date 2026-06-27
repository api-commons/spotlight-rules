---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-pascal-case
title: Schema Property Pascal Case
severity: info
given: $.definitions..properties[*]~
message: "{{property}} schema property is not PascalCase: {{error}}"
description: Schema properties MUST follow PascalCase.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-pascal-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-pascal-case' (Schema Property Pascal Case).
  Requirement: Schema properties MUST follow PascalCase. To fix: Ensure the
  targeted value matches the regular expression `^[A-Z][a-zA-Z0-9]*$`; rewrite
  any value that does not. This rule is evaluated at the JSONPath
  `$.definitions..properties[*]~` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-property-pascal-case:
    title: Schema Property Pascal Case
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-pascal-case/
    description: Schema properties MUST follow PascalCase.
    message: "{{property}} schema property is not PascalCase: {{error}}"
    severity: info
    given: $.definitions..properties[*]~
    then:
      function: pattern
      functionOptions:
        match: ^[A-Z][a-zA-Z0-9]*$
    tags:
      - format:openapi
      - spec:schemas
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-property-pascal-case' (Schema Property Pascal Case).
      Requirement: Schema properties MUST follow PascalCase. To fix: Ensure the
      targeted value matches the regular expression `^[A-Z][a-zA-Z0-9]*$`; rewrite
      any value that does not. This rule is evaluated at the JSONPath
      `$.definitions..properties[*]~` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
