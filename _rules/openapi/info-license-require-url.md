---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-license-require-url
title: Info License Require URL
severity: info
given: $.info.license
message: Info License MUST Have URL
description: The license object should include a URL linking to the full license
  text so API consumers can review the terms.
experience:
  - governance
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-license-require-url/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-license-require-url' (Info License Require URL).
  Requirement: The license object should include a URL linking to the full
  license text so API consumers can review the terms. To fix: Ensure `url` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.info.license` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
