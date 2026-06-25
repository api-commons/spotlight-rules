---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: put-define-500-response
title: Put Define 500 Response
severity: error
given: $.paths.*.put.responses
message: PUT Responses MUST Have 500 Status Codes
description: "PUT responses should have a 500 internal server erorr HTTP status
  code, communicating the API had a problem to consumers. It requires the `500`
  field to be present and non-empty (evaluated at `$.paths.*.put.responses`).
  Severity: error."
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
