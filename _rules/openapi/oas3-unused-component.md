---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-unused-component
title: OAS3 Unused Component
severity: info
given: $
message: Potentially unused component has been detected.
description: OAS3 Unused Component.
experience:
  - consistency
  - data-modeling
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-unused-component/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-unused-component' (OAS3 Unused Component). Requirement:
  OAS3 Unused Component. Make the smallest change that satisfies the rule, leave
  all unrelated content, key order, comments, and formatting unchanged, and keep
  the document valid OpenAPI. Return only the complete corrected document, with
  no commentary."
builtin: true
---
