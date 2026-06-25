---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: array-properties-typed-items
title: Array Properties Typed Items
severity: error
given: $..*.properties[*]
message: "{{error}}"
description: "Array properties must have an items attribute with a type. It
  applies a custom validation to the targeted value (evaluated at
  `$..*.properties[*]`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - schemas
source:
  - digitalocean
builtin: false
---
