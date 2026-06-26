---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-write-require-content-type
title: Response Write Require Content Type
severity: info
given: $.paths[*].post.responses | $.paths[*].put.responses
message: "{{error}}"
description: All API responses MUST include the Content-Type header in all responses.
experience:
  - consistency
  - data-modeling
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-write-require-content-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-write-require-content-type' (Response Write Require
  Content Type). Requirement: All API responses MUST include the Content-Type
  header in all responses. This rule is evaluated at the JSONPath
  `$.paths[*].post.responses | $.paths[*].put.responses` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
