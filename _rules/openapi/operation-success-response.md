---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-success-response
title: Operation Success Response
severity: info
given: "#OperationObject"
message: Operation must have at least one "2xx" or "3xx" response.
description: Operation must have at least one "2xx" or "3xx" response.
experience:
  - error-handling
  - reliability
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-success-response/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-success-response' (Operation Success Response).
  Requirement: Operation must have at least one \"2xx\" or \"3xx\" response.
  This rule is evaluated at the JSONPath `#OperationObject` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  operation-success-response:
    title: Operation Success Response
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-success-response/
    description: Operation must have at least one "2xx" or "3xx" response.
    message: Operation must have at least one "2xx" or "3xx" response.
    severity: info
    given: "#OperationObject"
    then:
      field: responses
      function: oasOpSuccessResponse
    tags:
      - format:openapi
      - spec:document
      - experience:error-handling
      - experience:reliability
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-success-response' (Operation Success Response).
      Requirement: Operation must have at least one \"2xx\" or \"3xx\" response.
      This rule is evaluated at the JSONPath `#OperationObject` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
