---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-query-string
title: Path No Query String
severity: info
given: $.paths
message: Path must not include query string.
description: Path must not include query string.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-query-string/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-query-string' (Path No Query String). Requirement:
  Path must not include query string. To fix: Ensure the targeted value does NOT
  match the regular expression `\\?`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.paths` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
