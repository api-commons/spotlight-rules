---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-interface-license
title: Schema Include Interface License
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Interface License
description: This property ensures that an API Commons interface license exists
  for an API, providing a machine-readable reference for an API, as well as
  data, backend, and front-end code.
experience:
  - governance
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-interface-license/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-interface-license' (Schema Include Interface
  License). Requirement: This property ensures that an API Commons interface
  license exists for an API, providing a machine-readable reference for an API,
  as well as data, backend, and front-end code. To fix: Ensure `type` does NOT
  match the regular expression
  `\\b(api-license|License|license|InterfaceLicense)\\b`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath `$.apis.*.properties.*
  | $.common.*` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
