---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-privacy-policy
title: Schema Include Privacy Policy
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Privacy Policy
description: This property provides a link to the privacy policy for an API,
  providing the legal details of how privacy is approached for each API.
experience:
  - governance
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-privacy-policy/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-privacy-policy' (Schema Include Privacy
  Policy). Requirement: This property provides a link to the privacy policy for
  an API, providing the legal details of how privacy is approached for each API.
  To fix: Ensure `type` does NOT match the regular expression
  `\\b(api-privacy-policy|privacy-policy|Privacy|Privacy
  Policy|PrivacyPolicy)\\b`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid APIs.json.
  Return only the complete corrected document, with no commentary."
builtin: false
---
