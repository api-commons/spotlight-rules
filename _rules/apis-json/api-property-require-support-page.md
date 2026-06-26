---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-support-page
title: API Property Require Support Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Support Page
description: This property ensures that there is a support page available for an
  API, providing direct and in-direct support opportunities for each API or for
  entire API platform.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-support-page/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-support-page' (API Property Require
  Support Page). Requirement: This property ensures that there is a support page
  available for an API, providing direct and in-direct support opportunities for
  each API or for entire API platform. To fix: Ensure `type` does NOT match the
  regular expression `\\b(support|Support)\\b`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
  $.common.*` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
