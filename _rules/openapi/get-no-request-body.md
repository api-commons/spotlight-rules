---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-no-request-body
title: Get No Request Body
severity: error
given: $.paths[*].get.requestBody
message: ""
description: "GET requests MUST NOT have a request body. It requires the
  targeted value to be absent or empty (evaluated at
  `$.paths[*].get.requestBody`). Severity: error."
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
