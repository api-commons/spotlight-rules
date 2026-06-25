---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: query-parameter-allowed-characters
title: Query Parameter Allowed Characters
severity: error
given: $.paths.*.*.parameters[?(@.in=='query')].name
message: "Query parameter keys MUST include only alpha-numeric characters and
  periods: [Aa0-Zz9]'."
description: "Query parameter keys MUST include only alpha-numeric characters
  and periods: [Aa0-Zz9]'. It requires the targeted value to match the pattern
  `^[A-Za-z0-9\\.]+$` (evaluated at
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
