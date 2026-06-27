---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-get-document-304-not-modified
title: Response Get Document 304 Not Modified
severity: info
given: $.paths[*][get].responses
message: Operation should document a `304` response.
description: GET operations should document a 304 Not Modified response so
  ETag/Last-Modified conditional requests are handled.
experience:
  - reliability
  - usability
spec:
  - responses
topic:
  - conditional-requests
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-get-document-304-not-modified/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-get-document-304-not-modified' (Response Get
  Document 304 Not Modified). Requirement: GET operations should document a 304
  Not Modified response so ETag/Last-Modified conditional requests are handled.
  To fix: Ensure `304` is present and non-empty at each matching location.
  Guidance: Operation should document a `304` response. This rule is evaluated
  at the JSONPath `$.paths[*][get].responses` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-get-document-304-not-modified:
    title: Response Get Document 304 Not Modified
    reference: https://spotlight-rules.com/spec/rules/openapi/response-get-document-304-not-modified/
    description: GET operations should document a 304 Not Modified response so
      ETag/Last-Modified conditional requests are handled.
    message: Operation should document a `304` response.
    given: $.paths[*][get].responses
    severity: info
    then:
      field: "304"
      function: truthy
    tags:
      - format:openapi
      - spec:responses
      - topic:conditional-requests
      - experience:reliability
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-get-document-304-not-modified' (Response Get
      Document 304 Not Modified). Requirement: GET operations should document a
      304 Not Modified response so ETag/Last-Modified conditional requests are
      handled. To fix: Ensure `304` is present and non-empty at each matching
      location. Guidance: Operation should document a `304` response. This rule is
      evaluated at the JSONPath `$.paths[*][get].responses` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
