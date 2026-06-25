---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-must-not-have-request-body
title: Get Must Not Have Request Body
severity: error
given: $.paths[*][get].requestBody
message: ""
description: "A `GET` request MUST NOT accept a request body. It requires the
  targeted value to be undefined (evaluated at `$.paths[*][get].requestBody`).
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
