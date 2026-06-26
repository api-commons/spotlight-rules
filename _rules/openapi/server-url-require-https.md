---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-url-require-https
title: Server URL Require HTTPS
severity: info
given: $.servers[*]
message: Server URL MUST Use HTTPS
description: API server URLs should use HTTPS to ensure encrypted communication
  between clients and servers, protecting sensitive data in transit.
experience:
  - security
spec:
  - servers
topic: []
owasp:
  - api8
reference: https://spotlight-rules.com/spec/rules/openapi/server-url-require-https/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-url-require-https' (Server URL Require HTTPS).
  Requirement: API server URLs should use HTTPS to ensure encrypted
  communication between clients and servers, protecting sensitive data in
  transit. To fix: Ensure `url` matches the regular expression `^https://`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.servers[*]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
