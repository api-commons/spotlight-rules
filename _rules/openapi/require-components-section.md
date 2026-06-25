---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-components-section
title: Require Components Section
severity: error
given: $
message: "{{description}}: {{error}}"
description: "The API contract MUST include a 'components' section. It requires
  the `components` field to be present and non-empty (evaluated at `$`).
  Severity: error."
experience:
  - consistency
  - governance
spec:
  - document
source:
  - adidas
builtin: false
---
