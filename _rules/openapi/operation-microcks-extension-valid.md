---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-microcks-extension-valid
title: Operation Microcks Extension Valid
severity: info
given: $.paths.*.*.x-microcks-operation |
  $.channels.*.[publish,subscribe].x-microcks-operation |
  $.operations.*.x-microcks-operation
message: x-microcks-operation extension must be valid
description: x-microcks-operation extension must be valid.
experience:
  - governance
  - consistency
spec:
  - channels
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-microcks-extension-valid/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-microcks-extension-valid' (Operation Microcks
  Extension Valid). Requirement: x-microcks-operation extension must be valid.
  To fix: Adjust the targeted value so it conforms to the schema this rule
  requires. This rule is evaluated at the JSONPath
  `$.paths.*.*.x-microcks-operation |
  $.channels.*.[publish,subscribe].x-microcks-operation |
  $.operations.*.x-microcks-operation` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-microcks-extension-valid:
    title: Operation Microcks Extension Valid
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-microcks-extension-valid/
    description: x-microcks-operation extension must be valid.
    message: x-microcks-operation extension must be valid
    severity: info
    given:
      - $.paths.*.*.x-microcks-operation
      - $.channels.*.[publish,subscribe].x-microcks-operation
      - $.operations.*.x-microcks-operation
    then:
      function: schema
      functionOptions:
        schema:
          type: object
          properties:
            delay:
              type: number
              format: int32
            frequency:
              type: number
              format: int32
            dispatcher:
              type: string
            dispatcherRules:
              type: string
            parameterConstraints:
              type: array
              items:
                type: object
                properties:
                  name:
                    type: string
                  in:
                    type: string
                    enum:
                      - path
                      - query
                      - header
                  required:
                    type: boolean
                  recopy:
                    type: boolean
                  mustMatchRegexp:
                    type: string
                required:
                  - name
                  - in
          additionalProperties: false
    formats:
      - oas3
      - aas2
      - aas3
    tags:
      - format:openapi
      - spec:channels
      - spec:paths
      - experience:governance
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-microcks-extension-valid' (Operation Microcks
      Extension Valid). Requirement: x-microcks-operation extension must be valid.
      To fix: Adjust the targeted value so it conforms to the schema this rule
      requires. This rule is evaluated at the JSONPath
      `$.paths.*.*.x-microcks-operation |
      $.channels.*.[publish,subscribe].x-microcks-operation |
      $.operations.*.x-microcks-operation` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
