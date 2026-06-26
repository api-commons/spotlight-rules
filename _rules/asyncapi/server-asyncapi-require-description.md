---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: server-asyncapi-require-description
title: Server Asyncapi Require Description
severity: info
given: $.servers[*]
message: Server should have a description.
description: Servers should have a description identifying the environment/broker.
experience:
  - documentation
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/server-asyncapi-require-description/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'server-asyncapi-require-description' (Server Asyncapi Require
  Description). Requirement: Servers should have a description identifying the
  environment/broker. To fix: Ensure `description` is present and non-empty at
  each matching location. This rule is evaluated at the JSONPath `$.servers[*]`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
