---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-unused-components-server
title: Asyncapi Unused Components Server
severity: warn
given: $.components.servers
message: ""
description: Potentially unused components server has been detected.
experience:
  - consistency
  - reliability
spec:
  - servers
  - components
source: []
builtin: true
---
