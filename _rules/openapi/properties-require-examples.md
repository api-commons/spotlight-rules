---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: properties-require-examples
title: Properties Require Examples
severity: error
given: $..properties..properties.*
message: "{{description}}; {{property}}"
description: "Object properties must include examples. It applies a custom
  validation to the targeted value (evaluated at `$..properties..properties.*`).
  Severity: error."
experience:
  - documentation
  - usability
spec:
  - schemas
source:
  - digitalocean
builtin: false
---
