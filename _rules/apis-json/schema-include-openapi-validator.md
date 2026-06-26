---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-openapi-validator
title: Schema Include Openapi Validator
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has OpenAPI (Technical) Validator
description: This property ensures that there is a link to the validator for the
  OpenAPI technical contract, allowing anyone to see the details of governance
  being applied.
experience:
  - governance
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-openapi-validator/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-openapi-validator' (Schema Include Openapi
  Validator). Requirement: This property ensures that there is a link to the
  validator for the OpenAPI technical contract, allowing anyone to see the
  details of governance being applied. To fix: Ensure `type` does NOT match the
  regular expression `\\b(APIValidation)\\b`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
  $.common.*` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
