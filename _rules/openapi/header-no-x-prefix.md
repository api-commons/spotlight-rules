---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: header-no-x-prefix
title: Header No X Prefix
severity: info
given: $..parameters[?(@.in == 'header')].name
message: HTTP header '{{value}}' SHOULD NOT start with 'X-' in {{path}}
description: "'HTTP' headers SHOULD NOT start with 'X-' RFC6648."
experience:
  - naming
  - consistency
spec:
  - parameters
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/header-no-x-prefix/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'header-no-x-prefix' (Header No X Prefix). Requirement: 'HTTP'
  headers SHOULD NOT start with 'X-' RFC6648. To fix: Ensure the targeted value
  matches the regular expression `/^([^x]|.[^-])|RateLimit-/i`; rewrite any
  value that does not. This rule is evaluated at the JSONPath
  `$..parameters[?(@.in == 'header')].name` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
