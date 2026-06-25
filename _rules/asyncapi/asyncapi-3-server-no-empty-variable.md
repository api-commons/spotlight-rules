---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-server-no-empty-variable
title: Asyncapi 3 Server No Empty Variable
severity: warn
given: $.servers[*].host | $.servers[*].pathname
message: ""
description: Server host and pathname must not have empty variable substitution pattern.
experience:
  - reliability
  - consistency
spec:
  - servers
source: []
builtin: true
---
