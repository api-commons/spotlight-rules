---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-definition-constant-case
title: Schema Definition Constant Case
severity: info
given: $.definitions[*]~
message: "{{property}} schema definition is not CONSTANT_CASE: {{error}}"
description: Schema definitions MUST follow CONSTANT_CASE (screaming snake_case).
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-definition-constant-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-definition-constant-case' (Schema Definition Constant
  Case). Requirement: Schema definitions MUST follow CONSTANT_CASE (screaming
  snake_case). To fix: Ensure the targeted value matches the regular expression
  `^[A-Z][A-Z0-9]*(_[A-Z0-9]+)*$`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.definitions[*]~` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
