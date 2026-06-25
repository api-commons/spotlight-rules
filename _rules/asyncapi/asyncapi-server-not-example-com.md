---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-server-not-example-com
title: Asyncapi Server Not Example Com
severity: warn
given: $.servers[*].url
message: ""
description: Server URL must not point at example.com.
experience:
  - reliability
  - usability
spec:
  - servers
source: []
builtin: true
---
