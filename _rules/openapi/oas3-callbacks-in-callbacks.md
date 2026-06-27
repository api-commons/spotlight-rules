---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-callbacks-in-callbacks
title: OAS3 Callbacks In Callbacks
severity: info
given: "#OperationObject.callbacks[*][*][*].callbacks"
message: Callbacks should not be defined within a callback
description: OAS3 Callbacks In Callbacks.
experience:
  - reliability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-callbacks-in-callbacks/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-callbacks-in-callbacks' (OAS3 Callbacks In Callbacks).
  Requirement: OAS3 Callbacks In Callbacks. To fix: Remove the targeted value
  from each matching location. This rule is evaluated at the JSONPath
  `#OperationObject.callbacks[*][*][*].callbacks` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  oas3-callbacks-in-callbacks:
    title: OAS3 Callbacks In Callbacks
    reference: https://spotlight-rules.com/spec/rules/openapi/oas3-callbacks-in-callbacks/
    description: OAS3 Callbacks In Callbacks.
    message: Callbacks should not be defined within a callback
    severity: info
    given:
      - "#OperationObject.callbacks[*][*][*].callbacks"
    then:
      function: undefined
    tags:
      - format:openapi
      - spec:document
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'oas3-callbacks-in-callbacks' (OAS3 Callbacks In Callbacks).
      Requirement: OAS3 Callbacks In Callbacks. To fix: Remove the targeted value
      from each matching location. This rule is evaluated at the JSONPath
      `#OperationObject.callbacks[*][*][*].callbacks` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
