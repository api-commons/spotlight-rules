---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-server-no-trailing-slash
title: Asyncapi 3 Server No Trailing Slash
severity: warn
given: $.servers.*.host
message: ""
description: Server host must not end with slash.
experience:
  - consistency
  - reliability
spec:
  - servers
source: []
builtin: true
---
