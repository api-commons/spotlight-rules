---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-schema
title: OAS3 Schema
severity: info
given: $
message: "{{error}}."
description: Validate structure of OpenAPI v3 specification.
experience:
  - data-modeling
  - reliability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-schema/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-schema' (OAS3 Schema). Requirement: Validate structure
  of OpenAPI v3 specification. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
---
