---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: put-require-request-body
title: Put Require Request Body
severity: error
given: $.paths[*].put
message: ""
description: "PUT requests MUST have a request body. It requires the
  `requestBody` field to be present and non-empty (evaluated at
  `$.paths[*].put`). Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
source:
  - adidas
builtin: false
---
