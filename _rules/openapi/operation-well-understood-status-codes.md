---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-well-understood-status-codes
title: Operation Well Understood Status Codes
severity: info
given: $.paths.*
message: "{{error}}"
description: MUST use standard HTTP status codes [150].
experience:
  - error-handling
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-well-understood-status-codes/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-well-understood-status-codes' (Operation Well
  Understood Status Codes). Requirement: MUST use standard HTTP status codes
  [150]. This rule is evaluated at the JSONPath `$.paths.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-well-understood-status-codes:
    title: Operation Well Understood Status Codes
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-well-understood-status-codes/
    description: MUST use standard HTTP status codes [150].
    message: "{{error}}"
    severity: info
    given: $.paths.*
    then:
      function: baloise:assert-http-codes-for-operation
      functionOptions:
        wellUnderstood:
          "200":
            - ALL
          "201":
            - POST
            - PUT
          "202":
            - POST
            - PUT
            - DELETE
            - PATCH
          "204":
            - PUT
            - DELETE
            - PATCH
          "207":
            - POST
          "301":
            - ALL
          "303":
            - PATCH
            - POST
            - PUT
            - DELETE
          "304":
            - GET
            - HEAD
          "400":
            - ALL
          "401":
            - ALL
          "403":
            - ALL
          "404":
            - ALL
          "405":
            - ALL
          "406":
            - ALL
          "408":
            - ALL
          "409":
            - POST
            - PUT
            - DELETE
            - PATCH
          "410":
            - ALL
          "412":
            - PUT
            - DELETE
            - PATCH
          "415":
            - POST
            - PUT
            - DELETE
            - PATCH
          "422":
            - ALL
          "423":
            - PUT
            - DELETE
            - PATCH
          "428":
            - ALL
          "429":
            - ALL
          "500":
            - ALL
          "501":
            - ALL
          "503":
            - ALL
          default:
            - ALL
    tags:
      - format:openapi
      - spec:paths
      - experience:error-handling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-well-understood-status-codes' (Operation Well
      Understood Status Codes). Requirement: MUST use standard HTTP status codes
      [150]. This rule is evaluated at the JSONPath `$.paths.*` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
