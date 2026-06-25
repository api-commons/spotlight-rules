---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-response-codes-allowed
title: Get Response Codes Allowed
severity: warn
given: $.paths[*].get.responses
message: ""
description: "GET operations should not use status codes 201, 202, 204, 409,
  412. It requires the `@key` field not to match `^(201|202|204|409|412)$`
  (evaluated at `$.paths[*].get.responses`). Severity: warn."
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
