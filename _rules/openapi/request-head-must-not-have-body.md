---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-head-must-not-have-body
title: Request Head Must Not Have Body
severity: info
given: $.paths[*][head].requestBody
message: A `HEAD` request MUST NOT accept a request body.
description: A `HEAD` request MUST NOT accept a request body.
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - request-body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-head-must-not-have-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-head-must-not-have-body' (Request Head Must Not Have
  Body). Requirement: A `HEAD` request MUST NOT accept a request body. To fix:
  Remove the targeted value from each matching location. This rule is evaluated
  at the JSONPath `$.paths[*][head].requestBody` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
