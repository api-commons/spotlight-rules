---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: pagination-params-in-query
title: Pagination Params In Query
severity: error
given: $.paths[*].get.parameters[?(@.name == 'page' || @.name == 'limit' ||
  @.name == 'offset' || @.name == 'cursor' || @.name == 'per_page' || @.name ==
  'page_size')]
message: Pagination Parameters MUST Be Query Parameters
description: "Pagination parameters like page, limit, offset, and cursor should
  be passed as query parameters, not in headers or path segments. Analysis
  confirms 100% of pagination parameters observed are query parameters. It
  requires the `in` field to match the pattern `query` (evaluated at
  `$.paths[*].get.parameters[?(@.name == 'page' || @.name == 'limit' || @.name
  == 'offset' || @.name == 'cursor' || @.name == 'per_page' || @.name ==
  'page_size')]`). Severity: error."
experience:
  - pagination
  - consistency
spec:
  - paths
  - operations
  - parameters
source:
  - api-evangelist
builtin: false
---
