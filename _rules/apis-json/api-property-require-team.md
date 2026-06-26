---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-team
title: API Property Require Team
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Team Defined
description: This property ensures that there is a reference to the team behind
  an API, providing a reference to business and engineering stakeholders.
experience:
  - governance
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-team/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-team' (API Property Require Team).
  Requirement: This property ensures that there is a reference to the team
  behind an API, providing a reference to business and engineering stakeholders.
  To fix: Ensure `type` does NOT match the regular expression
  `\\b(team|teams|Team|Teams)\\b`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
