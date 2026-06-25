---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-define-404-response
title: Get Define 404 Response
severity: error
given: $.paths.*.get[?(@.properties)]
message: GET Responses MUST Have 404 Status Code
description: "GET responses should have a 404 not found HTTP status code,
  communicating that nothing was found to consumers. It requires the `404` field
  to be present and non-empty (evaluated at `$.paths.*.get[?(@.properties)]`).
  Severity: error."
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - schemas
source:
  - api-evangelist
builtin: false
---
