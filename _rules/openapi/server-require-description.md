---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-require-description
title: Server Require Description
severity: info
given: $.servers[*] | $.paths..servers
message: Server {{path}} must have a description.
description: Servers must have a description.
experience:
  - documentation
spec:
  - servers
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/server-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-require-description' (Server Require Description).
  Requirement: Servers must have a description. To fix: Ensure `description` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.servers[*] | $.paths..servers` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
