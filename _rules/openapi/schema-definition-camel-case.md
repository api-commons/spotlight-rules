---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-definition-camel-case
title: Schema Definition Camel Case
severity: info
given: $.definitions[*]~
message: "{{property}} schema definition is not camelCase: {{error}}"
description: Schema definitions MUST follow camelCase.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-definition-camel-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-definition-camel-case' (Schema Definition Camel Case).
  Requirement: Schema definitions MUST follow camelCase. To fix: Ensure the
  targeted value matches the regular expression `^[a-z][a-zA-Z0-9]*$`; rewrite
  any value that does not. This rule is evaluated at the JSONPath
  `$.definitions[*]~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-definition-camel-case:
    title: Schema Definition Camel Case
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-definition-camel-case/
    description: Schema definitions MUST follow camelCase.
    message: "{{property}} schema definition is not camelCase: {{error}}"
    severity: info
    given: $.definitions[*]~
    then:
      function: pattern
      functionOptions:
        match: ^[a-z][a-zA-Z0-9]*$
    tags:
      - format:openapi
      - spec:schemas
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-definition-camel-case' (Schema Definition Camel
      Case). Requirement: Schema definitions MUST follow camelCase. To fix: Ensure
      the targeted value matches the regular expression `^[a-z][a-zA-Z0-9]*$`;
      rewrite any value that does not. This rule is evaluated at the JSONPath
      `$.definitions[*]~` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
