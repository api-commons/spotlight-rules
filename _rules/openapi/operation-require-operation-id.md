---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-operation-id
title: Operation Require Operation ID
severity: error
given: $.paths.*[get,post,put,patch,delete]
message: Operation MUST Have operationId
description: "Every operation should have an operationId for SDK generation and
  documentation linking. Analysis shows operationId styles across 8878
  operations with camelCase dominant at 92%. It requires the `operationId` field
  to be present and non-empty (evaluated at
  `$.paths.*[get,post,put,patch,delete]`). Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
