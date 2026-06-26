---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-summary-no-period
title: Operation Summary No Period
severity: info
given: $.paths[*][*].summary
message: Operation MUST Not Have a Period.
description: Operation summaries should not have a period, keeping the primary
  summary for each API as consistent as possible for publishing in
  documentation.
experience:
  - consistency
  - documentation
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-summary-no-period/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-summary-no-period' (Operation Summary No Period).
  Requirement: Operation summaries should not have a period, keeping the primary
  summary for each API as consistent as possible for publishing in
  documentation. To fix: Ensure the targeted value does NOT match the regular
  expression `\\.$`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.paths[*][*].summary` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
