---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-operation-operationId
title: Asyncapi Operation OperationId
severity: info
given: $.channels[*][publish,subscribe]
message: Operation must have "operationId".
description: Operation must have "operationId".
experience:
  - consistency
  - usability
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-operation-operationId/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-operation-operationId' (Asyncapi Operation
  OperationId). Requirement: Operation must have \"operationId\". To fix: Ensure
  `operationId` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.channels[*][publish,subscribe]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid AsyncAPI.
  Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-operation-operationId:
    title: Asyncapi Operation OperationId
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-operation-operationId/
    description: Operation must have "operationId".
    message: Operation must have "operationId".
    severity: info
    given: $.channels[*][publish,subscribe]
    then:
      field: operationId
      function: truthy
    tags:
      - format:asyncapi
      - spec:channels
      - experience:consistency
      - experience:usability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-operation-operationId' (Asyncapi Operation
      OperationId). Requirement: Operation must have \"operationId\". To fix:
      Ensure `operationId` is present and non-empty at each matching location.
      This rule is evaluated at the JSONPath `$.channels[*][publish,subscribe]` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid AsyncAPI. Return only the complete corrected document, with
      no commentary."
---
