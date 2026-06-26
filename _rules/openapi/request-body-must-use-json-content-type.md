---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-body-must-use-json-content-type
title: Request Body Must Use JSON Content Type
severity: info
given: $.paths.*[post,put,patch].requestBody.content
message: Request Body MUST Use application/json Content Type
description: Request bodies should use application/json as the primary content
  type for consistency across API operations and client implementations.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - request-body
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-body-must-use-json-content-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-body-must-use-json-content-type' (Request Body Must
  Use JSON Content Type). Requirement: Request bodies should use
  application/json as the primary content type for consistency across API
  operations and client implementations. To fix: Ensure `application/json` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths.*[post,put,patch].requestBody.content` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
