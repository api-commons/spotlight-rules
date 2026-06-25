---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-server-no-empty-variable
title: Asyncapi Server No Empty Variable
severity: warn
given: $.servers[*].url
message: ""
description: Server URL must not have empty variable substitution pattern.
experience:
  - reliability
  - consistency
spec:
  - servers
source: []
builtin: true
---
