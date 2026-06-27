---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-delete-must-not-have-body
title: Request Delete Must Not Have Body
severity: info
given: $.paths[*].delete.requestBody
message: DELETE operations must not accept a request body.
description: DELETE operations must not accept a request body.
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - request-body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-delete-must-not-have-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-delete-must-not-have-body' (Request Delete Must Not
  Have Body). Requirement: DELETE operations must not accept a request body. To
  fix: Remove the targeted value from each matching location. This rule is
  evaluated at the JSONPath `$.paths[*].delete.requestBody` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  request-delete-must-not-have-body:
    title: Request Delete Must Not Have Body
    reference: https://spotlight-rules.com/spec/rules/openapi/request-delete-must-not-have-body/
    description: DELETE operations must not accept a request body.
    message: DELETE operations must not accept a request body.
    severity: info
    given: $.paths[*].delete.requestBody
    then:
      function: undefined
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:request-body
      - experience:consistency
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'request-delete-must-not-have-body' (Request Delete Must Not
      Have Body). Requirement: DELETE operations must not accept a request body.
      To fix: Remove the targeted value from each matching location. This rule is
      evaluated at the JSONPath `$.paths[*].delete.requestBody` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
