---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-cors-support-options-preflight
title: Path CORS Support Options Preflight
severity: info
given: $.paths[*]
message: Path should expose an OPTIONS operation for CORS preflight.
description: Resources should expose an OPTIONS operation so browsers can
  complete a CORS preflight. (Many teams handle preflight at the gateway and
  treat CORS as operational — enable this only if you document CORS in the
  spec.).
experience:
  - usability
spec:
  - paths
topic:
  - cors
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-cors-support-options-preflight/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-cors-support-options-preflight' (Path CORS Support
  Options Preflight). Requirement: Resources should expose an OPTIONS operation
  so browsers can complete a CORS preflight. (Many teams handle preflight at the
  gateway and treat CORS as operational — enable this only if you document CORS
  in the spec.). To fix: Ensure `options` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath `$.paths[*]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
