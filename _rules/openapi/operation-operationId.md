---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-operationId
title: Operation OperationId
severity: info
given: "#OperationObject"
message: Operation must have "operationId".
description: Operation must have "operationId".
experience:
  - consistency
  - usability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-operationId/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-operationId' (Operation OperationId). Requirement:
  Operation must have \"operationId\". To fix: Ensure `operationId` is present
  and non-empty at each matching location. This rule is evaluated at the
  JSONPath `#OperationObject` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
ruleyaml: >
  operation-operationId:
    title: Operation OperationId
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-operationId/
    description: Operation must have "operationId".
    message: Operation must have "operationId".
    severity: info
    given: "#OperationObject"
    then:
      field: operationId
      function: truthy
    tags:
      - format:openapi
      - spec:document
      - experience:consistency
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-operationId' (Operation OperationId).
      Requirement: Operation must have \"operationId\". To fix: Ensure
      `operationId` is present and non-empty at each matching location. This rule
      is evaluated at the JSONPath `#OperationObject` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
