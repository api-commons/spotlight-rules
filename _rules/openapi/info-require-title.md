---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-title
title: Info Require Title
severity: info
given: $.info
message: Info MUST Have Title
description: Having a intuitive and helpful title for your API using the OpenAPI
  info title is the first impression you will make on the consumers of your API.
experience:
  - documentation
  - discoverability
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-require-title/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-require-title' (Info Require Title). Requirement: Having
  a intuitive and helpful title for your API using the OpenAPI info title is the
  first impression you will make on the consumers of your API. To fix: Ensure
  `title` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.info` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
