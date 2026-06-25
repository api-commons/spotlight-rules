---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: messages-require-examples
title: Messages Require Examples
severity: warn
given: $.channels.*.[publish,subscribe].message
message: Message must have examples
description: "Message must have examples. It requires the `examples` field to be
  present and non-empty (evaluated at
  `$.channels.*.[publish,subscribe].message`). Severity: warn."
experience:
  - documentation
  - usability
spec:
  - channels
  - messages
source:
  - microcks
builtin: false
---
