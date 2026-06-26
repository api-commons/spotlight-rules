---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-oauth-endpoints-require-https
title: Security OAuth Endpoints Require HTTPS
severity: info
given: $.[securitySchemes][?(@.type=="oauth2")][*].[?(@property.match(/url$/i))]
message: OAuth endpoints must use https://
description: OAuth2 endpoints must use `https://`.
experience:
  - security
spec:
  - security
topic: []
owasp:
  - api8
reference: https://spotlight-rules.com/spec/rules/openapi/security-oauth-endpoints-require-https/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-oauth-endpoints-require-https' (Security OAuth
  Endpoints Require HTTPS). Requirement: OAuth2 endpoints must use `https://`.
  To fix: Ensure `value` matches the regular expression `^https://`; rewrite any
  value that does not. This rule is evaluated at the JSONPath
  `$.[securitySchemes][?(@.type==\"oauth2\")][*].[?(@property.match(/url$/i))]`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
