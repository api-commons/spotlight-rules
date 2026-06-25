---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: query-parameters-camel-case-2
title: Query Parameters Camel Case 2
severity: error
given: $.paths.*.*.parameters[?(@.in=='query')].name
message: Query parameter keys MUST use camelCase.
description: "Query parameter keys MUST use camelCase. It requires camel casing
  on the targeted value (evaluated at
  `$.paths.*.*.parameters[?(@.in=='query')].name`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
  - parameters
source:
  - sps-commerce
builtin: false
---
