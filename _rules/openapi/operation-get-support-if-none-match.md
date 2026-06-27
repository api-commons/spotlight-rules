---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-get-support-if-none-match
title: Operation Get Support If None Match
severity: info
given: $.paths[*][get]
message: Operation should accept a `If-None-Match` request header.
description: GET operations should accept an If-None-Match request header to
  enable ETag-based conditional requests (304 responses).
experience:
  - reliability
  - usability
spec:
  - parameters
topic:
  - conditional-requests
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-get-support-if-none-match/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-get-support-if-none-match' (Operation Get Support
  If None Match). Requirement: GET operations should accept an If-None-Match
  request header to enable ETag-based conditional requests (304 responses). To
  fix: Adjust `parameters` so it conforms to the schema this rule requires.
  Guidance: Operation should accept a `If-None-Match` request header. This rule
  is evaluated at the JSONPath `$.paths[*][get]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-get-support-if-none-match:
    title: Operation Get Support If None Match
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-get-support-if-none-match/
    description: GET operations should accept an If-None-Match request header to
      enable ETag-based conditional requests (304 responses).
    message: Operation should accept a `If-None-Match` request header.
    given: $.paths[*][get]
    severity: info
    then:
      field: parameters
      function: schema
      functionOptions:
        schema:
          type: array
          contains:
            type: object
            required:
              - name
            properties:
              name:
                const: If-None-Match
    tags:
      - format:openapi
      - spec:parameters
      - topic:conditional-requests
      - experience:reliability
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-get-support-if-none-match' (Operation Get Support
      If None Match). Requirement: GET operations should accept an If-None-Match
      request header to enable ETag-based conditional requests (304 responses). To
      fix: Adjust `parameters` so it conforms to the schema this rule requires.
      Guidance: Operation should accept a `If-None-Match` request header. This
      rule is evaluated at the JSONPath `$.paths[*][get]` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
