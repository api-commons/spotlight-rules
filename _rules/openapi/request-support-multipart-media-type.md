---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-multipart-media-type
title: Request Support Multipart Media Type
severity: info
given: $.paths.[*].requestBody.content[?(@property.indexOf('multipart') === -1)]^
message: "{{description}}: {{error}}"
description: Every request MUST support `multipart/form-data` media type.
experience:
  - consistency
  - usability
spec:
  - paths
  - request-body
  - media-types
topic:
  - content-negotiation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-support-multipart-media-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-support-multipart-media-type' (Request Support
  Multipart Media Type). Requirement: Every request MUST support
  `multipart/form-data` media type. To fix: Ensure the targeted value is absent
  or empty (falsy) at each matching location. This rule is evaluated at the
  JSONPath `$.paths.[*].requestBody.content[?(@property.indexOf('multipart') ===
  -1)]^` — inspect every location it matches and correct only what violates the
  rule. Make the smallest change that satisfies the rule, leave all unrelated
  content, key order, comments, and formatting unchanged, and keep the document
  valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
