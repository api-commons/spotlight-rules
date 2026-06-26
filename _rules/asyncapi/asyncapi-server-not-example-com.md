---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-server-not-example-com
title: Asyncapi Server Not Example Com
severity: info
given: $.servers[*].url
message: Server URL must not point at example.com.
description: Server URL must not point at example.com.
experience:
  - reliability
  - usability
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-server-not-example-com/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-server-not-example-com' (Asyncapi Server Not Example
  Com). Requirement: Server URL must not point at example.com. To fix: Ensure
  the targeted value does NOT match the regular expression `example\\.com`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.servers[*].url` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
---
