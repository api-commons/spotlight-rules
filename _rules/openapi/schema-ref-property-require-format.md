---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-ref-property-require-format
title: Schema Ref Property Require Format
severity: info
given: $..properties..[?((@property=== "ref" || @property === "Ref") && @.$ref
  == null && @.allOf == null && @.oneOf == null && @.type != null)]
message: Property with the name 'ref' MUST use a format 'sps-ref'.
description: Property with the name 'ref' MUST use a format 'sps-ref'.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-ref-property-require-format/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-ref-property-require-format' (Schema Ref Property
  Require Format). Requirement: Property with the name 'ref' MUST use a format
  'sps-ref'. To fix: Ensure `format` is present and non-empty at each matching
  location. Also: Ensure `format` matches the regular expression `^sps-ref$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$..properties..[?((@property=== \"ref\" || @property === \"Ref\") && @.$ref
  == null && @.allOf == null && @.oneOf == null && @.type != null)]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-ref-property-require-format:
    title: Schema Ref Property Require Format
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-ref-property-require-format/
    description: Property with the name 'ref' MUST use a format 'sps-ref'.
    message: Property with the name 'ref' MUST use a format 'sps-ref'.
    severity: info
    given: $..properties..[?((@property=== "ref" || @property === "Ref") && @.$ref
      == null && @.allOf == null && @.oneOf == null && @.type != null)]
    then:
      - field: format
        function: truthy
      - field: format
        function: pattern
        functionOptions:
          match: ^sps-ref$
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-ref-property-require-format' (Schema Ref Property
      Require Format). Requirement: Property with the name 'ref' MUST use a format
      'sps-ref'. To fix: Ensure `format` is present and non-empty at each matching
      location. Also: Ensure `format` matches the regular expression `^sps-ref$`;
      rewrite any value that does not. This rule is evaluated at the JSONPath
      `$..properties..[?((@property=== \"ref\" || @property === \"Ref\") && @.$ref
      == null && @.allOf == null && @.oneOf == null && @.type != null)]` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
