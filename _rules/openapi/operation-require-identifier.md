---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-identifier
title: Operation Require Identifier
severity: error
given: $.paths.*[get,post,patch,put,delete]
message: Operation MUST Have Identifier
description: "Operation identifiers provide a unique way to identify each
  individual API, which then used for SDK generation and other automation. It
  requires the `operationId` field to be present and non-empty (evaluated at
  `$.paths.*[get,post,patch,put,delete]`). Severity: error."
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
