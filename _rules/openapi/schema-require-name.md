---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-require-name
title: Schema Require Name
severity: info
given: $.components.schemas
message: Schema Names MUST Exist
description: Schema names, keeping the naming of them consistent across APIs,
  standardizing how consumers can use in their applications.
experience:
  - naming
  - data-modeling
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-require-name/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-require-name' (Schema Require Name). Requirement:
  Schema names, keeping the naming of them consistent across APIs, standardizing
  how consumers can use in their applications. To fix: Ensure `@key` is present
  and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.components.schemas` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-require-name:
    title: Schema Require Name
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-require-name/
    description: Schema names, keeping the naming of them consistent across APIs,
      standardizing how consumers can use in their applications.
    message: Schema Names MUST Exist
    severity: info
    given: $.components.schemas
    then:
      field: "@key"
      function: truthy
    tags:
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:naming
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-require-name' (Schema Require Name). Requirement:
      Schema names, keeping the naming of them consistent across APIs,
      standardizing how consumers can use in their applications. To fix: Ensure
      `@key` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath `$.components.schemas` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
