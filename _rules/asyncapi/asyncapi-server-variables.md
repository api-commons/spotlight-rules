---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-server-variables
title: Asyncapi Server Variables
severity: error
given: $.servers.* | $.components.servers.*
message: "{{error}}"
description: Server variables must be defined and there must be no redundant variables.
experience:
  - reliability
  - consistency
spec:
  - servers
  - components
source: []
builtin: true
---
