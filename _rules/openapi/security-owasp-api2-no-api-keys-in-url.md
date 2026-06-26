---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-owasp-api2-no-api-keys-in-url
title: Security OWASP API2 No API Keys In URL
severity: info
given: $.components.securitySchemes[?(@ && @.type == 'apiKey')]
message: apiKey scheme should be in a header or cookie, not the URL.
description: API key security schemes should be sent in a header or cookie,
  never in the query string or path (OWASP API2 — credentials leak into logs and
  history).
experience:
  - security
spec:
  - components
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/security-owasp-api2-no-api-keys-in-url/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-owasp-api2-no-api-keys-in-url' (Security OWASP API2
  No API Keys In URL). Requirement: API key security schemes should be sent in a
  header or cookie, never in the query string or path (OWASP API2 — credentials
  leak into logs and history). To fix: Set `in` to one of the allowed values:
  header, cookie. This rule is evaluated at the JSONPath
  `$.components.securitySchemes[?(@ && @.type == 'apiKey')]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
