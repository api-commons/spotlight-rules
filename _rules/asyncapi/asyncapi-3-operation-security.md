---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-operation-security
title: Asyncapi 3 Operation Security
severity: error
given: $.operations.*.security.*
message: "{{error}}"
description: Operation have to reference a defined security schemes.
experience:
  - security
  - reliability
spec:
  - document
source: []
builtin: true
---
