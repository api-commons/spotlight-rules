---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-array-property-require-max-items
title: Schema Array Property Require Max Items
severity: info
given: $.components.schemas.*.properties[?(@.type=="array")]
message: Schema Array Properties MUST Have Max Items
description: Schema properties that are of the type array should have a max
  items property defined.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
  - components
topic: []
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/schema-array-property-require-max-items/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-array-property-require-max-items' (Schema Array
  Property Require Max Items). Requirement: Schema properties that are of the
  type array should have a max items property defined. To fix: Ensure `maxItems`
  is present and non-empty at each matching location. This rule is evaluated at
  the JSONPath `$.components.schemas.*.properties[?(@.type==\"array\")]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-array-property-require-max-items:
    title: Schema Array Property Require Max Items
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-array-property-require-max-items/
    description: Schema properties that are of the type array should have a max
      items property defined.
    message: Schema Array Properties MUST Have Max Items
    severity: info
    given: $.components.schemas.*.properties[?(@.type=="array")]
    then:
      - field: maxItems
        function: truthy
    tags:
      - owasp:api4
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-array-property-require-max-items' (Schema Array
      Property Require Max Items). Requirement: Schema properties that are of the
      type array should have a max items property defined. To fix: Ensure
      `maxItems` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath
      `$.components.schemas.*.properties[?(@.type==\"array\")]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
