---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-define-500-response
title: Get Define 500 Response
severity: error
given: $.paths.*.get.responses
message: GET Responses MUST Have 500 Status Code
description: "GET responses should have a 500 internal server erorr HTTP status
  code, communicating the API had a problem to consumers. It requires the `500`
  field to be present and non-empty (evaluated at `$.paths.*.get.responses`).
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
