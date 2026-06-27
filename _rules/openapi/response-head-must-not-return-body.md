---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-head-must-not-return-body
title: Response Head Must Not Return Body
severity: info
given: $.paths.*.head.responses[200].content
message: HEAD operations should not return a response body for success.
description: HEAD operations should not return a response body for success.
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-head-must-not-return-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-head-must-not-return-body' (Response Head Must Not
  Return Body). Requirement: HEAD operations should not return a response body
  for success. To fix: Ensure the targeted value is absent or empty (falsy) at
  each matching location. This rule is evaluated at the JSONPath
  `$.paths.*.head.responses[200].content` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-head-must-not-return-body:
    title: Response Head Must Not Return Body
    reference: https://spotlight-rules.com/spec/rules/openapi/response-head-must-not-return-body/
    description: HEAD operations should not return a response body for success.
    message: HEAD operations should not return a response body for success.
    severity: info
    given: $.paths.*.head.responses[200].content
    then:
      function: falsy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - spec:media-types
      - experience:consistency
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-head-must-not-return-body' (Response Head Must Not
      Return Body). Requirement: HEAD operations should not return a response body
      for success. To fix: Ensure the targeted value is absent or empty (falsy) at
      each matching location. This rule is evaluated at the JSONPath
      `$.paths.*.head.responses[200].content` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
