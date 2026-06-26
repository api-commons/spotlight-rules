---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-get-define-404-response
title: Schema Get Define 404 Response
severity: info
given: $.paths.*.get[?(@.properties)]
message: GET Responses MUST Have 404 Status Code
description: GET responses should have a 404 not found HTTP status code,
  communicating that nothing was found to consumers.
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-get-define-404-response/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-get-define-404-response' (Schema Get Define 404
  Response). Requirement: GET responses should have a 404 not found HTTP status
  code, communicating that nothing was found to consumers. To fix: Ensure `404`
  is present and non-empty at each matching location. This rule is evaluated at
  the JSONPath `$.paths.*.get[?(@.properties)]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
