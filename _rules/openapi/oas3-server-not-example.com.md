---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-server-not-example.com
title: Server Not Example.com
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
