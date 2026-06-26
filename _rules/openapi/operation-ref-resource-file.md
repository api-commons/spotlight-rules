---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-ref-resource-file
title: Operation Ref Resource File
severity: info
given: $.paths.*.$ref
message: "{{description}}; {{value}} incorrect"
description: Endpoint must a $ref to a file in resources/.
experience:
  - consistency
  - governance
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-ref-resource-file/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-ref-resource-file' (Operation Ref Resource File).
  Requirement: Endpoint must a $ref to a file in resources/. To fix: Ensure the
  targeted value matches the regular expression `^resources/.*yml$`; rewrite any
  value that does not. This rule is evaluated at the JSONPath `$.paths.*.$ref` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
