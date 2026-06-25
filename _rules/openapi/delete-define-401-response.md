---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-define-401-response
title: Delete Define 401 Response
severity: error
given: $.paths[*].delete.responses
message: DELETE MUST Have 401 Response
description: "DELETE operations should define a 401 Unauthorized response to
  document authentication requirements for destructive operations. It requires
  the `401` field to be present and non-empty (evaluated at
  `$.paths[*].delete.responses`). Severity: error."
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
