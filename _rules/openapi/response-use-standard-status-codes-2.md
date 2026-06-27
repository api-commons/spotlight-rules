---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-use-standard-status-codes-2
title: Response Use Standard Status Codes 2
severity: info
given: $.paths...responses.*~
message: An API MUST return HTTP response codes in conformance with RFC-2616 and
  common usage.
description: An API MUST return HTTP response codes in conformance with RFC-2616
  and common usage.
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-use-standard-status-codes-2/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-use-standard-status-codes-2' (Response Use Standard
  Status Codes 2). Requirement: An API MUST return HTTP response codes in
  conformance with RFC-2616 and common usage. To fix: Set the targeted value to
  one of the allowed values: 200, 201, 202, 204, 400, 401, 403, 404, 405, 406,
  409, 412, 415, 428, 429, 500. This rule is evaluated at the JSONPath
  `$.paths...responses.*~` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  response-use-standard-status-codes-2:
    title: Response Use Standard Status Codes 2
    reference: https://spotlight-rules.com/spec/rules/openapi/response-use-standard-status-codes-2/
    description: An API MUST return HTTP response codes in conformance with RFC-2616
      and common usage.
    message: An API MUST return HTTP response codes in conformance with RFC-2616 and
      common usage.
    severity: info
    given: $.paths...responses.*~
    then:
      function: enumeration
      functionOptions:
        values:
          - "200"
          - "201"
          - "202"
          - "204"
          - "400"
          - "401"
          - "403"
          - "404"
          - "405"
          - "406"
          - "409"
          - "412"
          - "415"
          - "428"
          - "429"
          - "500"
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - experience:error-handling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-use-standard-status-codes-2' (Response Use
      Standard Status Codes 2). Requirement: An API MUST return HTTP response
      codes in conformance with RFC-2616 and common usage. To fix: Set the
      targeted value to one of the allowed values: 200, 201, 202, 204, 400, 401,
      403, 404, 405, 406, 409, 412, 415, 428, 429, 500. This rule is evaluated at
      the JSONPath `$.paths...responses.*~` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
