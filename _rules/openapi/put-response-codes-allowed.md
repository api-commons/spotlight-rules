---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: put-response-codes-allowed
title: Put Response Codes Allowed
severity: warn
given: $.paths[*].put.responses
message: ""
description: "PUT operations should not return 200 or 201 status codes. It
  requires the `@key` field not to match `^(200|201)$` (evaluated at
  `$.paths[*].put.responses`). Severity: warn."
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
