---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-include-about-page
title: API Include About Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has About
description: This property ensures provides a reference to an about page, either
  for the company, organization, or government agency behind an API, or
  specifically about the domain, team, and the APIs they produce.
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-include-about-page/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-include-about-page' (API Include About Page).
  Requirement: This property ensures provides a reference to an about page,
  either for the company, organization, or government agency behind an API, or
  specifically about the domain, team, and the APIs they produce. To fix: Ensure
  `type` does NOT match the regular expression `\\b(about|About)\\b`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
