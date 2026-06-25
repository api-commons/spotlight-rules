---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-server-trailing-slash
title: Server Trailing Slash
severity: warn
given: $.servers[*].url
message: ""
description: Server URL must not have trailing slash.
experience:
  - consistency
  - reliability
spec:
  - servers
source: []
builtin: true
---
