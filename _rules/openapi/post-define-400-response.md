---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: post-define-400-response
title: Post Define 400 Response
severity: error
given: $.paths[*].post.responses
message: POST MUST Have 400 Response
description: "POST operations should define a 400 Bad Request response for input
  validation errors. Analysis shows 400 is the 4th most common response code
  across 2516 operations. It requires the `400` field to be present and
  non-empty (evaluated at `$.paths[*].post.responses`). Severity: error."
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
