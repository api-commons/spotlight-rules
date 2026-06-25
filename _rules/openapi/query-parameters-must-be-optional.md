---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: query-parameters-must-be-optional
title: Query Parameters Must Be Optional
severity: error
given: $.paths.*.*.parameters[?(@.in=='query')].required
message: Query parameters MUST be optional.
description: "Query parameters MUST be optional. It requires the targeted value
  to be absent or empty (evaluated at
  `$.paths.*.*.parameters[?(@.in=='query')].required`). Severity: error."
experience:
  - usability
  - consistency
spec:
  - paths
  - parameters
source:
  - sps-commerce
builtin: false
---
