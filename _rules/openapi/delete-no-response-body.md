---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-no-response-body
title: Delete No Response Body
severity: warn
given: $.paths.*.
message: "{{error}}"
description: "Check if the delete response does not have any body. It applies a
  custom validation to the targeted value (evaluated at `$.paths.*.`). Severity:
  warn."
experience:
  - consistency
  - data-modeling
spec:
  - paths
source:
  - trimble
builtin: false
---
