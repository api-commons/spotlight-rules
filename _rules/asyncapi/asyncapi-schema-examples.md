---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-schema-examples
title: Asyncapi Schema Examples
severity: error
given: $.components.schemas.*.examples^ |
  $.components.parameters.*.schema.examples^ |
  $.channels.*.parameters.*.schema.examples^
message: "{{error}}"
description: Examples must be valid against their defined schema.
experience:
  - data-modeling
  - documentation
  - reliability
spec:
  - channels
  - components
  - schemas
source: []
builtin: true
---
