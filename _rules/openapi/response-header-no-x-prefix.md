---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-header-no-x-prefix
title: Response Header No X Prefix
severity: info
given: $.[responses][*].headers.*~
message: HTTP response header SHOULD NOT start with 'X-' in {{path}}
description: "'HTTP' headers SHOULD NOT start with 'X-' RFC6648."
experience:
  - naming
  - consistency
spec:
  - responses
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-header-no-x-prefix/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-header-no-x-prefix' (Response Header No X Prefix).
  Requirement: 'HTTP' headers SHOULD NOT start with 'X-' RFC6648. To fix: Ensure
  the targeted value matches the regular expression
  `/^([^x]|.[^-])|RateLimit-/i`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.[responses][*].headers.*~` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
