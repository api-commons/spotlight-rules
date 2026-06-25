---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-define-500-response
title: Delete Define 500 Response
severity: error
given: $.paths.*.delete.responses
message: DELETE Responses MUST Have 500 Status Codes
description: "DELETE responses should have a 500 internal server erorr HTTP
  status code, communicating the API had a problem to consumers. It requires the
  `500` field to be present and non-empty (evaluated at
  `$.paths.*.delete.responses`). Severity: error."
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
source:
  - api-evangelist
builtin: false
---
