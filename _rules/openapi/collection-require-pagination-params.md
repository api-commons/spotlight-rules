---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: collection-require-pagination-params
title: Collection Require Pagination Params
severity: warn
given: $.paths[?(!@property.match(/.*\/\{[^}]+\}\/*.*/))].get
message: ""
description: "Collection GET endpoints SHOULD support pagination using query
  parameters. Offset or cursor based pagination is required. It validates the
  `parameters` field against a JSON Schema (evaluated at
  `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}\\/*.*/))].get`). Severity:
  warn."
experience:
  - pagination
  - usability
spec:
  - paths
  - operations
source:
  - sps-commerce
builtin: false
---
