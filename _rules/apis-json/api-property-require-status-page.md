---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-status-page
title: API Property Require Status Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Status Page
description: This property ensures that there is a status page available for
  each API, providing the uptime status for any given moment, as well as
  historical data.
experience:
  - reliability
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-status-page/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-status-page' (API Property Require
  Status Page). Requirement: This property ensures that there is a status page
  available for each API, providing the uptime status for any given moment, as
  well as historical data. To fix: Ensure `type` does NOT match the regular
  expression `\\b(x-status|status|Status|StatusPage)\\b`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath `$.apis.*.properties.*
  | $.common.*` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
