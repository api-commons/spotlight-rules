---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-properties-require-type
title: Schema Properties Require Type
severity: error
given: $..properties.*
message: "{{error}}"
description: "Schema properties must have a type defined. It applies a custom
  validation to the targeted value (evaluated at `$..properties.*`). Severity:
  error."
experience:
  - data-modeling
  - consistency
spec:
  - schemas
source:
  - digitalocean
builtin: false
---
