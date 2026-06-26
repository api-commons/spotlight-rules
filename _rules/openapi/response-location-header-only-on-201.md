---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-location-header-only-on-201
title: Response Location Header Only On 201
severity: info
given: $.paths[*][*].responses[?(@property !== '201')].headers
message: Location header MUST NOT be present in non-201 responses.
description: Location header MUST NOT be present in non-201 responses.
experience:
  - consistency
  - error-handling
spec:
  - paths
  - responses
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-location-header-only-on-201/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-location-header-only-on-201' (Response Location
  Header Only On 201). Requirement: Location header MUST NOT be present in
  non-201 responses. To fix: Ensure `Location` is absent or empty (falsy) at
  each matching location. This rule is evaluated at the JSONPath
  `$.paths[*][*].responses[?(@property !== '201')].headers` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
