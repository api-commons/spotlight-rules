---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-patch-define-200
title: Response Patch Define 200
severity: info
given: $.paths[*].patch.responses
message: PATCH MUST Have 200 Response
description: PATCH operations should define a 200 OK response for successful
  partial updates. Analysis shows PATCH is used in 17.7% of APIs.
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-patch-define-200/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-patch-define-200' (Response Patch Define 200).
  Requirement: PATCH operations should define a 200 OK response for successful
  partial updates. Analysis shows PATCH is used in 17.7% of APIs. To fix: Ensure
  `200` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.paths[*].patch.responses` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-patch-define-200:
    title: Response Patch Define 200
    reference: https://spotlight-rules.com/spec/rules/openapi/response-patch-define-200/
    description: PATCH operations should define a 200 OK response for successful
      partial updates. Analysis shows PATCH is used in 17.7% of APIs.
    message: PATCH MUST Have 200 Response
    severity: info
    given: $.paths[*].patch.responses
    then:
      field: "200"
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:error-handling
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-patch-define-200' (Response Patch Define 200).
      Requirement: PATCH operations should define a 200 OK response for successful
      partial updates. Analysis shows PATCH is used in 17.7% of APIs. To fix:
      Ensure `200` is present and non-empty at each matching location. This rule
      is evaluated at the JSONPath `$.paths[*].patch.responses` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
