---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-summary-description-differ
title: Operation Summary Description Differ
severity: warn
given: $.paths[*].[get,post,put,patch,delete]
message: "{{error}}"
description: "Operation summaries and description should not match. It applies a
  custom validation to the targeted value (evaluated at
  `$.paths[*].[get,post,put,patch,delete]`). Severity: warn."
experience:
  - documentation
spec:
  - paths
  - operations
source:
  - trimble
builtin: false
---
