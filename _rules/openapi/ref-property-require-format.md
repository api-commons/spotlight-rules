---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: ref-property-require-format
title: Ref Property Require Format
severity: error
given: $..properties..[?((@property=== "ref" || @property === "Ref") && @.$ref
  == null && @.allOf == null && @.oneOf == null && @.type != null)]
message: ""
description: "Property with the name 'ref' MUST use a format 'sps-ref'. It
  requires the `format` field to be present and non-empty, and requires the
  `format` field to match the pattern `^sps-ref$` (evaluated at
  `$..properties..[?((@property=== \"ref\" || @property === \"Ref\") && @.$ref
  == null && @.allOf == null && @.oneOf == null && @.type != null)]`). Severity:
  error."
experience:
  - data-modeling
  - consistency
spec:
  - schemas
source:
  - sps-commerce
builtin: false
---
