---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-array-require-items
title: Parameter Array Require Items
severity: error
given: $.components.parameters.schema[?(@.type=='array')]
message: Parameter Schema Array MUST Have Items
description: "Parameters that are of an array type should always have the items
  defined, being explicit about what is continued as part of the array. It
  requires the `items` field to be present and non-empty (evaluated at
  `$.components.parameters.schema[?(@.type=='array')]`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - parameters
  - schemas
  - components
source:
  - api-evangelist
builtin: false
---
