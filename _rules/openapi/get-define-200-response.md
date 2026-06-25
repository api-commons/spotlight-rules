---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-define-200-response
title: Get Define 200 Response
severity: error
given: $.paths.*.get.responses
message: GET Responses MUST Have 200 Status Codes
description: "GET responses should have a 200 success HTTP status codes,
  communicating a successful response to consumers. It requires the `200` field
  to be present and non-empty (evaluated at `$.paths.*.get.responses`).
  Severity: error."
experience:
  - reliability
  - consistency
spec:
  - paths
  - operations
  - responses
source:
  - api-evangelist
builtin: false
---
