---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-options-must-not-return-body
title: Response Options Must Not Return Body
severity: info
given: $.paths.*.options.responses[200, 204].content
message: OPTIONS operations should not return a response body for success.
description: OPTIONS operations should not return a response body for success.
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-options-must-not-return-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-options-must-not-return-body' (Response Options Must
  Not Return Body). Requirement: OPTIONS operations should not return a response
  body for success. To fix: Ensure the targeted value is absent or empty (falsy)
  at each matching location. This rule is evaluated at the JSONPath
  `$.paths.*.options.responses[200, 204].content` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
