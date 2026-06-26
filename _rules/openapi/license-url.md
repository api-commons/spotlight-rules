---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: license-url
title: License URL
severity: info
given: $
message: License object must include "url".
description: License object must include "url".
experience:
  - documentation
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/license-url/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'license-url' (License URL). Requirement: License object must
  include \"url\". To fix: Ensure `info.license.url` is present and non-empty at
  each matching location. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
---
