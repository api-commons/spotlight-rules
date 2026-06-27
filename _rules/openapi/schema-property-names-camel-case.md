---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-names-camel-case
title: Schema Property Names Camel Case
severity: info
given: $.components.schemas.*.properties
message: Schema Property Names MUST Be camelCase.
description: Schema property names are camel case, providing consistent casing
  across all the schema properties used by APIs.
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-names-camel-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-names-camel-case' (Schema Property Names
  Camel Case). Requirement: Schema property names are camel case, providing
  consistent casing across all the schema properties used by APIs. To fix:
  Ensure `@key` does NOT match the regular expression
  `^[A-Z][a-z0-9]*[A-Z0-9][a-z0-9]+[A-Za-z0-9]*$`; rename or rewrite any value
  that does. This rule is evaluated at the JSONPath
  `$.components.schemas.*.properties` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-property-names-camel-case:
    title: Schema Property Names Camel Case
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-names-camel-case/
    description: Schema property names are camel case, providing consistent casing
      across all the schema properties used by APIs.
    message: Schema Property Names MUST Be camelCase.
    severity: info
    given: $.components.schemas.*.properties
    then:
      - field: "@key"
        function: pattern
        functionOptions:
          notMatch: ^[A-Z][a-z0-9]*[A-Z0-9][a-z0-9]+[A-Za-z0-9]*$
    tags:
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-property-names-camel-case' (Schema Property Names
      Camel Case). Requirement: Schema property names are camel case, providing
      consistent casing across all the schema properties used by APIs. To fix:
      Ensure `@key` does NOT match the regular expression
      `^[A-Z][a-z0-9]*[A-Z0-9][a-z0-9]+[A-Za-z0-9]*$`; rename or rewrite any value
      that does. This rule is evaluated at the JSONPath
      `$.components.schemas.*.properties` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
