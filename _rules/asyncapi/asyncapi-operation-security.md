---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-operation-security
title: Asyncapi Operation Security
severity: error
given: $.channels[*][publish,subscribe].security.*
message: "{{error}}"
description: Operation have to reference a defined security schemes.
experience:
  - security
  - reliability
spec:
  - channels
source: []
builtin: true
---
