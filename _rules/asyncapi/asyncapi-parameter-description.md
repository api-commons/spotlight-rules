---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-parameter-description
title: Asyncapi Parameter Description
severity: info
given: $.components.parameters.* | $.channels.*.parameters.*
message: Parameter objects must have "description".
description: Parameter objects must have "description".
experience:
  - documentation
spec:
  - channels
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-parameter-description/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-parameter-description' (Asyncapi Parameter
  Description). Requirement: Parameter objects must have \"description\". To
  fix: Ensure `description` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath `$.components.parameters.* |
  $.channels.*.parameters.*` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
---
