---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-collection-limit-param-maximum
title: Parameter Collection Limit Param Maximum
severity: info
given: $.paths[*].get.parameters[?(@ && @.in == 'query' && (@.name == 'limit' ||
  @.name == 'per_page' || @.name == 'page_size' || @.name ==
  'pageSize'))].schema
message: limit parameter should declare a maximum.
description: The limit / page-size query parameter should declare a maximum so a
  caller cannot request an unbounded page (OWASP API4 — unrestricted resource
  consumption).
experience:
  - pagination
  - reliability
  - performance
spec:
  - parameters
topic:
  - pagination
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-collection-limit-param-maximum/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-collection-limit-param-maximum' (Parameter
  Collection Limit Param Maximum). Requirement: The limit / page-size query
  parameter should declare a maximum so a caller cannot request an unbounded
  page (OWASP API4 — unrestricted resource consumption). To fix: Ensure
  `maximum` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths[*].get.parameters[?(@ && @.in == 'query' &&
  (@.name == 'limit' || @.name == 'per_page' || @.name == 'page_size' || @.name
  == 'pageSize'))].schema` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
