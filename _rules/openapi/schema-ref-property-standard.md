---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-ref-property-standard
title: Schema Ref Property Standard
severity: info
given: $..[?(@property=== "format" && @ == "sps-ref")]^
message: "{{property}} is not provided or not following required schema values."
description: Properties following 'sps-ref' format MUST use the standardized
  schema - maxLength (255), minLength(7), pattern (includes 'sps'), type
  (string).
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-ref-property-standard/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-ref-property-standard' (Schema Ref Property Standard).
  Requirement: Properties following 'sps-ref' format MUST use the standardized
  schema - maxLength (255), minLength(7), pattern (includes 'sps'), type
  (string). To fix: Adjust the targeted value so it conforms to the schema this
  rule requires. Also: Ensure `pattern` matches the regular expression `sps`;
  rewrite any value that does not. Also: Ensure `type` matches the regular
  expression `^string$`; rewrite any value that does not. This rule is evaluated
  at the JSONPath `$..[?(@property=== \"format\" && @ == \"sps-ref\")]^` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-ref-property-standard:
    title: Schema Ref Property Standard
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-ref-property-standard/
    description: Properties following 'sps-ref' format MUST use the standardized
      schema - maxLength (255), minLength(7), pattern (includes 'sps'), type
      (string).
    message: "{{property}} is not provided or not following required schema values."
    severity: info
    given: $..[?(@property=== "format" && @ == "sps-ref")]^
    then:
      - function: schema
        functionOptions:
          schema:
            type: object
            required:
              - maxLength
              - minLength
              - type
              - pattern
            properties:
              maxLength:
                type: integer
                minimum: 255
                maximum: 255
              minLength:
                type: integer
                minimum: 7
                maximum: 7
              type:
                type: string
              pattern:
                type: string
      - field: pattern
        function: pattern
        functionOptions:
          match: sps
      - field: type
        function: pattern
        functionOptions:
          match: ^string$
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-ref-property-standard' (Schema Ref Property
      Standard). Requirement: Properties following 'sps-ref' format MUST use the
      standardized schema - maxLength (255), minLength(7), pattern (includes
      'sps'), type (string). To fix: Adjust the targeted value so it conforms to
      the schema this rule requires. Also: Ensure `pattern` matches the regular
      expression `sps`; rewrite any value that does not. Also: Ensure `type`
      matches the regular expression `^string$`; rewrite any value that does not.
      This rule is evaluated at the JSONPath `$..[?(@property=== \"format\" && @
      == \"sps-ref\")]^` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
