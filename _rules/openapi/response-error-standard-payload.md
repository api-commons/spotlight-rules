---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-error-standard-payload
title: Response Error Standard Payload
severity: info
given: $.paths.*.*.responses.
message: "{{error}}"
description: All 4XX and 5XX response codes must follow Trimble API Standard.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-error-standard-payload/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-error-standard-payload' (Response Error Standard
  Payload). Requirement: All 4XX and 5XX response codes must follow Trimble API
  Standard. This rule is evaluated at the JSONPath `$.paths.*.*.responses.` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
