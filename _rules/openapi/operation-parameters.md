---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-parameters
title: Operation Parameters
severity: info
given: "#OperationObject.parameters"
message: "{{error}}"
description: Operation parameters are unique and non-repeating.
experience:
  - consistency
  - reliability
spec:
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-parameters/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-parameters' (Operation Parameters). Requirement:
  Operation parameters are unique and non-repeating. This rule is evaluated at
  the JSONPath `#OperationObject.parameters` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  operation-parameters:
    title: Operation Parameters
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-parameters/
    description: Operation parameters are unique and non-repeating.
    message: "{{error}}"
    severity: info
    given: "#OperationObject.parameters"
    then:
      function: oasOpParams
    tags:
      - format:openapi
      - spec:parameters
      - experience:consistency
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-parameters' (Operation Parameters). Requirement:
      Operation parameters are unique and non-repeating. This rule is evaluated at
      the JSONPath `#OperationObject.parameters` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
