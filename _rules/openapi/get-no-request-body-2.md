---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-no-request-body-2
title: Get No Request Body 2
severity: error
given: $.paths.*.get
message: GET Request Body
description: "GET HTTP methods should not have a request body, keeping API
  requests compliant with the HTTP standard. It requires the `requestBody` field
  to be absent or empty (evaluated at `$.paths.*.get`). Severity: error."
experience:
  - consistency
  - data-modeling
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
