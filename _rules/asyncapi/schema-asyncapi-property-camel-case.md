---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: schema-asyncapi-property-camel-case
title: Schema Asyncapi Property Camel Case
severity: info
given: $.components.schemas[*].properties[*]~
message: Schema property is not camelCase.
description: Schema property names should be camelCase.
experience:
  - naming
  - consistency
spec:
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/schema-asyncapi-property-camel-case/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'schema-asyncapi-property-camel-case' (Schema Asyncapi
  Property Camel Case). Requirement: Schema property names should be camelCase.
  To fix: Ensure the targeted value matches the regular expression
  `^[a-z][a-zA-Z0-9]*$`; rewrite any value that does not. This rule is evaluated
  at the JSONPath `$.components.schemas[*].properties[*]~` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid AsyncAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-asyncapi-property-camel-case:
    title: Schema Asyncapi Property Camel Case
    reference: https://spotlight-rules.com/spec/rules/asyncapi/schema-asyncapi-property-camel-case/
    description: Schema property names should be camelCase.
    message: Schema property is not camelCase.
    given: $.components.schemas[*].properties[*]~
    severity: info
    then:
      function: pattern
      functionOptions:
        match: ^[a-z][a-zA-Z0-9]*$
    tags:
      - format:asyncapi
      - spec:components
      - experience:naming
      - experience:consistency
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'schema-asyncapi-property-camel-case' (Schema Asyncapi
      Property Camel Case). Requirement: Schema property names should be
      camelCase. To fix: Ensure the targeted value matches the regular expression
      `^[a-z][a-zA-Z0-9]*$`; rewrite any value that does not. This rule is
      evaluated at the JSONPath `$.components.schemas[*].properties[*]~` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      AsyncAPI. Return only the complete corrected document, with no commentary."
---
