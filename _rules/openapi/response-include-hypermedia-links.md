---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-include-hypermedia-links
title: Response Include Hypermedia Links
severity: info
given: $.paths[*][*].responses[*]
message: "{{description}}: {{error}}"
description: The API contract MAY include hypermedia links to represent the
  state of resources and be navigable.
experience:
  - discoverability
  - usability
spec:
  - paths
  - responses
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-include-hypermedia-links/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-include-hypermedia-links' (Response Include
  Hypermedia Links). Requirement: The API contract MAY include hypermedia links
  to represent the state of resources and be navigable. To fix: Ensure `links`
  is present and non-empty at each matching location. This rule is evaluated at
  the JSONPath `$.paths[*][*].responses[*]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-include-hypermedia-links:
    title: Response Include Hypermedia Links
    reference: https://spotlight-rules.com/spec/rules/openapi/response-include-hypermedia-links/
    description: The API contract MAY include hypermedia links to represent the
      state of resources and be navigable.
    message: "{{description}}: {{error}}"
    severity: info
    given: $.paths[*][*].responses[*]
    then:
      field: links
      function: truthy
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - experience:discoverability
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-include-hypermedia-links' (Response Include
      Hypermedia Links). Requirement: The API contract MAY include hypermedia
      links to represent the state of resources and be navigable. To fix: Ensure
      `links` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath `$.paths[*][*].responses[*]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
