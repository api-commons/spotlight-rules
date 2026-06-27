---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-define-401
title: Response Define 401
severity: info
given: $.paths..responses
message: "{{description}}. Missing {{property}}"
description: Responses should contain common response - 401 (unauthorized).
experience:
  - error-handling
  - documentation
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-define-401/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-define-401' (Response Define 401). Requirement:
  Responses should contain common response - 401 (unauthorized). To fix: Ensure
  `401` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths..responses` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-define-401:
    title: Response Define 401
    reference: https://spotlight-rules.com/spec/rules/openapi/response-define-401/
    description: Responses should contain common response - 401 (unauthorized).
    message: "{{description}}. Missing {{property}}"
    severity: info
    given: $.paths..responses
    then:
      field: "401"
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - experience:error-handling
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-define-401' (Response Define 401). Requirement:
      Responses should contain common response - 401 (unauthorized). To fix:
      Ensure `401` is present and non-empty at each matching location. This rule
      is evaluated at the JSONPath `$.paths..responses` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
