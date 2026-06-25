---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-id-query-parameter
title: No ID Query Parameter
severity: warn
given: $.paths..get.parameters.[?(@.in=='query' && @.name=='id')]
message: ""
description: "Resource identifier filtering is not allowed as a query parameter.
  Use the resource identifier in the URL path. It requires the `name` field not
  to match `^id$` (evaluated at `$.paths..get.parameters.[?(@.in=='query' &&
  @.name=='id')]`). Severity: warn."
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
