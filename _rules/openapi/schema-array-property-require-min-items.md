---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-array-property-require-min-items
title: Schema Array Property Require Min Items
severity: info
given: $.components.schemas.*.properties[?(@.type=="array")]
message: Schema Array Properties MUST Have Min Items
description: Schema properties that are of the type array should have a min
  items property defined.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-array-property-require-min-items/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-array-property-require-min-items' (Schema Array
  Property Require Min Items). Requirement: Schema properties that are of the
  type array should have a min items property defined. To fix: Ensure `minItems`
  is present and non-empty at each matching location. This rule is evaluated at
  the JSONPath `$.components.schemas.*.properties[?(@.type==\"array\")]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-array-property-require-min-items:
    title: Schema Array Property Require Min Items
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-array-property-require-min-items/
    description: Schema properties that are of the type array should have a min
      items property defined.
    message: Schema Array Properties MUST Have Min Items
    severity: info
    given: $.components.schemas.*.properties[?(@.type=="array")]
    then:
      - field: minItems
        function: truthy
    tags:
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-array-property-require-min-items' (Schema Array
      Property Require Min Items). Requirement: Schema properties that are of the
      type array should have a min items property defined. To fix: Ensure
      `minItems` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath
      `$.components.schemas.*.properties[?(@.type==\"array\")]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
