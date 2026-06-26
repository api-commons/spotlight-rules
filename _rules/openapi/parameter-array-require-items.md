---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-array-require-items
title: Parameter Array Require Items
severity: info
given: $.components.parameters.schema[?(@.type=='array')]
message: Parameter Schema Array MUST Have Items
description: Parameters that are of an array type should always have the items
  defined, being explicit about what is continued as part of the array.
experience:
  - data-modeling
  - consistency
spec:
  - parameters
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-array-require-items/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-array-require-items' (Parameter Array Require
  Items). Requirement: Parameters that are of an array type should always have
  the items defined, being explicit about what is continued as part of the
  array. To fix: Ensure `items` is present and non-empty at each matching
  location. This rule is evaluated at the JSONPath
  `$.components.parameters.schema[?(@.type=='array')]` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
