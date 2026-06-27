---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-prefer-400-over-422
title: Response Prefer 400 Over 422
severity: info
given: $.paths.*.*.responses.422
message: Prefer 400 over 422 as response code
description: MUST use standard HTTP status codes [150a].
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-prefer-400-over-422/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-prefer-400-over-422' (Response Prefer 400 Over 422).
  Requirement: MUST use standard HTTP status codes [150a]. To fix: Ensure `422`
  is defined at each matching location. This rule is evaluated at the JSONPath
  `$.paths.*.*.responses.422` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  response-prefer-400-over-422:
    title: Response Prefer 400 Over 422
    reference: https://spotlight-rules.com/spec/rules/openapi/response-prefer-400-over-422/
    description: MUST use standard HTTP status codes [150a].
    message: Prefer 400 over 422 as response code
    severity: info
    given: $.paths.*.*.responses.422
    then:
      field: "422"
      function: defined
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - experience:error-handling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-prefer-400-over-422' (Response Prefer 400 Over
      422). Requirement: MUST use standard HTTP status codes [150a]. To fix:
      Ensure `422` is defined at each matching location. This rule is evaluated at
      the JSONPath `$.paths.*.*.responses.422` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
