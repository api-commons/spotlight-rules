---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-must-not-have-request-body
title: Delete Must Not Have Request Body
severity: error
given: $.paths[*].delete.requestBody
message: ""
description: "DELETE operations must not accept a request body. It requires the
  targeted value to be undefined (evaluated at `$.paths[*].delete.requestBody`).
  Severity: error."
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - request-body
source:
  - sps-commerce
builtin: false
---
