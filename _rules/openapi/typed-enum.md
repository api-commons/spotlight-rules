---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: typed-enum
title: Typed Enum
severity: warn
given: $..[?(@ && @.enum && @.type)]
message: "{{error}}"
description: Enum values must respect the specified type.
experience:
  - data-modeling
  - consistency
spec:
  - document
source: []
builtin: true
---
