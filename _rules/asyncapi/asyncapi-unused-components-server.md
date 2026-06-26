---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-unused-components-server
title: Asyncapi Unused Components Server
severity: info
given: $.components.servers
message: Potentially unused components server has been detected.
description: Potentially unused components server has been detected.
experience:
  - consistency
  - reliability
spec:
  - servers
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-unused-components-server/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-unused-components-server' (Asyncapi Unused
  Components Server). Requirement: Potentially unused components server has been
  detected. To fix: Remove the unreferenced reusable object, or reference it
  where it is needed. This rule is evaluated at the JSONPath
  `$.components.servers` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
---
