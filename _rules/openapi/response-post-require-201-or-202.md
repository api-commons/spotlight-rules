---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-post-require-201-or-202
title: Response Post Require 201 Or 202
severity: info
given: $.paths[*].post.responses
message: All POST methods MUST have a 201 or 202 response.
description: All POST methods MUST have a 201 or 202 response.
experience:
  - consistency
  - error-handling
spec:
  - paths
  - operations
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-post-require-201-or-202/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-post-require-201-or-202' (Response Post Require 201
  Or 202). Requirement: All POST methods MUST have a 201 or 202 response. This
  rule is evaluated at the JSONPath `$.paths[*].post.responses` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-post-require-201-or-202:
    title: Response Post Require 201 Or 202
    reference: https://spotlight-rules.com/spec/rules/openapi/response-post-require-201-or-202/
    description: All POST methods MUST have a 201 or 202 response.
    message: All POST methods MUST have a 201 or 202 response.
    severity: info
    given:
      - $.paths[*].post.responses
    then:
      function: trimble:operation-post-201-202-status-code
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:responses
      - experience:consistency
      - experience:error-handling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-post-require-201-or-202' (Response Post Require
      201 Or 202). Requirement: All POST methods MUST have a 201 or 202 response.
      This rule is evaluated at the JSONPath `$.paths[*].post.responses` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
