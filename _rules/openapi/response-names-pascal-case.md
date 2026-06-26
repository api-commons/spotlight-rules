---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-names-pascal-case
title: Response Names Pascal Case
severity: info
given: $.components.responses.*~
message: "{{property}} is not PascalCase: {{error}}"
description: Response names SHOULD be written in PascalCase.
experience:
  - naming
  - consistency
spec:
  - responses
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-names-pascal-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-names-pascal-case' (Response Names Pascal Case).
  Requirement: Response names SHOULD be written in PascalCase. To fix: Ensure
  the targeted value matches the regular expression `^[A-Z][a-zA-Z0-9]*$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.components.responses.*~` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
