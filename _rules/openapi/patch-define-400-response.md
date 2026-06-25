---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: patch-define-400-response
title: Patch Define 400 Response
severity: error
given: $.paths[*].patch.responses
message: PATCH MUST Have 400 Response
description: "PATCH operations should define a 400 Bad Request response for
  validation errors on partial update payloads. It requires the `400` field to
  be present and non-empty (evaluated at `$.paths[*].patch.responses`).
  Severity: error."
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
