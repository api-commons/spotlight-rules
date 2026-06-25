---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: get-define-401-response
title: Get Define 401 Response
severity: error
given: $.paths[*].get.responses
message: GET MUST Have 401 Response
description: "GET operations should define a 401 Unauthorized response. Analysis
  of 773 specs shows 401 is the second most common response code with 4805
  occurrences, confirming authentication errors must be documented. It requires
  the `401` field to be present and non-empty (evaluated at
  `$.paths[*].get.responses`). Severity: error."
experience:
  - security
  - error-handling
spec:
  - paths
  - operations
  - responses
source:
  - api-evangelist
builtin: false
---
