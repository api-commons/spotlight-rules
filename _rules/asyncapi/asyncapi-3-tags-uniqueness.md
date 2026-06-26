---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-tags-uniqueness
title: Asyncapi 3 Tags Uniqueness
severity: info
given: $.info.tags | $.servers.*.tags | $.components.servers.*.tags |
  $.operations.*.tags | $.components.operations.*.tags |
  $.operations.*.traits.*.tags | $.components.operations.traits.*.tags |
  $.components.operationTraits.*.tags | $.channels.*.messages.*.tags |
  $.components.channels.*.messages.tags | $.components.messages.*.tags |
  $.channels.*..messages.*.traits.*.tags |
  $.components.channels.*.messages.*.traits.*.tags |
  $.components.messages.*.traits.*.tags | $.components.messageTraits.*.tags
message: "{{error}}"
description: Each tag must have a unique name.
experience:
  - consistency
  - discoverability
spec:
  - info
  - servers
  - channels
  - messages
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-tags-uniqueness/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-tags-uniqueness' (Asyncapi 3 Tags Uniqueness).
  Requirement: Each tag must have a unique name. This rule is evaluated at the
  JSONPath `$.info.tags | $.servers.*.tags | $.components.servers.*.tags |
  $.operations.*.tags | $.components.operations.*.tags |
  $.operations.*.traits.*.tags | $.components.operations.traits.*.tags |
  $.components.operationTraits.*.tags | $.channels.*.messages.*.tags |
  $.components.channels.*.messages.tags | $.components.messages.*.tags |
  $.channels.*..messages.*.traits.*.tags |
  $.components.channels.*.messages.*.traits.*.tags |
  $.components.messages.*.traits.*.tags | $.components.messageTraits.*.tags` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
---
