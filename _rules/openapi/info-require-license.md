---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-license
title: Info Require License
severity: info
given: $.info
message: Info MUST Have License
description: Having a license defined in the info object clarifies the terms
  under which the API can be used. Analysis shows only 44.4% of APIs define a
  license, but it is essential for API governance and compliance.
experience:
  - governance
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-require-license/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-require-license' (Info Require License). Requirement:
  Having a license defined in the info object clarifies the terms under which
  the API can be used. Analysis shows only 44.4% of APIs define a license, but
  it is essential for API governance and compliance. To fix: Ensure `license` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.info` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
