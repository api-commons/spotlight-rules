---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: channel-asyncapi-require-description
title: Channel Asyncapi Require Description
severity: info
given: $.channels[*]
message: Channel should have a description.
description: Channels should have a description of the messages they carry.
experience:
  - documentation
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/channel-asyncapi-require-description/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'channel-asyncapi-require-description' (Channel Asyncapi
  Require Description). Requirement: Channels should have a description of the
  messages they carry. To fix: Ensure `description` is present and non-empty at
  each matching location. This rule is evaluated at the JSONPath `$.channels[*]`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
