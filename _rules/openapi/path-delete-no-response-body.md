---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-delete-no-response-body
title: Path Delete No Response Body
severity: info
given: $.paths.*
message: "{{error}}"
description: Check if the delete response does not have any body.
experience:
  - consistency
  - data-modeling
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-delete-no-response-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-delete-no-response-body' (Path Delete No Response Body).
  Requirement: Check if the delete response does not have any body. This rule is
  evaluated at the JSONPath `$.paths.*.` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-delete-no-response-body:
    title: Path Delete No Response Body
    reference: https://spotlight-rules.com/spec/rules/openapi/path-delete-no-response-body/
    description: Check if the delete response does not have any body.
    message: "{{error}}"
    severity: info
    given: $.paths.*
    then:
      function: trimble:delete-must-not-return-body
    tags:
      - format:openapi
      - spec:paths
      - experience:consistency
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-delete-no-response-body' (Path Delete No Response
      Body). Requirement: Check if the delete response does not have any body.
      This rule is evaluated at the JSONPath `$.paths.*.` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
