---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-parameters-camel-case-2
title: Path Parameters Camel Case 2
severity: error
given: $.paths.*.*.parameters[?(@.in=='path')].name
message: Path parameter keys MUST use camelCase.
description: "Path parameter keys MUST use camelCase. It requires camel casing
  on the targeted value (evaluated at
  `$.paths.*.*.parameters[?(@.in=='path')].name`). Severity: error."
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
