---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-no-request-body-2
title: Delete No Request Body 2
severity: error
given: $.paths.*.delete
message: DELETE Request Body
description: "DELETE HTTP methods should not have a request body, keeping API
  requests compliant with the HTTP standard. It requires the `requestBody` field
  to be absent or empty (evaluated at `$.paths.*.delete`). Severity: error."
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
