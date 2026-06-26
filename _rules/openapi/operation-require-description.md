---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-description
title: Operation Require Description
severity: info
given: $.paths.*[get,post,patch,put,delete]
message: Operation MUST Have Description
description: Having a paragraph or two description of each API operation helps
  API consumers understand what is possible with each API request.
experience:
  - documentation
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-require-description' (Operation Require
  Description). Requirement: Having a paragraph or two description of each API
  operation helps API consumers understand what is possible with each API
  request. To fix: Ensure `description` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.paths.*[get,post,patch,put,delete]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
