---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-delete-must-not-return-body
title: Response Delete Must Not Return Body
severity: info
given: $.paths.*.delete.responses[202,204].content
message: DELETE operations must not have a response body.
description: DELETE operations must not have a response body.
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
reference: https://spotlight-rules.com/spec/rules/openapi/response-delete-must-not-return-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-delete-must-not-return-body' (Response Delete Must
  Not Return Body). Requirement: DELETE operations must not have a response
  body. To fix: Ensure the targeted value is absent or empty (falsy) at each
  matching location. This rule is evaluated at the JSONPath
  `$.paths.*.delete.responses[202,204].content` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
