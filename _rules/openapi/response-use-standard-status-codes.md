---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-use-standard-status-codes
title: Response Use Standard Status Codes
severity: info
given: $.paths.*.*.responses.*~
message: "{{property}} is not a standardized response code"
description: MUST use standard HTTP status codes [150a].
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-use-standard-status-codes/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-use-standard-status-codes' (Response Use Standard
  Status Codes). Requirement: MUST use standard HTTP status codes [150a]. To
  fix: Set the targeted value to one of the allowed values: 100, 101, 200, 201,
  202, 203, 204, 205, 206, 207, 300, 301, 302, 303, 304, 305, 307, 400, 401,
  402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416,
  417, 422, 423, 426, 428, 429, 431, 500, 501, 502, 503, 504, 505, 511, default.
  This rule is evaluated at the JSONPath `$.paths.*.*.responses.*~` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-use-standard-status-codes:
    title: Response Use Standard Status Codes
    reference: https://spotlight-rules.com/spec/rules/openapi/response-use-standard-status-codes/
    description: MUST use standard HTTP status codes [150a].
    message: "{{property}} is not a standardized response code"
    severity: info
    given: $.paths.*.*.responses.*~
    then:
      function: enumeration
      functionOptions:
        values:
          - "100"
          - "101"
          - "200"
          - "201"
          - "202"
          - "203"
          - "204"
          - "205"
          - "206"
          - "207"
          - "300"
          - "301"
          - "302"
          - "303"
          - "304"
          - "305"
          - "307"
          - "400"
          - "401"
          - "402"
          - "403"
          - "404"
          - "405"
          - "406"
          - "407"
          - "408"
          - "409"
          - "410"
          - "411"
          - "412"
          - "413"
          - "414"
          - "415"
          - "416"
          - "417"
          - "422"
          - "423"
          - "426"
          - "428"
          - "429"
          - "431"
          - "500"
          - "501"
          - "502"
          - "503"
          - "504"
          - "505"
          - "511"
          - default
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - experience:error-handling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-use-standard-status-codes' (Response Use Standard
      Status Codes). Requirement: MUST use standard HTTP status codes [150a]. To
      fix: Set the targeted value to one of the allowed values: 100, 101, 200,
      201, 202, 203, 204, 205, 206, 207, 300, 301, 302, 303, 304, 305, 307, 400,
      401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
      416, 417, 422, 423, 426, 428, 429, 431, 500, 501, 502, 503, 504, 505, 511,
      default. This rule is evaluated at the JSONPath `$.paths.*.*.responses.*~` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
