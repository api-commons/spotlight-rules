---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-response-support-json
title: Get Response Support JSON
severity: warn
given: $.paths.*.
message: "{{error}}"
description: "All APIs returning structured data SHOULD support JSON as the
  default format. It applies a custom validation to the targeted value
  (evaluated at `$.paths.*.`). Severity: warn."
experience:
  - consistency
  - data-modeling
spec:
  - paths
source:
  - trimble
builtin: false
---
