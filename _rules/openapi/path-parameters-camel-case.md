---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-parameters-camel-case
title: Path Parameters Camel Case
severity: warn
given: $..parameters[?(@.in == 'path')].name
message: "{{property}} path parameter is not camelCase: {{error}}"
description: "Path parameters MUST follow camelCase. It requires the targeted
  value to match the pattern `^[a-z][a-zA-Z0-9]+$` (evaluated at
  `$..parameters[?(@.in == 'path')].name`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - parameters
source:
  - adidas
builtin: false
---
