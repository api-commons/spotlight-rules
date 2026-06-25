---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: patch-define-404-response
title: Patch Define 404 Response
severity: error
given: $.paths[*].patch.responses
message: PATCH MUST Have 404 Response
description: "PATCH operations should define a 404 Not Found response for cases
  where the resource to be updated does not exist. It requires the `404` field
  to be present and non-empty (evaluated at `$.paths[*].patch.responses`).
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
