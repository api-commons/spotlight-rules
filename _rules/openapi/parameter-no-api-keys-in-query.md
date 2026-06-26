---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-no-api-keys-in-query
title: Parameter No API Keys In Query
severity: info
given: $.paths.*.*.parameters[?(@.in=='query')].name
message: Query parameters MUST not contain sensitive information, like API
  tokens or keys.
description: Query parameters MUST not contain sensitive information, like API
  tokens or keys.
experience:
  - security
  - governance
spec:
  - paths
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-no-api-keys-in-query/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-no-api-keys-in-query' (Parameter No API Keys In
  Query). Requirement: Query parameters MUST not contain sensitive information,
  like API tokens or keys. To fix: Ensure the targeted value does NOT match the
  regular expression `apiKey|token`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath
  `$.paths.*.*.parameters[?(@.in=='query')].name` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
