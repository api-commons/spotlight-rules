---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-404-use-schema-ref
title: Delete 404 Use Schema Ref
severity: error
given: $.paths.*.delete.responses.404
message: DELETE 404 Responses MUST Use Schema Reference
description: "DELETE 404 not found HTTP status codes have a schema references to
  standardize the response payload returned for the error response. It requires
  the `$ref` field to be absent or empty (evaluated at
  `$.paths.*.delete.responses.404`). Severity: error."
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
source:
  - api-evangelist
builtin: false
---
