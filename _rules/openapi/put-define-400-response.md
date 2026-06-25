---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: put-define-400-response
title: Put Define 400 Response
severity: error
given: $.paths.*.put.responses
message: PUT Responses MUST Have 400 Status Codes
description: "PUT responses should have a 400 not found HTTP status code,
  communicating nothing was found to consumers. It requires the `400` field to
  be present and non-empty (evaluated at `$.paths.*.put.responses`). Severity:
  error."
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
