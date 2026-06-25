---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-server-not-example-com
title: Asyncapi 3 Server Not Example Com
severity: warn
given: $.servers.*.host
message: ""
description: Server host must not point at example.com.
experience:
  - reliability
  - usability
spec:
  - servers
source: []
builtin: true
---
