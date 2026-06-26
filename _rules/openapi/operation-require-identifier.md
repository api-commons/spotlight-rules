---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-identifier
title: Operation Require Identifier
severity: info
given: $.paths.*[get,post,patch,put,delete]
message: Operation MUST Have Identifier
description: Operation identifiers provide a unique way to identify each
  individual API, which then used for SDK generation and other automation.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-identifier/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-require-identifier' (Operation Require Identifier).
  Requirement: Operation identifiers provide a unique way to identify each
  individual API, which then used for SDK generation and other automation. To
  fix: Ensure `operationId` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath `$.paths.*[get,post,patch,put,delete]`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
