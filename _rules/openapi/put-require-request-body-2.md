---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: put-require-request-body-2
title: Put Require Request Body 2
severity: error
given: $.paths.*.put
message: PUT Requests MUST Have a Body
description: "PUT HTTP methods can have a request body, providing a structured
  payload for configuring each API request. It requires the `requestBody` field
  to be present and non-empty (evaluated at `$.paths.*.put`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
