---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: array-items
title: Array Items
severity: error
given: "#ArrayProperties"
message: 'Schemas with "type: array", require a sibling "items" field'
description: ""
experience:
  - data-modeling
  - reliability
spec:
  - document
source: []
builtin: true
---
