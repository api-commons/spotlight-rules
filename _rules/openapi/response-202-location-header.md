---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-202-location-header
title: Response 202 Location Header
severity: info
given: $.paths[*][*].responses['202'].headers
message: 202 Accepted responses should document a Location header.
description: 202 Accepted responses should document a Location header pointing
  at the status or result resource clients can poll for the long-running
  operation.
experience:
  - reliability
  - usability
spec:
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-202-location-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-202-location-header' (Response 202 Location Header).
  Requirement: 202 Accepted responses should document a Location header pointing
  at the status or result resource clients can poll for the long-running
  operation. To fix: Ensure `Location` is present and non-empty at each matching
  location. This rule is evaluated at the JSONPath
  `$.paths[*][*].responses['202'].headers` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
