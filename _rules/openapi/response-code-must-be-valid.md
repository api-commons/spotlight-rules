---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-code-must-be-valid
title: Response Code Must Be Valid
severity: info
given: $..responses
message: "{{error}}"
description: All APIs should return a valid http response code.
experience:
  - error-handling
  - consistency
spec:
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-code-must-be-valid/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-code-must-be-valid' (Response Code Must Be Valid).
  Requirement: All APIs should return a valid http response code. This rule is
  evaluated at the JSONPath `$..responses` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-code-must-be-valid:
    title: Response Code Must Be Valid
    reference: https://spotlight-rules.com/spec/rules/openapi/response-code-must-be-valid/
    description: All APIs should return a valid http response code.
    message: "{{error}}"
    severity: info
    given: $..responses
    then:
      field: "@key"
      function: trimble:valid-http-response
    tags:
      - format:openapi
      - spec:responses
      - experience:error-handling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-code-must-be-valid' (Response Code Must Be Valid).
      Requirement: All APIs should return a valid http response code. This rule is
      evaluated at the JSONPath `$..responses` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
