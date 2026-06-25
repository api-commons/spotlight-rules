---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: filter-param-only-on-get
title: Filter Param Only On Get
severity: error
given: $.paths.*[?(@property!='get')].parameters.[?(@.in=='query' &&
  @.name=='filter')].name
message: ""
description: "Only GET-based endpoints SHOULD have have the query parameter
  'filter'. It requires the targeted value to be absent or empty (evaluated at
  `$.paths.*[?(@property!='get')].parameters.[?(@.in=='query' &&
  @.name=='filter')].name`). Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - parameters
source:
  - sps-commerce
builtin: false
---
