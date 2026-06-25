---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: duplicated-entry-in-enum
title: Duplicated Entry In Enum
severity: warn
given: $..[?(@property !== 'properties' && @.enum && @.enum.constructor.name ===
  'Array')]
message: "{{error}}"
description: Enum values must not have duplicate entry.
experience:
  - data-modeling
  - consistency
spec:
  - document
source: []
builtin: true
---
