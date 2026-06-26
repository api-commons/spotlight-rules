---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-terms-of-service
title: API Property Require Terms Of Service
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Terms of Service
description: This property ensures that an API has a reference to a terms of
  service, covering the legal side of using an API.
experience:
  - governance
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-terms-of-service/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-terms-of-service' (API Property Require
  Terms Of Service). Requirement: This property ensures that an API has a
  reference to a terms of service, covering the legal side of using an API. To
  fix: Ensure `type` does NOT match the regular expression
  `\\b(api-terms-of-service|terms-of-service|Terms of
  Service|TOS|TermsOfService)\\b`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
