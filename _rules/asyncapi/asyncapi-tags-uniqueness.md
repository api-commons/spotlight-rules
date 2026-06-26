---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-tags-uniqueness
title: Asyncapi Tags Uniqueness
severity: info
given: $.tags | $.servers.*.tags | $.components.servers.*.tags |
  $.channels.*.[publish,subscribe].tags |
  $.components.channels.*.[publish,subscribe].tags |
  $.channels.*.[publish,subscribe].traits.*.tags |
  $.components.channels.*.[publish,subscribe].traits.*.tags |
  $.components.operationTraits.*.tags |
  $.channels.*.[publish,subscribe].message.tags |
  $.channels.*.[publish,subscribe].message.oneOf.*.tags |
  $.components.channels.*.[publish,subscribe].message.tags |
  $.components.channels.*.[publish,subscribe].message.oneOf.*.tags |
  $.components.messages.*.tags |
  $.channels.*.[publish,subscribe].message.traits.*.tags |
  $.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags |
  $.components.channels.*.[publish,subscribe].message.traits.*.tags |
  $.components.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags |
  $.components.messages.*.traits.*.tags | $.components.messageTraits.*.tags
message: "{{error}}"
description: Each tag must have a unique name.
experience:
  - consistency
  - discoverability
spec:
  - servers
  - channels
  - messages
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-tags-uniqueness/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-tags-uniqueness' (Asyncapi Tags Uniqueness).
  Requirement: Each tag must have a unique name. This rule is evaluated at the
  JSONPath `$.tags | $.servers.*.tags | $.components.servers.*.tags |
  $.channels.*.[publish,subscribe].tags |
  $.components.channels.*.[publish,subscribe].tags |
  $.channels.*.[publish,subscribe].traits.*.tags |
  $.components.channels.*.[publish,subscribe].traits.*.tags |
  $.components.operationTraits.*.tags |
  $.channels.*.[publish,subscribe].message.tags |
  $.channels.*.[publish,subscribe].message.oneOf.*.tags |
  $.components.channels.*.[publish,subscribe].message.tags |
  $.components.channels.*.[publish,subscribe].message.oneOf.*.tags |
  $.components.messages.*.tags |
  $.channels.*.[publish,subscribe].message.traits.*.tags |
  $.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags |
  $.components.channels.*.[publish,subscribe].message.traits.*.tags |
  $.components.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags |
  $.components.messages.*.traits.*.tags | $.components.messageTraits.*.tags` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
---
