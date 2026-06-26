---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-query-allowed-characters
title: Parameter Query Allowed Characters
severity: info
given: $.paths.*.*.parameters[?(@.in=='query')].name
message: "Query parameter keys MUST include only alpha-numeric characters and
  periods: [Aa0-Zz9]'."
description: "Query parameter keys MUST include only alpha-numeric characters
  and periods: [Aa0-Zz9]'."
experience:
  - naming
  - consistency
spec:
  - paths
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-query-allowed-characters/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-query-allowed-characters' (Parameter Query Allowed
  Characters). Requirement: Query parameter keys MUST include only alpha-numeric
  characters and periods: [Aa0-Zz9]'. To fix: Ensure the targeted value matches
  the regular expression `^[A-Za-z0-9\\.]+$`; rewrite any value that does not.
  This rule is evaluated at the JSONPath
  `$.paths.*.*.parameters[?(@.in=='query')].name` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
