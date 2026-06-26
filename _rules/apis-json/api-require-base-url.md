---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-require-base-url
title: API Require Base URL
severity: info
given: $.apis.*
message: APIs MUST Have a Base URL
description: Each API defined within an APIs.json artifact can specify the base
  URL for the API. This URL serves as a reference point for developers during
  onboarding and when making API calls. Additionally, it helps identify the API
  and validate the domain it is associated with.
experience:
  - usability
  - discoverability
spec:
  - apis
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-require-base-url/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-require-base-url' (API Require Base URL). Requirement:
  Each API defined within an APIs.json artifact can specify the base URL for the
  API. This URL serves as a reference point for developers during onboarding and
  when making API calls. Additionally, it helps identify the API and validate
  the domain it is associated with. To fix: Ensure `baseURL` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.apis.*` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
