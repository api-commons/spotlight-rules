---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-definition-pascal-case
title: Schema Definition Pascal Case
severity: info
given: $.definitions[*]~
message: "{{property}} schema definition is not PascalCase: {{error}}"
description: Schema definitions MUST follow PascalCase.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-definition-pascal-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-definition-pascal-case' (Schema Definition Pascal
  Case). Requirement: Schema definitions MUST follow PascalCase. To fix: Ensure
  the targeted value matches the regular expression `^[A-Z][a-zA-Z0-9]*$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.definitions[*]~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
