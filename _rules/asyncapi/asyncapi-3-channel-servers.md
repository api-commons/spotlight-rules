---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-channel-servers
title: Asyncapi 3 Channel Servers
severity: info
given: $.channels.*
message: Channel servers must be defined in the "servers" object.
description: Channel servers must be defined in the "servers" object.
experience:
  - reliability
  - consistency
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-channel-servers/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-channel-servers' (Asyncapi 3 Channel Servers).
  Requirement: Channel servers must be defined in the \"servers\" object. To
  fix: Ensure `$.servers.*.$ref` matches the regular expression
  `#\\/servers\\/`; rewrite any value that does not. This rule is evaluated at
  the JSONPath `$.channels.*` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
---
