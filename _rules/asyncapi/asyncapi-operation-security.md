---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-operation-security
title: Asyncapi Operation Security
severity: info
given: $.channels[*][publish,subscribe].security.*
message: "{{error}}"
description: Operation have to reference a defined security schemes.
experience:
  - security
  - reliability
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-operation-security/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-operation-security' (Asyncapi Operation Security).
  Requirement: Operation have to reference a defined security schemes. This rule
  is evaluated at the JSONPath `$.channels[*][publish,subscribe].security.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
---
