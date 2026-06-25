---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-examples-value-or-externalValue
title: Examples Value Or ExternalValue
severity: warn
given: $.components.examples[*] | $.paths[*][*]..content[*].examples[*] |
  $.paths[*][*]..parameters[*].examples[*] |
  $.components.parameters[*].examples[*] | $.paths[*][*]..headers[*].examples[*]
  | $.components.headers[*].examples[*]
message: ""
description: Examples must have either "value" or "externalValue" field.
experience:
  - documentation
  - consistency
spec:
  - paths
  - parameters
  - headers
  - media-types
  - components
  - examples
source: []
builtin: true
---
