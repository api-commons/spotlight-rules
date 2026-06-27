---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-no-hybrid-and-root-filtering
title: Parameter No Hybrid And Root Filtering
severity: info
given: $.paths..get.parameters^
message: Hybrid filtering MAY be offered on multiple attributes, but MUST never
  exist if a root "filter" query parameter is present.
description: Hybrid filtering MAY be offered on multiple attributes, but MUST
  never exist if a root "filter" query parameter is present.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-no-hybrid-and-root-filtering/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-no-hybrid-and-root-filtering' (Parameter No Hybrid
  And Root Filtering). Requirement: Hybrid filtering MAY be offered on multiple
  attributes, but MUST never exist if a root \"filter\" query parameter is
  present. To fix: Adjust the targeted value so it conforms to the schema this
  rule requires. This rule is evaluated at the JSONPath
  `$.paths..get.parameters^` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  parameter-no-hybrid-and-root-filtering:
    title: Parameter No Hybrid And Root Filtering
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-no-hybrid-and-root-filtering/
    description: Hybrid filtering MAY be offered on multiple attributes, but MUST
      never exist if a root "filter" query parameter is present.
    message: Hybrid filtering MAY be offered on multiple attributes, but MUST never
      exist if a root "filter" query parameter is present.
    severity: info
    given: $.paths..get.parameters^
    then:
      function: schema
      functionOptions:
        schema:
          type: object
          properties:
            parameters:
              type: array
              items:
                type: object
                properties:
                  name:
                    type: string
                  in:
                    type: string
          allOf:
            - if:
                properties:
                  parameters:
                    type: array
                    contains:
                      type: object
                      properties:
                        name:
                          const: filter
              then:
                not:
                  properties:
                    parameters:
                      type: array
                      contains:
                        type: object
                        properties:
                          name:
                            type: string
                            pattern: \w+Filter
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:parameters
      - experience:consistency
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-no-hybrid-and-root-filtering' (Parameter No
      Hybrid And Root Filtering). Requirement: Hybrid filtering MAY be offered on
      multiple attributes, but MUST never exist if a root \"filter\" query
      parameter is present. To fix: Adjust the targeted value so it conforms to
      the schema this rule requires. This rule is evaluated at the JSONPath
      `$.paths..get.parameters^` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
