---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-collection-support-sparse-fieldsets
title: Operation Collection Support Sparse Fieldsets
severity: info
given: $.paths[*].get
message: Operation should support a fields (sparse fieldset) query parameter.
description: GET operations should support sparse fieldsets via a fields query
  parameter so clients can request only the fields they need.
experience:
  - usability
  - reliability
  - performance
spec:
  - parameters
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-collection-support-sparse-fieldsets/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-collection-support-sparse-fieldsets' (Operation
  Collection Support Sparse Fieldsets). Requirement: GET operations should
  support sparse fieldsets via a fields query parameter so clients can request
  only the fields they need. To fix: Adjust `parameters` so it conforms to the
  schema this rule requires. This rule is evaluated at the JSONPath
  `$.paths[*].get` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
