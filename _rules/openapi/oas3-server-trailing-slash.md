---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-server-trailing-slash
title: OAS3 Server Trailing Slash
severity: info
given: $.servers[*].url
message: Server URL must not have trailing slash.
description: Server URL must not have trailing slash.
experience:
  - consistency
  - reliability
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-server-trailing-slash/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-server-trailing-slash' (OAS3 Server Trailing Slash).
  Requirement: Server URL must not have trailing slash. To fix: Ensure the
  targeted value does NOT match the regular expression `./$`; rename or rewrite
  any value that does. This rule is evaluated at the JSONPath `$.servers[*].url`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: true
---
