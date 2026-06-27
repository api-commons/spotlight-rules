---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-operation-operationId-uniqueness
title: Asyncapi Operation OperationId Uniqueness
severity: info
given: $
message: '"operationId" must be unique across all the operations.'
description: '"operationId" must be unique across all the operations.'
experience:
  - consistency
  - naming
  - reliability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-operation-operationId-uniqueness/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-operation-operationId-uniqueness' (Asyncapi
  Operation OperationId Uniqueness). Requirement: \"operationId\" must be unique
  across all the operations. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-operation-operationId-uniqueness:
    title: Asyncapi Operation OperationId Uniqueness
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-operation-operationId-uniqueness/
    description: '"operationId" must be unique across all the operations.'
    message: '"operationId" must be unique across all the operations.'
    severity: info
    given: $
    then:
      function: asyncApi2OperationIdUniqueness
    tags:
      - format:asyncapi
      - spec:document
      - experience:consistency
      - experience:naming
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-operation-operationId-uniqueness' (Asyncapi
      Operation OperationId Uniqueness). Requirement: \"operationId\" must be
      unique across all the operations. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid AsyncAPI. Return only the complete
      corrected document, with no commentary."
---
