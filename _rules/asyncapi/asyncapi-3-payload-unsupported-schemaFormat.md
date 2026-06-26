---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-payload-unsupported-schemaFormat
title: Asyncapi 3 Payload Unsupported SchemaFormat
severity: info
given: $.components.messages.*.payload | $.channels.*.messages.*.payload
message: Message schema validation is only supported with default unspecified
  "schemaFormat".
description: Message schema validation is only supported with default
  unspecified "schemaFormat".
experience:
  - data-modeling
  - reliability
spec:
  - channels
  - messages
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-payload-unsupported-schemaFormat/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-payload-unsupported-schemaFormat' (Asyncapi 3
  Payload Unsupported SchemaFormat). Requirement: Message schema validation is
  only supported with default unspecified \"schemaFormat\". To fix: Remove
  `schemaFormat` from each matching location. This rule is evaluated at the
  JSONPath `$.components.messages.*.payload | $.channels.*.messages.*.payload` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
---
