---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-operation-security-defined
title: OAS3 Operation Security Defined
severity: info
given: "#SecurityRequirementObject"
message: "{{error}}"
description: Operation "security" values must match a scheme defined in the
  "components.securitySchemes" object.
experience:
  - security
  - reliability
spec:
  - security
topic: []
owasp:
  - api5
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-operation-security-defined/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-operation-security-defined' (OAS3 Operation Security
  Defined). Requirement: Operation \"security\" values must match a scheme
  defined in the \"components.securitySchemes\" object. This rule is evaluated
  at the JSONPath `#SecurityRequirementObject` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
---
