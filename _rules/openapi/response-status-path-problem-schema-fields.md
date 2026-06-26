---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-status-path-problem-schema-fields
title: Response Status Path Problem Schema Fields
severity: info
given: $.paths.'/status'.get.responses.200.content.[[schema]]
message: "{{error}} {{path}}"
description: '"/status" schema is not a Problem object.'
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
  - media-types
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-status-path-problem-schema-fields/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-status-path-problem-schema-fields' (Response Status
  Path Problem Schema Fields). Requirement: \"/status\" schema is not a Problem
  object. To fix: Ensure `properties.status` is present and non-empty at each
  matching location. Also: Ensure `properties.title` is present and non-empty at
  each matching location. Also: Ensure `properties.detail` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.paths.'/status'.get.responses.200.content.[[schema]]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
