---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-body-must-be-object
title: Response Body Must Be Object
severity: error
given: $.paths[*][*].responses[*].content.application/json.schema.type
message: ""
description: "Response bodies must be an object type. It requires the targeted
  value to match the pattern `object` (evaluated at
  `$.paths[*][*].responses[*].content.application/json.schema.type`). Severity:
  error."
experience:
  - data-modeling
  - consistency
spec:
  - paths
  - responses
  - media-types
  - schemas
source:
  - sps-commerce
builtin: false
---
