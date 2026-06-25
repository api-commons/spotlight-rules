---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: number-format-allowed-values
title: Number Format Allowed Values
severity: hint
given: |
  $.[?(@.type=="number")]
message: Type format is "{{value}}", expected one of [decimal32, decimal64,
  decimal128, float, double]. {{path}}
description: >-
  To improve interoperability, integer and number formats are constrained to a
  shared subset. See recommendation RAC_REST_FORMAT_004. It requires the
  `format` field to be one of
  ["decimal32","decimal64","float","double","decimal128"] (evaluated at
  `$.[?(@.type=="number")]

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
