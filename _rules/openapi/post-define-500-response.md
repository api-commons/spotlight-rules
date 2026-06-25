---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: post-define-500-response
title: Post Define 500 Response
severity: error
given: $.paths.*.post.responses
message: POST Responses MUST Have 500 Status Codes
description: "POST responses should have a 500 internal server erorr HTTP status
  code, communicating the API had a problem to consumers. It requires the `500`
  field to be present and non-empty (evaluated at `$.paths.*.post.responses`).
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
