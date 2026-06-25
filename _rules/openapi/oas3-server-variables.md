---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-server-variables
title: Server Variables
severity: error
given: "$.servers[*] | #PathItem.servers[*] | #OperationObject.servers[*] |
  #LinkObject.server"
message: "{{error}}"
description: Server variables must be defined and valid and there must be no
  unused variables.
experience:
  - reliability
  - consistency
spec:
  - servers
source: []
builtin: true
---
