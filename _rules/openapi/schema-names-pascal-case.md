---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-names-pascal-case
title: Schema Names Pascal Case
severity: info
given: $.components.schemas.*~
message: "{{property}} is not PascalCase: {{error}}"
description: Schema names SHOULD be written in PascalCase.
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-names-pascal-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-names-pascal-case' (Schema Names Pascal Case).
  Requirement: Schema names SHOULD be written in PascalCase. To fix: Ensure the
  targeted value matches the regular expression `^[A-Z][a-zA-Z0-9]*$`; rewrite
  any value that does not. This rule is evaluated at the JSONPath
  `$.components.schemas.*~` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
