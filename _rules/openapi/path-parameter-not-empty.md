---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-parameter-not-empty
title: Path Parameter Not Empty
severity: info
given: $.paths
message: Path parameter declarations must not be empty ex.
description: Path parameter declarations must not be empty ex. `/api/{}` is invalid.
experience:
  - consistency
  - usability
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-parameter-not-empty/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-parameter-not-empty' (Path Parameter Not Empty).
  Requirement: Path parameter declarations must not be empty ex. `/api/{}` is
  invalid. To fix: Ensure the targeted value does NOT match the regular
  expression `{}`; rename or rewrite any value that does. This rule is evaluated
  at the JSONPath `$.paths` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
