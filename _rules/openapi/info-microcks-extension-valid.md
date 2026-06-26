---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-microcks-extension-valid
title: Info Microcks Extension Valid
severity: info
given: $.info.x-microcks
message: x-microcks extension must be valid
description: x-microcks extension must be valid.
experience:
  - governance
  - consistency
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-microcks-extension-valid/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-microcks-extension-valid' (Info Microcks Extension
  Valid). Requirement: x-microcks extension must be valid. To fix: Adjust the
  targeted value so it conforms to the schema this rule requires. This rule is
  evaluated at the JSONPath `$.info.x-microcks` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
