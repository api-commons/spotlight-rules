---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-response-codes-allowed
title: Delete Response Codes Allowed
severity: warn
given: $.paths[*].delete.responses
message: ""
description: "DELETE operations should not return 200 or 201 status codes. It
  requires the `@key` field not to match `^(200|201)$` (evaluated at
  `$.paths[*].delete.responses`). Severity: warn."
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
