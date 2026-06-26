---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-channel-no-empty-parameter
title: Asyncapi 3 Channel No Empty Parameter
severity: info
given: $.channels.*
message: Channel address must not have empty parameter substitution pattern.
description: Channel address must not have empty parameter substitution pattern.
experience:
  - reliability
  - consistency
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-channel-no-empty-parameter/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-channel-no-empty-parameter' (Asyncapi 3 Channel No
  Empty Parameter). Requirement: Channel address must not have empty parameter
  substitution pattern. To fix: Ensure `address` does NOT match the regular
  expression `{}`; rename or rewrite any value that does. This rule is evaluated
  at the JSONPath `$.channels.*` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
---
