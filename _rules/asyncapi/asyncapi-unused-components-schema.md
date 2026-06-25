---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-unused-components-schema
title: Asyncapi Unused Components Schema
severity: warn
given: $.components.schemas
message: ""
description: Potentially unused components schema has been detected.
experience:
  - consistency
  - data-modeling
spec:
  - components
  - schemas
source: []
builtin: true
---
