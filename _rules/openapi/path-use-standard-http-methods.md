---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-use-standard-http-methods
title: Path Use Standard HTTP Methods
severity: info
given: $.paths[*].*~
message: Operations MUST use only the common HTTP methods as outlined in the
  standards guide, and must be in lower-case.
description: Operations MUST use only the common HTTP methods as outlined in the
  standards guide, and must be in lower-case.
experience:
  - consistency
  - naming
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-use-standard-http-methods/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-use-standard-http-methods' (Path Use Standard HTTP
  Methods). Requirement: Operations MUST use only the common HTTP methods as
  outlined in the standards guide, and must be in lower-case. To fix: Set
  `method` to one of the allowed values: get, post, put, patch, delete, head,
  options. This rule is evaluated at the JSONPath `$.paths[*].*~` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-use-standard-http-methods:
    title: Path Use Standard HTTP Methods
    reference: https://spotlight-rules.com/spec/rules/openapi/path-use-standard-http-methods/
    description: Operations MUST use only the common HTTP methods as outlined in the
      standards guide, and must be in lower-case.
    message: Operations MUST use only the common HTTP methods as outlined in the
      standards guide, and must be in lower-case.
    severity: info
    given: $.paths[*].*~
    then:
      field: method
      function: enumeration
      functionOptions:
        values:
          - get
          - post
          - put
          - patch
          - delete
          - head
          - options
    tags:
      - format:openapi
      - spec:paths
      - experience:consistency
      - experience:naming
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-use-standard-http-methods' (Path Use Standard HTTP
      Methods). Requirement: Operations MUST use only the common HTTP methods as
      outlined in the standards guide, and must be in lower-case. To fix: Set
      `method` to one of the allowed values: get, post, put, patch, delete, head,
      options. This rule is evaluated at the JSONPath `$.paths[*].*~` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
