---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: examples-form-complete-mocks
title: Examples Form Complete Mocks
severity: warn
given: $.paths.*.*
message: "{{error}}"
description: "Response example must match required params examples to form full
  mocks. It applies a custom validation to the targeted value (evaluated at
  `$.paths.*.*`). Severity: warn."
experience:
  - documentation
  - usability
spec:
  - paths
source:
  - microcks
builtin: false
---
