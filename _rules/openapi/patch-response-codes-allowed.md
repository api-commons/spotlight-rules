---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: patch-response-codes-allowed
title: Patch Response Codes Allowed
severity: warn
given: $.paths[*].patch.responses
message: ""
description: "PATCH operations should not return 201 status code. It requires
  the `@key` field not to match `^201$` (evaluated at
  `$.paths[*].patch.responses`). Severity: warn."
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
source:
  - sps-commerce
builtin: false
---
