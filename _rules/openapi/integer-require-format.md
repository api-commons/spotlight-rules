---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: integer-require-format
title: Integer Require Format
severity: error
given: |
  $.[?(@.type=="integer")]
message: Schema of type number or integer must specify a format. {{path}}
description: >-
  Schema of type number or integer must specify a format to express the
  associated datatype, eg. `int32`, `int64`, ... You can express similar
  requirements using the `minimum` and `maximum` properties. See recommendation
  RAC_REST_FORMAT_004. It requires the `format` field to be present and
  non-empty (evaluated at `$.[?(@.type=="integer")]

  `). Severity: error.
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - team-digitale
builtin: false
---
