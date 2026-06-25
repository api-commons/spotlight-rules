---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-no-request-body
title: Delete No Request Body
severity: error
given: $.paths[*].delete.requestBody
message: ""
description: "DELETE requests MUST NOT have a request body. It requires the
  targeted value to be absent or empty (evaluated at
  `$.paths[*].delete.requestBody`). Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - request-body
source:
  - adidas
builtin: false
---
