---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: patch-define-200-response
title: Patch Define 200 Response
severity: error
given: $.paths[*].patch.responses
message: PATCH MUST Have 200 Response
description: "PATCH operations should define a 200 OK response for successful
  partial updates. Analysis shows PATCH is used in 17.7% of APIs. It requires
  the `200` field to be present and non-empty (evaluated at
  `$.paths[*].patch.responses`). Severity: error."
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
source:
  - api-evangelist
builtin: false
---
