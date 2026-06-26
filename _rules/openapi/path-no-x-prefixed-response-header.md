---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-x-prefixed-response-header
title: Path No X Prefixed Response Header
severity: info
given: $..headers.*~
message: "Headers cannot start with X-, so please find a new name for
  {{property}}. More: https://tools.ietf.org/html/rfc6648"
description: Do not use headers with X-.
experience:
  - naming
  - consistency
spec:
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-x-prefixed-response-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-x-prefixed-response-header' (Path No X Prefixed
  Response Header). Requirement: Do not use headers with X-. To fix: Ensure the
  targeted value does NOT match the regular expression `^(x|X)-`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$..headers.*~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
