---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: head-response-codes-allowed
title: Head Response Codes Allowed
severity: warn
given: $.paths[*].head.responses
message: ""
description: "HEAD operations should not return 201, 202, 204, 409, 412 status
  codes. It requires the `@key` field not to match `^(201|202|204|409|412)$`
  (evaluated at `$.paths[*].head.responses`). Severity: warn."
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
