---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-object-constrain-additional-property
title: Schema Object Constrain Additional Property
severity: info
given: $.[?(@.type=="object" && @.additionalProperties
  &&  @.additionalProperties!=true &&  @.additionalProperties!=false )]
message: "Objects should not allow additionalProperties. Disable them with
  `additionalProperties: false` or constraint them."
description: "By default, jsonschema allows additionalProperties. This means
  that schema validators can be bypassed using further, unspecified fields.
  While forbidding additionalProperties can create rigidity and hinder the
  evolution of an API - eg making it hard to accept new parameters or fields -
  it is possible that this flexibility can be used to bypass the schema
  validator and force the application to process unwanted information. Disable
  `additionalProperties` with `false` ``` Person: type: object
  additionalProperties: false properties: given_name: type: string pattern:
  [a-zA-Z ]{24} ``` Or constraint them using `maxProperties` ``` Person: type:
  object additionalProperties: type: string pattern: /+39[0-9]{,14}/
  maxProperties: 3 properties: given_name: type: string pattern: [a-zA-Z ]{24}
  ``` - no additionalProperties - constrained additionalProperties."
experience:
  - security
  - data-modeling
spec:
  - schemas
topic: []
owasp:
  - api3
reference: https://spotlight-rules.com/spec/rules/openapi/schema-object-constrain-additional-property/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-object-constrain-additional-property' (Schema Object
  Constrain Additional Property). Requirement: By default, jsonschema allows
  additionalProperties. This means that schema validators can be bypassed using
  further, unspecified fields. While forbidding additionalProperties can create
  rigidity and hinder the evolution of an API - eg making it hard to accept new
  parameters or fields - it is possible that this flexibility can be used to
  bypass the schema validator and force the application to process unwanted
  information. Disable `additionalProperties` with `false` ``` Person: type:
  object additionalProperties: false properties: given_name: type: string
  pattern: [a-zA-Z ]{24} ``` Or constraint them using `maxProperties` ```
  Person: type: object additionalProperties: type: string pattern:
  /+39[0-9]{,14}/ maxProperties: 3 properties: given_name: type: string pattern:
  [a-zA-Z ]{24} ``` - no additionalProperties - constrained
  additionalProperties. To fix: Ensure `maxProperties` is defined at each
  matching location. Guidance: Objects should not allow additionalProperties.
  Disable them with `additionalProperties: false` or constraint them. This rule
  is evaluated at the JSONPath `$.[?(@.type==\"object\" &&
  @.additionalProperties && @.additionalProperties!=true &&
  @.additionalProperties!=false )]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-object-constrain-additional-property:
    title: Schema Object Constrain Additional Property
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-object-constrain-additional-property/
    description: "By default, jsonschema allows additionalProperties. This means
      that schema validators can be bypassed using further, unspecified fields.
      While forbidding additionalProperties can create rigidity and hinder the
      evolution of an API - eg making it hard to accept new parameters or fields -
      it is possible that this flexibility can be used to bypass the schema
      validator and force the application to process unwanted information. Disable
      `additionalProperties` with `false` ``` Person: type: object
      additionalProperties: false properties: given_name: type: string pattern:
      [a-zA-Z ]{24} ``` Or constraint them using `maxProperties` ``` Person: type:
      object additionalProperties: type: string pattern: /+39[0-9]{,14}/
      maxProperties: 3 properties: given_name: type: string pattern: [a-zA-Z ]{24}
      ``` - no additionalProperties - constrained additionalProperties."
    message: "Objects should not allow additionalProperties. Disable them with
      `additionalProperties: false` or constraint them."
    severity: info
    given:
      - $.[?(@.type=="object" && @.additionalProperties
        &&  @.additionalProperties!=true &&  @.additionalProperties!=false )]
    then:
      - field: maxProperties
        function: defined
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:schemas
      - experience:security
      - experience:data-modeling
      - owasp:api3
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-object-constrain-additional-property' (Schema Object
      Constrain Additional Property). Requirement: By default, jsonschema allows
      additionalProperties. This means that schema validators can be bypassed
      using further, unspecified fields. While forbidding additionalProperties can
      create rigidity and hinder the evolution of an API - eg making it hard to
      accept new parameters or fields - it is possible that this flexibility can
      be used to bypass the schema validator and force the application to process
      unwanted information. Disable `additionalProperties` with `false` ```
      Person: type: object additionalProperties: false properties: given_name:
      type: string pattern: [a-zA-Z ]{24} ``` Or constraint them using
      `maxProperties` ``` Person: type: object additionalProperties: type: string
      pattern: /+39[0-9]{,14}/ maxProperties: 3 properties: given_name: type:
      string pattern: [a-zA-Z ]{24} ``` - no additionalProperties - constrained
      additionalProperties. To fix: Ensure `maxProperties` is defined at each
      matching location. Guidance: Objects should not allow additionalProperties.
      Disable them with `additionalProperties: false` or constraint them. This
      rule is evaluated at the JSONPath `$.[?(@.type==\"object\" &&
      @.additionalProperties && @.additionalProperties!=true &&
      @.additionalProperties!=false )]` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
