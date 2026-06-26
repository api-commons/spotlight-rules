---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: operation-asyncapi-require-tag
title: Operation Asyncapi Require Tag
severity: info
given: $.operations[*]
message: Operation should declare tags.
description: Operations should declare tags for grouping.
experience:
  - documentation
  - discoverability
spec:
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/operation-asyncapi-require-tag/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'operation-asyncapi-require-tag' (Operation Asyncapi Require
  Tag). Requirement: Operations should declare tags for grouping. To fix: Ensure
  `tags` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.operations[*]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
