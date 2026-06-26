---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3_1-servers-in-webhook
title: OAS3.1 Servers In Webhook
severity: info
given: $.webhooks.servers | $.webhooks[*][*].servers
message: Servers should not be defined in a webhook.
description: OAS3.1 Servers In Webhook.
experience:
  - reliability
  - consistency
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3_1-servers-in-webhook/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3_1-servers-in-webhook' (OAS3.1 Servers In Webhook).
  Requirement: OAS3.1 Servers In Webhook. To fix: Remove the targeted value from
  each matching location. This rule is evaluated at the JSONPath
  `$.webhooks.servers | $.webhooks[*][*].servers` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
---
