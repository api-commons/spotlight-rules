---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-require-description
title: Schema Property Require Description
severity: info
given: $.components.schemas.*.properties[?(@.type == 'string')]
message: Schema Properties MUST Have Description
description: Schema properties should have descriptions that provide a narrative
  of the property contains, and how it can be used.
experience:
  - documentation
  - data-modeling
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-require-description' (Schema Property Require
  Description). Requirement: Schema properties should have descriptions that
  provide a narrative of the property contains, and how it can be used. To fix:
  Ensure `description` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.components.schemas.*.properties[?(@.type
  == 'string')]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-property-require-description:
    title: Schema Property Require Description
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-require-description/
    description: Schema properties should have descriptions that provide a narrative
      of the property contains, and how it can be used.
    message: Schema Properties MUST Have Description
    severity: info
    given: $.components.schemas.*.properties[?(@.type == 'string')]
    then:
      field: description
      function: truthy
    tags:
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:documentation
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-property-require-description' (Schema Property
      Require Description). Requirement: Schema properties should have
      descriptions that provide a narrative of the property contains, and how it
      can be used. To fix: Ensure `description` is present and non-empty at each
      matching location. This rule is evaluated at the JSONPath
      `$.components.schemas.*.properties[?(@.type == 'string')]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
