---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: integer-format-allowed-values
title: Integer Format Allowed Values
severity: hint
given: |
  $.[?(@.type=="integer")]
message: Type format is "{{value}}", expected one of [int32, int64]. {{path}}
description: >-
  To improve interoperability, integer and number formats are constrained to a
  shared subset. See recommendation RAC_REST_FORMAT_004. It requires the
  `format` field to be one of ["int32","int64"] (evaluated at
  `$.[?(@.type=="integer")]

  `). Severity: hint.
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - team-digitale
builtin: false
---
