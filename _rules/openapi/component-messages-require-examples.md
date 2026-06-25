---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: component-messages-require-examples
title: Component Messages Require Examples
severity: warn
given: $.components.messages.*
message: Message must have examples
description: "Message must have examples. It requires the `examples` field to be
  present and non-empty (evaluated at `$.components.messages.*`). Severity:
  warn."
experience:
  - documentation
  - usability
spec:
  - messages
  - components
source:
  - microcks
builtin: false
---
