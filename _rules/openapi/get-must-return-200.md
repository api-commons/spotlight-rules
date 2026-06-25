---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-must-return-200
title: Get Must Return 200
severity: error
given: $.paths[*].get.responses
message: ""
description: "GET operations must always return 200 status code. It requires the
  `200` field to be present and non-empty (evaluated at
  `$.paths[*].get.responses`). Severity: error."
experience:
  - error-handling
  - consistency
spec:
  - paths
  - operations
  - responses
source:
  - sps-commerce
builtin: false
---
