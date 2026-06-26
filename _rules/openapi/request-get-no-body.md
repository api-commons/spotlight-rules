---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-get-no-body
title: Request Get No Body
severity: info
given: $.paths[*].get.requestBody
message: GET requests MUST NOT have a request body.
description: GET requests MUST NOT have a request body.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - request-body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-get-no-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-get-no-body' (Request Get No Body). Requirement: GET
  requests MUST NOT have a request body. To fix: Ensure the targeted value is
  absent or empty (falsy) at each matching location. This rule is evaluated at
  the JSONPath `$.paths[*].get.requestBody` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
