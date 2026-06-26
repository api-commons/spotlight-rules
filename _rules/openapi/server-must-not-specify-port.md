---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-must-not-specify-port
title: Server Must Not Specify Port
severity: info
given: $.servers..url
message: Port MUST NOT be specified or required to use the API, except for
  'localhost' testing in a spec.
description: Port MUST NOT be specified or required to use the API, except for
  'localhost' testing in a spec.
experience:
  - usability
  - consistency
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/server-must-not-specify-port/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-must-not-specify-port' (Server Must Not Specify Port).
  Requirement: Port MUST NOT be specified or required to use the API, except for
  'localhost' testing in a spec. To fix: Ensure the targeted value does NOT
  match the regular expression
  `(?!https?://localhost)(https?://.*):(\\d*)\\/?(.*)`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath `$.servers..url` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
