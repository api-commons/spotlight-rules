---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3_1-callbacks-in-webhook
title: 1 Callbacks In Webhook
severity: warn
given: $.webhooks[*][*].callbacks
message: Callbacks should not be defined in a webhook.
description: ""
experience:
  - reliability
  - consistency
spec:
  - document
source: []
builtin: true
---
