---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-owasp-api8-define-error-500
title: Response OWASP API8 Define Error 500
severity: info
given: $.paths[*][get,post,put,patch,delete].responses
message: Operation should define a 500 Internal Server Error response.
description: Operations should define a 500 Internal Server Error response
  (OWASP API8 — document server-error behavior).
experience:
  - security
spec:
  - responses
topic: []
owasp:
  - api8
reference: https://spotlight-rules.com/spec/rules/openapi/response-owasp-api8-define-error-500/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-owasp-api8-define-error-500' (Response OWASP API8
  Define Error 500). Requirement: Operations should define a 500 Internal Server
  Error response (OWASP API8 — document server-error behavior). To fix: Ensure
  `500` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths[*][get,post,put,patch,delete].responses` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
