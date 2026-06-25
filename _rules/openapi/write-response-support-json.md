---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: write-response-support-json
title: Write Response Support JSON
severity: error
given: $.paths.*.
message: "{{error}}"
description: "All APIs returning structured data SHOULD support JSON as the
  default format. It applies a custom validation to the targeted value
  (evaluated at `$.paths.*.`). Severity: error."
experience:
  - consistency
  - data-modeling
spec:
  - paths
source:
  - trimble
builtin: false
---
