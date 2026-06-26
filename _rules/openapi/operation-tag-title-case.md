---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-tag-title-case
title: Operation Tag Title Case
severity: info
given: $.paths.*[get,post,patch,put,delete].tags.*
message: Operation Tag Names MUST Have First Letter in Each Word Capitalized
description: Having the first letter of each word applied as a tag to API
  operations helps keep a consistent layout when published via search,
  documentation, and other ways APIs are made available.
experience:
  - naming
  - consistency
spec:
  - paths
  - operations
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-tag-title-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-tag-title-case' (Operation Tag Title Case).
  Requirement: Having the first letter of each word applied as a tag to API
  operations helps keep a consistent layout when published via search,
  documentation, and other ways APIs are made available. To fix: Ensure the
  targeted value matches the regular expression `[A-Z]\\w*`; rewrite any value
  that does not. This rule is evaluated at the JSONPath
  `$.paths.*[get,post,patch,put,delete].tags.*` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
