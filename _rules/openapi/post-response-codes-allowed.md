---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: post-response-codes-allowed
title: Post Response Codes Allowed
severity: warn
given: $.paths[*].post.responses
message: ""
description: "POST operations should not return 412 status codes. It requires
  the `@key` field not to match `412` (evaluated at
  `$.paths[*].post.responses`). Severity: warn."
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
