---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3_1-servers-in-webhook
title: 1 Servers In Webhook
severity: warn
given: $.webhooks.servers | $.webhooks[*][*].servers
message: Servers should not be defined in a webhook.
description: ""
experience:
  - reliability
  - consistency
spec:
  - servers
source: []
builtin: true
---
