---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-id-camel-case
title: Operation ID Camel Case
severity: error
given: $.paths.*[get,post,patch,put,delete].operationId
message: Operation Identifier MUST Be camelCase
description: "Operation identifiers provide a unique way to identify each
  individual API, and requiring them to have consistent casing reduces friction
  when generating SDKs and automating around APIs. It requires the targeted
  value to match the pattern `^[a-z]+(?:[A-Z][a-z]+)*$` (evaluated at
  `$.paths.*[get,post,patch,put,delete].operationId`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
