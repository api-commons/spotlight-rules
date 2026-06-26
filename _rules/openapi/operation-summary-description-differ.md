---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-summary-description-differ
title: Operation Summary Description Differ
severity: info
given: $.paths[*].[get,post,put,patch,delete]
message: "{{error}}"
description: Operation summaries and description should not match.
experience:
  - documentation
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-summary-description-differ/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-summary-description-differ' (Operation Summary
  Description Differ). Requirement: Operation summaries and description should
  not match. This rule is evaluated at the JSONPath
  `$.paths[*].[get,post,put,patch,delete]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
