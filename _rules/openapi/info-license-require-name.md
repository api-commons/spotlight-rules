---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-license-require-name
title: Info License Require Name
severity: info
given: $.info.license
message: Info License MUST Have Name
description: The license object should include a name property identifying the
  license type, such as Apache 2.0, MIT, or a proprietary license.
experience:
  - governance
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-license-require-name/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-license-require-name' (Info License Require Name).
  Requirement: The license object should include a name property identifying the
  license type, such as Apache 2.0, MIT, or a proprietary license. To fix:
  Ensure `name` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.info.license` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
