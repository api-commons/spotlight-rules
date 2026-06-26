---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-collection-require-results-array
title: Response Collection Require Results Array
severity: info
given: $.paths[?(!@property.match(/.*\/\{[^}]+\}$/))].get.responses['200'].content.application/json.schema.properties.results
message: Response bodies must have a root element called results and is an array
  of objects.
description: Response bodies must have a root element called results and is an
  array of objects.
experience:
  - pagination
  - data-modeling
  - performance
spec:
  - paths
  - operations
  - responses
  - media-types
  - schemas
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-collection-require-results-array/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-collection-require-results-array' (Response
  Collection Require Results Array). Requirement: Response bodies must have a
  root element called results and is an array of objects. To fix: Ensure `type`
  matches the regular expression `array`; rewrite any value that does not. Also:
  Ensure `items.type` matches the regular expression `object`; rewrite any value
  that does not. This rule is evaluated at the JSONPath
  `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}$/))].get.responses['200'].conte\
  nt.application/json.schema.properties.results` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
