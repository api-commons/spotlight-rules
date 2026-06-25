---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-must-return-response-body
title: Get Must Return Response Body
severity: error
given: $.paths[*].get.responses[*]
message: ""
description: "A `GET` operation must return a response body. It requires the
  `content` field to be present and non-empty (evaluated at
  `$.paths[*].get.responses[*]`). Severity: error."
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - responses
source:
  - sps-commerce
builtin: false
---
