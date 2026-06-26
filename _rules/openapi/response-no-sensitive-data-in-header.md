---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-no-sensitive-data-in-header
title: Response No Sensitive Data In Header
severity: info
given: $.paths[*][*].responses[*].headers.*~
message: Headers MUST NOT contain sensitive data.
description: Headers MUST NOT contain sensitive data.
experience:
  - security
  - governance
spec:
  - paths
  - responses
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-no-sensitive-data-in-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-no-sensitive-data-in-header' (Response No Sensitive
  Data In Header). Requirement: Headers MUST NOT contain sensitive data. To fix:
  Ensure the targeted value does NOT match the regular expression
  `^(SPS-Token|SPS-Password|SPS-Identity|Password)$`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath
  `$.paths[*][*].responses[*].headers.*~` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
