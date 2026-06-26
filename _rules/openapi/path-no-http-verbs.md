---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-http-verbs
title: Path No HTTP Verbs
severity: info
given: $.paths
message: "{{property}} has HTTP verb in path: {{error}}"
description: HTTP verbs should be not be in URL paths.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-http-verbs/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-http-verbs' (Path No HTTP Verbs). Requirement: HTTP
  verbs should be not be in URL paths. This rule is evaluated at the JSONPath
  `$.paths` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
