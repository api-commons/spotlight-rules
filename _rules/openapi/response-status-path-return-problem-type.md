---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-status-path-return-problem-type
title: Response Status Path Return Problem Type
severity: info
given: $.paths.'/status'.get.responses.200.content.*~
message: "{{error}}"
description: '"/status" must return a Problem object.'
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-status-path-return-problem-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-status-path-return-problem-type' (Response Status
  Path Return Problem Type). Requirement: \"/status\" must return a Problem
  object. To fix: Set the targeted value to one of the allowed values:
  application/problem+xml, application/problem+json. This rule is evaluated at
  the JSONPath `$.paths.'/status'.get.responses.200.content.*~` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-status-path-return-problem-type:
    title: Response Status Path Return Problem Type
    reference: https://spotlight-rules.com/spec/rules/openapi/response-status-path-return-problem-type/
    description: '"/status" must return a Problem object.'
    message: "{{error}}"
    severity: info
    given: $.paths.'/status'.get.responses.200.content.*~
    then:
      function: enumeration
      functionOptions:
        values:
          - application/problem+xml
          - application/problem+json
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - spec:media-types
      - experience:error-handling
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-status-path-return-problem-type' (Response Status
      Path Return Problem Type). Requirement: \"/status\" must return a Problem
      object. To fix: Set the targeted value to one of the allowed values:
      application/problem+xml, application/problem+json. This rule is evaluated at
      the JSONPath `$.paths.'/status'.get.responses.200.content.*~` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
