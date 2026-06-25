---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: message-examples-form-complete-mocks
title: Message Examples Form Complete Mocks
severity: warn
given: $.channels.*
message: "{{error}}"
description: "Message example must match params examples to form full mocks. It
  applies a custom validation to the targeted value (evaluated at
  `$.channels.*`). Severity: warn."
experience:
  - documentation
  - usability
spec:
  - channels
source:
  - microcks
builtin: false
---
