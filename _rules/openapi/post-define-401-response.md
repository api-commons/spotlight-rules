---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: post-define-401-response
title: Post Define 401 Response
severity: error
given: $.paths[*].post.responses
message: POST MUST Have 401 Response
description: "POST operations should define a 401 Unauthorized response to
  document authentication requirements for write operations. It requires the
  `401` field to be present and non-empty (evaluated at
  `$.paths[*].post.responses`). Severity: error."
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
