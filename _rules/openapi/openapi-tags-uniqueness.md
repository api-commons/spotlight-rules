---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: openapi-tags-uniqueness
title: Openapi Tags Uniqueness
severity: info
given: $.tags
message: "{{error}}"
description: Each tag must have a unique name.
experience:
  - consistency
  - discoverability
spec:
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/openapi-tags-uniqueness/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'openapi-tags-uniqueness' (Openapi Tags Uniqueness).
  Requirement: Each tag must have a unique name. This rule is evaluated at the
  JSONPath `$.tags` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
---
