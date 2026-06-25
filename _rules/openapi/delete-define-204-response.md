---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-define-204-response
title: Delete Define 204 Response
severity: info
given: $.paths.*.delete.responses
message: DELETE 204 Status Code
description: "DELETE responses should have a 204 success HTTP status codes,
  communicating a success created response to consumers. It requires the `204`
  field to be present and non-empty (evaluated at `$.paths.*.delete.responses`).
  Severity: info."
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
