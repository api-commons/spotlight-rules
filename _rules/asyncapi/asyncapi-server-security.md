---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-server-security
title: Asyncapi Server Security
severity: error
given: $.servers.*.security.*
message: "{{error}}"
description: Server have to reference a defined security schemes.
experience:
  - security
  - reliability
spec:
  - servers
source: []
builtin: true
---
