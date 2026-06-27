---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-definition-kebab-case
title: Schema Definition Kebab Case
severity: info
given: $.definitions[*]~
message: "{{property}} schema definition is not kebab-case: {{error}}"
description: Schema definitions MUST follow kebab-case.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-definition-kebab-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-definition-kebab-case' (Schema Definition Kebab Case).
  Requirement: Schema definitions MUST follow kebab-case. To fix: Ensure the
  targeted value matches the regular expression `^[a-z][a-z0-9]*(-[a-z0-9]+)*$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.definitions[*]~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-definition-kebab-case:
    title: Schema Definition Kebab Case
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-definition-kebab-case/
    description: Schema definitions MUST follow kebab-case.
    message: "{{property}} schema definition is not kebab-case: {{error}}"
    severity: info
    given: $.definitions[*]~
    then:
      function: pattern
      functionOptions:
        match: ^[a-z][a-z0-9]*(-[a-z0-9]+)*$
    tags:
      - format:openapi
      - spec:schemas
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-definition-kebab-case' (Schema Definition Kebab
      Case). Requirement: Schema definitions MUST follow kebab-case. To fix:
      Ensure the targeted value matches the regular expression
      `^[a-z][a-z0-9]*(-[a-z0-9]+)*$`; rewrite any value that does not. This rule
      is evaluated at the JSONPath `$.definitions[*]~` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
