---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-avoid-integer-id
title: Parameter Avoid Integer ID
severity: info
given: $.paths..parameters[*].[?(@property === "name" && (@ === "id" || @ ===
  "ID" || @ === "Id"))]^.schema
message: Avoid exposing IDs as an integer, UUIDs or other interoperable strings
  are preferred.
description: Avoid exposing IDs as an integer, UUIDs or other interoperable
  strings are preferred.
experience:
  - security
  - data-modeling
spec:
  - paths
  - parameters
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-avoid-integer-id/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-avoid-integer-id' (Parameter Avoid Integer ID).
  Requirement: Avoid exposing IDs as an integer, UUIDs or other interoperable
  strings are preferred. To fix: Adjust the targeted value so it conforms to the
  schema this rule requires. This rule is evaluated at the JSONPath
  `$.paths..parameters[*].[?(@property === \"name\" && (@ === \"id\" || @ ===
  \"ID\" || @ === \"Id\"))]^.schema` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-avoid-integer-id:
    title: Parameter Avoid Integer ID
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-avoid-integer-id/
    description: Avoid exposing IDs as an integer, UUIDs or other interoperable
      strings are preferred.
    message: Avoid exposing IDs as an integer, UUIDs or other interoperable strings
      are preferred.
    severity: info
    given: $.paths..parameters[*].[?(@property === "name" && (@ === "id" || @ ===
      "ID" || @ === "Id"))]^.schema
    then:
      function: schema
      functionOptions:
        schema:
          type: object
          not:
            properties:
              type:
                const: integer
          properties:
            format:
              const: uuid
    tags:
      - format:openapi
      - spec:paths
      - spec:parameters
      - spec:schemas
      - experience:security
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-avoid-integer-id' (Parameter Avoid Integer ID).
      Requirement: Avoid exposing IDs as an integer, UUIDs or other interoperable
      strings are preferred. To fix: Adjust the targeted value so it conforms to
      the schema this rule requires. This rule is evaluated at the JSONPath
      `$.paths..parameters[*].[?(@property === \"name\" && (@ === \"id\" || @ ===
      \"ID\" || @ === \"Id\"))]^.schema` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
