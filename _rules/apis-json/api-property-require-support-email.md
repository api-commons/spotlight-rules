---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-support-email
title: API Property Require Support Email
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Support Email
description: This property ensures that an API has email support, providing a
  valid email address that can be used to get API support.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-support-email/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-support-email' (API Property Require
  Support Email). Requirement: This property ensures that an API has email
  support, providing a valid email address that can be used to get API support.
  To fix: Ensure `type` does NOT match the regular expression
  `\\b(support-email|SupportEmail)\\b`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
