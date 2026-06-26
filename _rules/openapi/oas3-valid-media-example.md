---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-valid-media-example
title: OAS3 Valid Media Example
severity: info
given: $..content..[?(@ && @.schema && (@.example !== void 0 || @.examples))] |
  $..headers..[?(@ && @.schema && (@.example !== void 0 || @.examples))] |
  $..parameters..[?(@ && @.schema && (@.example !== void 0 || @.examples))]
message: "{{error}}"
description: Examples must be valid against their defined schema.
experience:
  - data-modeling
  - documentation
  - reliability
spec:
  - parameters
  - headers
  - media-types
  - schemas
  - examples
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-valid-media-example/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-valid-media-example' (OAS3 Valid Media Example).
  Requirement: Examples must be valid against their defined schema. This rule is
  evaluated at the JSONPath `$..content..[?(@ && @.schema && (@.example !== void
  0 || @.examples))] | $..headers..[?(@ && @.schema && (@.example !== void 0 ||
  @.examples))] | $..parameters..[?(@ && @.schema && (@.example !== void 0 ||
  @.examples))]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
---
