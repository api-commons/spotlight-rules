---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-require-204-response
title: Delete Require 204 Response
severity: error
given: $.paths[*].delete.responses
message: ""
description: "All DELETE methods MUST have a 204 response. It requires the `204`
  field to be present and non-empty (evaluated at
  `$.paths[*].delete.responses`). Severity: error."
experience:
  - consistency
  - error-handling
spec:
  - paths
  - operations
  - responses
source:
  - trimble
builtin: false
---
