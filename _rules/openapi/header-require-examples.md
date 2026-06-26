---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: header-require-examples
title: Header Require Examples
severity: info
given: $..headers.*
message: "{{description}}; missing {{property}}"
description: Headers must include examples.
experience:
  - documentation
  - usability
spec:
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/header-require-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'header-require-examples' (Header Require Examples).
  Requirement: Headers must include examples. This rule is evaluated at the
  JSONPath `$..headers.*` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
