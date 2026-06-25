---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: collection-require-results-array
title: Collection Require Results Array
severity: error
given: $.paths[?(!@property.match(/.*\/\{[^}]+\}$/))].get.responses['200'].content.application/json.schema.properties.results
message: ""
description: "Response bodies must have a root element called results and is an
  array of objects. It requires the `type` field to match the pattern `array`,
  and requires the `items.type` field to match the pattern `object` (evaluated
  at
  `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}$/))].get.responses['200'].conte\
  nt.application/json.schema.properties.results`). Severity: error."
experience:
  - pagination
  - data-modeling
spec:
  - paths
  - operations
  - responses
  - media-types
  - schemas
source:
  - sps-commerce
builtin: false
---
