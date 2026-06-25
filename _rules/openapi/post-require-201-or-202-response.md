---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: post-require-201-or-202-response
title: Post Require 201 Or 202 Response
severity: error
given: $.paths[*].post.responses
message: ""
description: "All POST methods MUST have a 201 or 202 response. It applies a
  custom validation to the targeted value (evaluated at
  `$.paths[*].post.responses`). Severity: error."
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
