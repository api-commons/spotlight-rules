---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: post-define-201-response
title: Post Define 201 Response
severity: error
given: $.paths[*].post.responses
message: POST Responses MUST Have 201 Status Codes
description: "POST responses should have a 201 success HTTP status codes,
  communicating a success created response to consumers. It requires the `201`
  field to be present and non-empty (evaluated at `$.paths[*].post.responses`).
  Severity: error."
experience:
  - reliability
  - consistency
spec:
  - paths
  - operations
  - responses
source:
  - api-evangelist
builtin: false
---
