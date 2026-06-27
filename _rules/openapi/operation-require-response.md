---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-response
title: Operation Require Response
severity: info
given: $.paths.*
message: "{{error}}"
description: Check if every request has their respective responses.
experience:
  - documentation
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-response/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-require-response' (Operation Require Response).
  Requirement: Check if every request has their respective responses. This rule
  is evaluated at the JSONPath `$.paths.*` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-require-response:
    title: Operation Require Response
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-response/
    description: Check if every request has their respective responses.
    message: "{{error}}"
    severity: info
    given: $.paths.*
    then:
      function: trimble:check-for-response-in-every-request
    tags:
      - format:openapi
      - spec:paths
      - experience:documentation
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-require-response' (Operation Require Response).
      Requirement: Check if every request has their respective responses. This
      rule is evaluated at the JSONPath `$.paths.*` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
