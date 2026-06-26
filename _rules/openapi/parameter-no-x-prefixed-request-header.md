---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-no-x-prefixed-request-header
title: Parameter No X Prefixed Request Header
severity: info
given: $..parameters.[?(@.in === 'header')].name
message: "Headers cannot start with X-. More: https://tools.ietf.org/html/rfc6648"
description: Do not use headers with X-.
experience:
  - naming
  - consistency
spec:
  - parameters
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-no-x-prefixed-request-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-no-x-prefixed-request-header' (Parameter No X
  Prefixed Request Header). Requirement: Do not use headers with X-. To fix:
  Ensure the targeted value does NOT match the regular expression `^(x|X)-`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$..parameters.[?(@.in === 'header')].name` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
