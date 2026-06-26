---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-must-use-json-content-type
title: Response Must Use JSON Content Type
severity: info
given: $.paths.*[get,post,put,patch,delete].responses[*].content
message: Response MUST Use application/json Content Type
description: API responses should use application/json as the primary content
  type. Analysis of 773 specs shows application/json is used by 92% of APIs,
  making it the universal standard for modern REST APIs.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-must-use-json-content-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-must-use-json-content-type' (Response Must Use JSON
  Content Type). Requirement: API responses should use application/json as the
  primary content type. Analysis of 773 specs shows application/json is used by
  92% of APIs, making it the universal standard for modern REST APIs. To fix:
  Ensure `application/json` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath
  `$.paths.*[get,post,put,patch,delete].responses[*].content` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
