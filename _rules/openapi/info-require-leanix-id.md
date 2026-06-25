---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-leanix-id
title: Info Require Leanix ID
severity: warn
given: $.info
message: "{{description}}: {{error}}"
description: "The API contract SHOULD include a custom field 'x-leanixid' in the
  'info' section. It requires the `x-leanixid` field to be present and non-empty
  (evaluated at `$.info`). Severity: warn."
experience:
  - governance
  - discoverability
spec:
  - info
source:
  - adidas
builtin: false
---
