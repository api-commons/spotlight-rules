---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: query-parameters-camel-case-3
title: Query Parameters Camel Case 3
severity: error
given: $.paths[*][*].parameters[?(@.in == 'query')]
message: Query Parameters MUST Use camelCase
description: "Query parameter names should use camelCase for consistency.
  Analysis shows camelCase is the most common query parameter style at 54% (2519
  parameters), followed by snake_case at 36%. It requires camel casing on the
  `name` field (evaluated at `$.paths[*][*].parameters[?(@.in == 'query')]`).
  Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
  - parameters
source:
  - api-evangelist
builtin: false
---
