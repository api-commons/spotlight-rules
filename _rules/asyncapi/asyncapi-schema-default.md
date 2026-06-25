---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-schema-default
title: Asyncapi Schema Default
severity: error
given: $.components.schemas.*.default^ |
  $.components.parameters.*.schema.default^ |
  $.channels.*.parameters.*.schema.default^
message: "{{error}}"
description: Default must be valid against its defined schema.
experience:
  - data-modeling
  - reliability
spec:
  - channels
  - components
  - schemas
source: []
builtin: true
---
