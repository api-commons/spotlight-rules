---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-parameter-description
title: Asyncapi Parameter Description
severity: warn
given: $.components.parameters.* | $.channels.*.parameters.*
message: ""
description: Parameter objects must have "description".
experience:
  - documentation
spec:
  - channels
  - components
source: []
builtin: true
---
