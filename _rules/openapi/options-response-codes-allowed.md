---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: options-response-codes-allowed
title: Options Response Codes Allowed
severity: warn
given: $.paths[*].options.responses
message: ""
description: "OPTIONS operations should not return 201, 202, 409, 412 status
  codes. It requires the `@key` field not to match `^(201|202|409|412)$`
  (evaluated at `$.paths[*].options.responses`). Severity: warn."
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
