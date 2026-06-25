---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: channel-parameters-require-examples
title: Channel Parameters Require Examples
severity: warn
given: $.channels.*.parameters.*.schema
message: Parameter must have examples
description: "Parameter must have examples. It requires the `examples` field to
  be present and non-empty (evaluated at `$.channels.*.parameters.*.schema`).
  Severity: warn."
experience:
  - documentation
  - usability
spec:
  - channels
  - parameters
  - schemas
source:
  - microcks
builtin: false
---
