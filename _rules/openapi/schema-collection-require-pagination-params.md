---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-collection-require-pagination-params
title: Schema Collection Require Pagination Params
severity: info
given: $.paths[?(!@property.match(/.*\/\{[^}]+\}\/*.*/))].get
message: Collection GET endpoints SHOULD support pagination using query parameters.
description: Collection GET endpoints SHOULD support pagination using query
  parameters. Offset or cursor based pagination is required.
experience:
  - pagination
  - usability
  - performance
spec:
  - paths
  - operations
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-collection-require-pagination-params/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-collection-require-pagination-params' (Schema
  Collection Require Pagination Params). Requirement: Collection GET endpoints
  SHOULD support pagination using query parameters. Offset or cursor based
  pagination is required. To fix: Adjust `parameters` so it conforms to the
  schema this rule requires. This rule is evaluated at the JSONPath
  `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}\\/*.*/))].get` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-collection-require-pagination-params:
    title: Schema Collection Require Pagination Params
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-collection-require-pagination-params/
    description: Collection GET endpoints SHOULD support pagination using query
      parameters. Offset or cursor based pagination is required.
    message: Collection GET endpoints SHOULD support pagination using query parameters.
    severity: info
    given: $.paths[?(!@property.match(/.*\/\{[^}]+\}\/*.*/))].get
    then:
      - field: parameters
        function: schema
        functionOptions:
          schema:
            type: array
            items:
              type: object
            contains:
              type: object
              properties:
                name:
                  const: limit
                in:
                  const: query
            allOf:
              - anyOf:
                  - contains:
                      type: object
                      properties:
                        name:
                          const: offset
                        in:
                          const: query
                  - contains:
                      type: object
                      properties:
                        name:
                          const: cursor
                        in:
                          const: query
                  - contains:
                      type: object
                      properties:
                        name:
                          const: page
                        in:
                          const: query
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - topic:pagination
      - experience:pagination
      - experience:usability
      - experience:performance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-collection-require-pagination-params' (Schema
      Collection Require Pagination Params). Requirement: Collection GET endpoints
      SHOULD support pagination using query parameters. Offset or cursor based
      pagination is required. To fix: Adjust `parameters` so it conforms to the
      schema this rule requires. This rule is evaluated at the JSONPath
      `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}\\/*.*/))].get` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
