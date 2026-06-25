---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-operation-description
title: Asyncapi 3 Operation Description
severity: warn
given: $.operations.*
message: ""
description: Operation "description" must be present and non-empty string.
experience:
  - documentation
spec:
  - document
source: []
builtin: true
---
