---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-schema-examples
title: Asyncapi Schema Examples
severity: info
given: $.components.schemas.*.examples^ |
  $.components.parameters.*.schema.examples^ |
  $.channels.*.parameters.*.schema.examples^
message: "{{error}}"
description: Examples must be valid against their defined schema.
experience:
  - data-modeling
  - documentation
  - reliability
spec:
  - channels
  - components
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-schema-examples/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-schema-examples' (Asyncapi Schema Examples).
  Requirement: Examples must be valid against their defined schema. This rule is
  evaluated at the JSONPath `$.components.schemas.*.examples^ |
  $.components.parameters.*.schema.examples^ |
  $.channels.*.parameters.*.schema.examples^` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
---
