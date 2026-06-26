---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-performance-testing
title: Schema Include Performance Testing
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has API Performance
description: This property ensures that an API has performance testing in place,
  providing a URL to the performance testing, dashboard, or other resource.
experience:
  - reliability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-performance-testing/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-performance-testing' (Schema Include
  Performance Testing). Requirement: This property ensures that an API has
  performance testing in place, providing a URL to the performance testing,
  dashboard, or other resource. To fix: Ensure `type` does NOT match the regular
  expression `\\b(Performance|PerformanceTesting)\\b`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath `$.apis.*.properties.*
  | $.common.*` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
