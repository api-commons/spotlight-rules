---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-sort-param-only-on-get
title: Parameter Sort Param Only On Get
severity: info
given: $.paths.*[?(@property!='get')].parameters.[?(@.in=='query')]
message: Non-GET endpoints MUST NOT have sorting query parameters.
description: Non-GET endpoints MUST NOT have sorting query parameters. Parameter
  names such as sort, sorting, orderBy, etc.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-sort-param-only-on-get/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-sort-param-only-on-get' (Parameter Sort Param Only
  On Get). Requirement: Non-GET endpoints MUST NOT have sorting query
  parameters. Parameter names such as sort, sorting, orderBy, etc. To fix:
  Ensure `name` does NOT match the regular expression
  `^sort|sorting|sortBy|order|ordering|orderBy$`; rename or rewrite any value
  that does. This rule is evaluated at the JSONPath
  `$.paths.*[?(@property!='get')].parameters.[?(@.in=='query')]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
