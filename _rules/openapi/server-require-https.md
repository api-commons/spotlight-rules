---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-require-https
title: Server Require HTTPS
severity: info
given: $.servers..url
message: Servers MUST be https and no other protocol is allowed.
description: ALL requests MUST go through `https` protocol only.
experience:
  - security
spec:
  - servers
topic: []
owasp:
  - api8
reference: https://spotlight-rules.com/spec/rules/openapi/server-require-https/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-require-https' (Server Require HTTPS). Requirement:
  ALL requests MUST go through `https` protocol only. To fix: Ensure the
  targeted value matches the regular expression `/^https:/`; rewrite any value
  that does not. This rule is evaluated at the JSONPath `$.servers..url` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
