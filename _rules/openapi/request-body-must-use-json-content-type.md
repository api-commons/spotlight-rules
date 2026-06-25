---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-body-must-use-json-content-type
title: Request Body Must Use JSON Content Type
severity: error
given: $.paths.*[post,put,patch].requestBody.content
message: Request Body MUST Use application/json Content Type
description: "Request bodies should use application/json as the primary content
  type for consistency across API operations and client implementations. It
  requires the `application/json` field to be present and non-empty (evaluated
  at `$.paths.*[post,put,patch].requestBody.content`). Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - request-body
  - media-types
source:
  - api-evangelist
builtin: false
---
