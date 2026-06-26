---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-security
title: Operation Require Security
severity: info
given: $.paths.*.*
message: Check operation security is defined.
description: Check operation security is defined.
experience:
  - security
  - governance
spec:
  - paths
topic: []
owasp:
  - api5
reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-security/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-require-security' (Operation Require Security).
  Requirement: Check operation security is defined. To fix: Ensure `security` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths.*.*` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
