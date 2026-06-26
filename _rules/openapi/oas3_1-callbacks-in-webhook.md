---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3_1-callbacks-in-webhook
title: OAS3.1 Callbacks In Webhook
severity: info
given: $.webhooks[*][*].callbacks
message: Callbacks should not be defined in a webhook.
description: OAS3.1 Callbacks In Webhook.
experience:
  - reliability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3_1-callbacks-in-webhook/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3_1-callbacks-in-webhook' (OAS3.1 Callbacks In Webhook).
  Requirement: OAS3.1 Callbacks In Webhook. To fix: Remove the targeted value
  from each matching location. This rule is evaluated at the JSONPath
  `$.webhooks[*][*].callbacks` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
---
