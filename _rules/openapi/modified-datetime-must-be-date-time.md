---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: modified-datetime-must-be-date-time
title: Modified Datetime Must Be Date Time
severity: error
given: $..properties.modifiedDateTime
message: ""
description: "modifiedDateTime MUST use a data type of 'string' with the format
  'date-time'. It requires the `type` field to match the pattern `^string$`, and
  requires the `format` field to be present and non-empty, and requires the
  `format` field to match the pattern `^date-time$` (evaluated at
  `$..properties.modifiedDateTime`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - schemas
source:
  - sps-commerce
builtin: false
---
