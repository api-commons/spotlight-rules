---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-server-no-trailing-slash
title: Asyncapi Server No Trailing Slash
severity: warn
given: $.servers[*].url
message: ""
description: Server URL must not end with slash.
experience:
  - consistency
  - reliability
spec:
  - servers
source: []
builtin: true
---
