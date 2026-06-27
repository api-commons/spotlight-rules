---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-valid-schema-example
title: OAS3 Valid Schema Example
severity: info
given: $.components.schemas..[?(@property !== 'properties' && @ && (@ &&
  @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format
  || @.$ref || @.properties || @.items))] | $..content..[?(@property !==
  'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) &&
  (@.enum || @.type || @.format || @.$ref || @.properties || @.items))] |
  $..headers..[?(@property !== 'properties' && @ && (@ && @.example !== void 0
  || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
  @.properties || @.items))] | $..parameters..[?(@property !== 'properties' && @
  && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type ||
  @.format || @.$ref || @.properties || @.items))]
message: "{{error}}"
description: Examples must be valid against their defined schema.
experience:
  - data-modeling
  - documentation
  - reliability
spec:
  - parameters
  - headers
  - media-types
  - schemas
  - components
  - examples
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-valid-schema-example/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-valid-schema-example' (OAS3 Valid Schema Example).
  Requirement: Examples must be valid against their defined schema. This rule is
  evaluated at the JSONPath `$.components.schemas..[?(@property !== 'properties'
  && @ && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum ||
  @.type || @.format || @.$ref || @.properties || @.items))] |
  $..content..[?(@property !== 'properties' && @ && (@ && @.example !== void 0
  || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
  @.properties || @.items))] | $..headers..[?(@property !== 'properties' && @ &&
  (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type ||
  @.format || @.$ref || @.properties || @.items))] | $..parameters..[?(@property
  !== 'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0)
  && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  oas3-valid-schema-example:
    title: OAS3 Valid Schema Example
    reference: https://spotlight-rules.com/spec/rules/openapi/oas3-valid-schema-example/
    description: Examples must be valid against their defined schema.
    message: "{{error}}"
    severity: info
    given:
      - $.components.schemas..[?(@property !== 'properties' && @ && (@ &&
        @.example !== void 0 || @.default !== void 0) && (@.enum || @.type ||
        @.format || @.$ref || @.properties || @.items))]
      - $..content..[?(@property !== 'properties' && @ && (@ && @.example !== void
        0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
        @.properties || @.items))]
      - $..headers..[?(@property !== 'properties' && @ && (@ && @.example !== void
        0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
        @.properties || @.items))]
      - $..parameters..[?(@property !== 'properties' && @ && (@ && @.example !==
        void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref
        || @.properties || @.items))]
    then:
      function: oasExample
      functionOptions:
        schemaField: $
        oasVersion: 3
        type: schema
    tags:
      - format:openapi
      - spec:parameters
      - spec:headers
      - spec:media-types
      - spec:schemas
      - spec:components
      - spec:examples
      - experience:data-modeling
      - experience:documentation
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'oas3-valid-schema-example' (OAS3 Valid Schema Example).
      Requirement: Examples must be valid against their defined schema. This rule
      is evaluated at the JSONPath `$.components.schemas..[?(@property !==
      'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) &&
      (@.enum || @.type || @.format || @.$ref || @.properties || @.items))] |
      $..content..[?(@property !== 'properties' && @ && (@ && @.example !== void 0
      || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
      @.properties || @.items))] | $..headers..[?(@property !== 'properties' && @
      && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type
      || @.format || @.$ref || @.properties || @.items))] |
      $..parameters..[?(@property !== 'properties' && @ && (@ && @.example !==
      void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref
      || @.properties || @.items))]` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
