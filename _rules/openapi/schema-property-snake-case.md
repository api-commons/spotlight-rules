---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-snake-case
title: Schema Property Snake Case
severity: info
given: $.definitions..properties[*]~
message: "{{property}} schema property is not snake_case: {{error}}"
description: Schema properties MUST follow snake_case.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-snake-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-snake-case' (Schema Property Snake Case).
  Requirement: Schema properties MUST follow snake_case. To fix: Ensure the
  targeted value matches the regular expression `^[a-z][a-z0-9]*(_[a-z0-9]+)*$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.definitions..properties[*]~` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-property-snake-case:
    title: Schema Property Snake Case
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-snake-case/
    description: Schema properties MUST follow snake_case.
    message: "{{property}} schema property is not snake_case: {{error}}"
    severity: info
    given: $.definitions..properties[*]~
    then:
      function: pattern
      functionOptions:
        match: ^[a-z][a-z0-9]*(_[a-z0-9]+)*$
    tags:
      - format:openapi
      - spec:schemas
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-property-snake-case' (Schema Property Snake Case).
      Requirement: Schema properties MUST follow snake_case. To fix: Ensure the
      targeted value matches the regular expression
      `^[a-z][a-z0-9]*(_[a-z0-9]+)*$`; rewrite any value that does not. This rule
      is evaluated at the JSONPath `$.definitions..properties[*]~` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
