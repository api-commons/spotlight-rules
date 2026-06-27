---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-post-collection-require-paging-object
title: Request Post Collection Require Paging Object
severity: info
given: $.paths[?(!@property.match(/.*\/\{[^}]+\}$/))].post.requestBody.content.application/json.schema.properties.paging
message: POST collection endpoints MUST have a request body schema that includes
  paging parameters.
description: POST collection endpoints MUST have a request body schema that
  includes paging parameters.
experience:
  - pagination
  - data-modeling
  - performance
spec:
  - paths
  - operations
  - request-body
  - media-types
  - schemas
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-post-collection-require-paging-object/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-post-collection-require-paging-object' (Request Post
  Collection Require Paging Object). Requirement: POST collection endpoints MUST
  have a request body schema that includes paging parameters. To fix: Ensure
  `type` matches the regular expression `object`; rewrite any value that does
  not. This rule is evaluated at the JSONPath
  `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}$/))].post.requestBody.content.a\
  pplication/json.schema.properties.paging` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  request-post-collection-require-paging-object:
    title: Request Post Collection Require Paging Object
    reference: https://spotlight-rules.com/spec/rules/openapi/request-post-collection-require-paging-object/
    description: POST collection endpoints MUST have a request body schema that
      includes paging parameters.
    message: POST collection endpoints MUST have a request body schema that includes
      paging parameters.
    severity: info
    given: $.paths[?(!@property.match(/.*\/\{[^}]+\}$/))].post.requestBody.content.application/json.schema.properties.paging
    then:
      field: type
      function: pattern
      functionOptions:
        match: object
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:request-body
      - spec:media-types
      - spec:schemas
      - topic:pagination
      - experience:pagination
      - experience:data-modeling
      - experience:performance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'request-post-collection-require-paging-object' (Request
      Post Collection Require Paging Object). Requirement: POST collection
      endpoints MUST have a request body schema that includes paging parameters.
      To fix: Ensure `type` matches the regular expression `object`; rewrite any
      value that does not. This rule is evaluated at the JSONPath
      `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}$/))].post.requestBody.content\
      .application/json.schema.properties.paging` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
