---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-microcks-extension-valid
title: Operation Microcks Extension Valid
severity: warn
given: $.paths.*.*.x-microcks-operation |
  $.channels.*.[publish,subscribe].x-microcks-operation |
  $.operations.*.x-microcks-operation
message: x-microcks-operation extension must be valid
description: "x-microcks-operation extension must be valid. It validates the
  targeted value against a JSON Schema (evaluated at
  `$.paths.*.*.x-microcks-operation`,
  `$.channels.*.[publish,subscribe].x-microcks-operation`,
  `$.operations.*.x-microcks-operation`). Severity: warn."
experience:
  - governance
  - consistency
spec:
  - channels
  - paths
source:
  - microcks
builtin: false
---
