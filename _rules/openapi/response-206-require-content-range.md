---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-206-require-content-range
title: Response 206 Require Content Range
severity: warn
given: $.paths.*.
message: "{{error}}"
description: "Check if the get response code 206 has content-type and
  content-range. It applies a custom validation to the targeted value (evaluated
  at `$.paths.*.`). Severity: warn."
experience:
  - consistency
  - data-modeling
spec:
  - paths
source:
  - trimble
builtin: false
---
