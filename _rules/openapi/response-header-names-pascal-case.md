---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-header-names-pascal-case
title: Response Header Names Pascal Case
severity: info
given: $.[responses][*].headers.*~
message: "Header {{error}}: {{path}}"
description: Headers should be pascal-case. See Italian recommendation RAC_REST_NAME_003.
experience:
  - naming
  - consistency
spec:
  - responses
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-header-names-pascal-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-header-names-pascal-case' (Response Header Names
  Pascal Case). Requirement: Headers should be pascal-case. See Italian
  recommendation RAC_REST_NAME_003. To fix: Rename the targeted key or value to
  PascalCase (e.g. `UserName`) at each matching location, updating every
  reference to it. This rule is evaluated at the JSONPath
  `$.[responses][*].headers.*~` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
