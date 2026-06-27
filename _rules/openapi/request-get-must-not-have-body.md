---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-get-must-not-have-body
title: Request Get Must Not Have Body
severity: info
given: $.paths[*][get].requestBody
message: A `GET` request MUST NOT accept a request body.
description: A `GET` request MUST NOT accept a request body.
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - request-body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-get-must-not-have-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-get-must-not-have-body' (Request Get Must Not Have
  Body). Requirement: A `GET` request MUST NOT accept a request body. To fix:
  Remove the targeted value from each matching location. This rule is evaluated
  at the JSONPath `$.paths[*][get].requestBody` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  request-get-must-not-have-body:
    title: Request Get Must Not Have Body
    reference: https://spotlight-rules.com/spec/rules/openapi/request-get-must-not-have-body/
    description: A `GET` request MUST NOT accept a request body.
    message: A `GET` request MUST NOT accept a request body.
    severity: info
    given: $.paths[*][get].requestBody
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
      governance rule 'request-get-must-not-have-body' (Request Get Must Not Have
      Body). Requirement: A `GET` request MUST NOT accept a request body. To fix:
      Remove the targeted value from each matching location. This rule is
      evaluated at the JSONPath `$.paths[*][get].requestBody` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
