---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: array-parameters-typed-items
title: Array Parameters Typed Items
severity: error
given: $..*.parameters[*]
message: "{{error}}"
description: "Array parameters must have an items attribute with a type. It
  applies a custom validation to the targeted value (evaluated at
  `$..*.parameters[*]`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - parameters
source:
  - digitalocean
builtin: false
---
