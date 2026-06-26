---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-success-response-require-description
title: Path Success Response Require Description
severity: info
given: $.paths.*.
message: "{{error}}"
description: Check if the response description is appropriate for all requests.
experience:
  - documentation
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-success-response-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-success-response-require-description' (Path Success
  Response Require Description). Requirement: Check if the response description
  is appropriate for all requests. This rule is evaluated at the JSONPath
  `$.paths.*.` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
