---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-server-no-empty-variable
title: Asyncapi 3 Server No Empty Variable
severity: info
given: $.servers[*].host | $.servers[*].pathname
message: Server host and pathname must not have empty variable substitution pattern.
description: Server host and pathname must not have empty variable substitution pattern.
experience:
  - reliability
  - consistency
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-server-no-empty-variable/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-server-no-empty-variable' (Asyncapi 3 Server No
  Empty Variable). Requirement: Server host and pathname must not have empty
  variable substitution pattern. To fix: Ensure the targeted value does NOT
  match the regular expression `{}`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.servers[*].host | $.servers[*].pathname`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
---
