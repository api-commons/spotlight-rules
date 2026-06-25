---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: post-not-for-retrieval
title: Post Not For Retrieval
severity: error
given: $.paths[*].post
message: ""
description: "POST requests SHOULD NOT be used for retrieving information. Use
  GET instead. It requires the `summary` field not to match
  `(retrieve|fetch|get|read)` (evaluated at `$.paths[*].post`). Severity:
  error."
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
source:
  - adidas
builtin: false
---
