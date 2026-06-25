---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: put-define-401-response
title: Put Define 401 Response
severity: error
given: $.paths[*].put.responses
message: PUT MUST Have 401 Response
description: "PUT operations should define a 401 Unauthorized response to
  document authentication requirements for update operations. It requires the
  `401` field to be present and non-empty (evaluated at
  `$.paths[*].put.responses`). Severity: error."
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
