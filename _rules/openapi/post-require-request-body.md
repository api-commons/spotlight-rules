---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: post-require-request-body
title: Post Require Request Body
severity: error
given: $.paths.*.post
message: POST Requests MUST Have a Body
description: "POST HTTP methods can have a request body, providing a structured
  payload for configuring each API request. It requires the `requestBody` field
  to be present and non-empty (evaluated at `$.paths.*.post`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
