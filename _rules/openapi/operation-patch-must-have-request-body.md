---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-patch-must-have-request-body
title: Operation Patch Must Have Request Body
severity: info
given: $.paths[*].patch
message: PATCH operations must have a request body.
description: PATCH operations must have a request body.
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-patch-must-have-request-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-patch-must-have-request-body' (Operation Patch Must
  Have Request Body). Requirement: PATCH operations must have a request body. To
  fix: Adjust `requestBody` so it conforms to the schema this rule requires.
  This rule is evaluated at the JSONPath `$.paths[*].patch` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-patch-must-have-request-body:
    title: Operation Patch Must Have Request Body
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-patch-must-have-request-body/
    description: PATCH operations must have a request body.
    message: PATCH operations must have a request body.
    severity: info
    given: $.paths[*].patch
    then:
      field: requestBody
      function: schema
      functionOptions:
        schema:
          type: object
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - experience:consistency
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-patch-must-have-request-body' (Operation Patch
      Must Have Request Body). Requirement: PATCH operations must have a request
      body. To fix: Adjust `requestBody` so it conforms to the schema this rule
      requires. This rule is evaluated at the JSONPath `$.paths[*].patch` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
