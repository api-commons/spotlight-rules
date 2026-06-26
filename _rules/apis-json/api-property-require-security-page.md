---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-security-page
title: API Property Require Security Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Security Path
description: This property ensures there is a URL to the security page,
  providing details about how security is handled for an API.
experience:
  - security
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-security-page/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-security-page' (API Property Require
  Security Page). Requirement: This property ensures there is a URL to the
  security page, providing details about how security is handled for an API. To
  fix: Ensure `type` does NOT match the regular expression
  `\\b(Security|SecurityTesting)\\b`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
