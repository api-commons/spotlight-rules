---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-params-declared-in-block
title: Path Params Declared In Block
severity: info
given: $.paths.
message: "{{error}}"
description: Check for the path parameter in the parameter block.
experience:
  - consistency
  - documentation
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-params-declared-in-block/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-params-declared-in-block' (Path Params Declared In
  Block). Requirement: Check for the path parameter in the parameter block. This
  rule is evaluated at the JSONPath `$.paths.` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
