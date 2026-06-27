---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-id
title: Operation Require ID
severity: info
given: $.paths.*[get,post,put,patch,delete]
message: Operation MUST Have operationId
description: Every operation should have an operationId for SDK generation and
  documentation linking. Analysis shows operationId styles across 8878
  operations with camelCase dominant at 92%.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-id/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-require-id' (Operation Require ID). Requirement:
  Every operation should have an operationId for SDK generation and
  documentation linking. Analysis shows operationId styles across 8878
  operations with camelCase dominant at 92%. To fix: Ensure `operationId` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.paths.*[get,post,put,patch,delete]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-require-id:
    title: Operation Require ID
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-id/
    description: Every operation should have an operationId for SDK generation and
      documentation linking. Analysis shows operationId styles across 8878
      operations with camelCase dominant at 92%.
    message: Operation MUST Have operationId
    severity: info
    given: $.paths.*[get,post,put,patch,delete]
    then:
      field: operationId
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - experience:consistency
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-require-id' (Operation Require ID). Requirement:
      Every operation should have an operationId for SDK generation and
      documentation linking. Analysis shows operationId styles across 8878
      operations with camelCase dominant at 92%. To fix: Ensure `operationId` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.paths.*[get,post,put,patch,delete]` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
