---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-get-support-if-modified-since
title: Operation Get Support If Modified Since
severity: info
given: $.paths[*][get]
message: Operation should accept a `If-Modified-Since` request header.
description: GET operations should accept an If-Modified-Since request header to
  enable date-based conditional requests.
experience:
  - reliability
  - usability
spec:
  - parameters
topic:
  - conditional-requests
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-get-support-if-modified-since/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-get-support-if-modified-since' (Operation Get
  Support If Modified Since). Requirement: GET operations should accept an
  If-Modified-Since request header to enable date-based conditional requests. To
  fix: Adjust `parameters` so it conforms to the schema this rule requires.
  Guidance: Operation should accept a `If-Modified-Since` request header. This
  rule is evaluated at the JSONPath `$.paths[*][get]` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-get-support-if-modified-since:
    title: Operation Get Support If Modified Since
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-get-support-if-modified-since/
    description: GET operations should accept an If-Modified-Since request header to
      enable date-based conditional requests.
    message: Operation should accept a `If-Modified-Since` request header.
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
                const: If-Modified-Since
    tags:
      - format:openapi
      - spec:parameters
      - topic:conditional-requests
      - experience:reliability
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-get-support-if-modified-since' (Operation Get
      Support If Modified Since). Requirement: GET operations should accept an
      If-Modified-Since request header to enable date-based conditional requests.
      To fix: Adjust `parameters` so it conforms to the schema this rule requires.
      Guidance: Operation should accept a `If-Modified-Since` request header. This
      rule is evaluated at the JSONPath `$.paths[*][get]` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
