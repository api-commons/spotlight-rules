---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-error-require-description
title: Response Error Require Description
severity: info
given: $.paths.*.*.responses
message: "{{error}}"
description: Check if the response description is appropriate for all requests.
experience:
  - documentation
  - error-handling
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-error-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-error-require-description' (Response Error Require
  Description). Requirement: Check if the response description is appropriate
  for all requests. This rule is evaluated at the JSONPath
  `$.paths.*.*.responses.` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  response-error-require-description:
    title: Response Error Require Description
    reference: https://spotlight-rules.com/spec/rules/openapi/response-error-require-description/
    description: Check if the response description is appropriate for all requests.
    message: "{{error}}"
    severity: info
    given: $.paths.*.*.responses
    then:
      function: trimble:check-description-for-all-error-responses
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - experience:documentation
      - experience:error-handling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-error-require-description' (Response Error Require
      Description). Requirement: Check if the response description is appropriate
      for all requests. This rule is evaluated at the JSONPath
      `$.paths.*.*.responses.` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
