---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-scheme-require-description
title: Security Scheme Require Description
severity: info
given: $.components.securitySchemes[*]
message: Security scheme should have a description.
description: Every security scheme should declare a description so consumers
  know how to authenticate (which token, where to get it, what scopes).
experience:
  - security
spec:
  - components
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/security-scheme-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-scheme-require-description' (Security Scheme Require
  Description). Requirement: Every security scheme should declare a description
  so consumers know how to authenticate (which token, where to get it, what
  scopes). To fix: Ensure `description` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.components.securitySchemes[*]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
