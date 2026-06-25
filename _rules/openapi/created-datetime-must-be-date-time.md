---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: created-datetime-must-be-date-time
title: Created Datetime Must Be Date Time
severity: error
given: $..properties.createdDateTime
message: ""
description: "createdDateTime MUST use a data type of 'string' with the format
  'date-time'. It requires the `type` field to match the pattern `^string$`, and
  requires the `format` field to be present and non-empty, and requires the
  `format` field to match the pattern `^date-time$` (evaluated at
  `$..properties.createdDateTime`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - schemas
source:
  - sps-commerce
builtin: false
---
