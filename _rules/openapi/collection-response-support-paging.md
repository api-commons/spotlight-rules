---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: collection-response-support-paging
title: Collection Response Support Paging
severity: warn
given: $.paths[?(!@property.match(/.*\/\{[^}]+\}.*$/))].get.responses['200'].content.application/json.schema.properties
message: ""
description: "Response bodies from collection endpoints SHOULD offer paging
  capability. It requires the `paging` field to be present and non-empty, and
  requires the `paging` field to match the pattern `object`, and requires the
  `paging.type` field to match the pattern `object` (evaluated at
  `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}.*$/))].get.responses['200'].con\
  tent.application/json.schema.properties`). Severity: warn."
experience:
  - pagination
  - usability
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
