---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-url-include-version
title: Server URL Include Version
severity: info
given: $.servers
message: "{{error}}"
description: API URLs versions should meet the Trimble API Standards.
experience:
  - versioning
  - consistency
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/server-url-include-version/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-url-include-version' (Server URL Include Version).
  Requirement: API URLs versions should meet the Trimble API Standards. This
  rule is evaluated at the JSONPath `$.servers` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
