---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-define-429-response
title: Operation Define 429 Response
severity: info
given: $.paths.*[get,post,put,patch,delete].responses
message: Operations MUST Have 429 Response
description: APIs should define a 429 Too Many Requests response to document
  rate limiting behavior. Analysis shows 429 appears in 671 operations,
  confirming rate limiting is a common API pattern.
experience:
  - error-handling
  - reliability
  - performance
spec:
  - paths
  - operations
  - responses
topic:
  - rate-limiting
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/operation-define-429-response/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-define-429-response' (Operation Define 429
  Response). Requirement: APIs should define a 429 Too Many Requests response to
  document rate limiting behavior. Analysis shows 429 appears in 671 operations,
  confirming rate limiting is a common API pattern. To fix: Ensure `429` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths.*[get,post,put,patch,delete].responses` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
