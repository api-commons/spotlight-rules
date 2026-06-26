---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-not-include-query
title: Path Not Include Query
severity: info
given: $.paths
message: Path must not include query string.
description: Path must not include query string.
experience:
  - consistency
  - naming
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-not-include-query/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-not-include-query' (Path Not Include Query).
  Requirement: Path must not include query string. To fix: Ensure `@key` does
  NOT match the regular expression `\\?`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.paths` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
---
