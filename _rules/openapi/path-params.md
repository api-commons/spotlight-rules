---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-params
title: Path Params
severity: info
given: $.paths
message: "{{error}}"
description: Path parameters must be defined and valid.
experience:
  - reliability
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-params/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-params' (Path Params). Requirement: Path parameters must
  be defined and valid. This rule is evaluated at the JSONPath `$.paths` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: true
---
