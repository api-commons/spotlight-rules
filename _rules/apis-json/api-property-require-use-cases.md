---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-use-cases
title: API Property Require Use Cases
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Use Cases
description: This property ensures there is a reference to the use cases for an
  API, helping align an API with the who, what, how, and why of putting an API
  to work.
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-use-cases/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-use-cases' (API Property Require Use
  Cases). Requirement: This property ensures there is a reference to the use
  cases for an API, helping align an API with the who, what, how, and why of
  putting an API to work. To fix: Ensure `type` does NOT match the regular
  expression `\\b(UseCases)\\b`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
