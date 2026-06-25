---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-description-max-length
title: Schema Property Description Max Length
severity: error
given: $.components.schemas.*.properties[?(@.type == 'string')]
message: Schema Properties Description MUST Have 250 Characters
description: "Schema property descriptions should have a length limit applied,
  applying constraints to writing descriptions, and keeping consistent across
  APIs. It constrains the length of the `description` field and at most 250
  (evaluated at `$.components.schemas.*.properties[?(@.type == 'string')]`).
  Severity: error."
experience:
  - documentation
  - consistency
spec:
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
