---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: leanix-id-valid-uuid
title: Leanix ID Valid Uuid
severity: warn
given: $.info.x-leanixid
message: "{{description}}: {{error}}"
description: "The API contract SHOULD include a custom field 'x-leanixid'
  containing a valid UUID. It requires the targeted value to match the pattern
  `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\
  $` (evaluated at `$.info.x-leanixid`). Severity: warn."
experience:
  - governance
  - consistency
spec:
  - info
source:
  - adidas
builtin: false
---
