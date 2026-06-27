---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: schema-asyncapi-property-require-description
title: Schema Asyncapi Property Require Description
severity: info
given: $.components.schemas[*].properties[*]
message: Schema property should have a description.
description: Schema properties should be documented with a description.
experience:
  - documentation
spec:
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/schema-asyncapi-property-require-description/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'schema-asyncapi-property-require-description' (Schema
  Asyncapi Property Require Description). Requirement: Schema properties should
  be documented with a description. To fix: Ensure `description` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.components.schemas[*].properties[*]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-asyncapi-property-require-description:
    title: Schema Asyncapi Property Require Description
    reference: https://spotlight-rules.com/spec/rules/asyncapi/schema-asyncapi-property-require-description/
    description: Schema properties should be documented with a description.
    message: Schema property should have a description.
    given: $.components.schemas[*].properties[*]
    severity: info
    then:
      field: description
      function: truthy
    tags:
      - format:asyncapi
      - spec:components
      - experience:documentation
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'schema-asyncapi-property-require-description' (Schema
      Asyncapi Property Require Description). Requirement: Schema properties
      should be documented with a description. To fix: Ensure `description` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.components.schemas[*].properties[*]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      AsyncAPI. Return only the complete corrected document, with no commentary."
---
