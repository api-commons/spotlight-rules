---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-deletedby-property-must-be-string
title: Schema Deletedby Property Must Be String
severity: info
given: $..[?(@property === "deletedBy")].type
message: deletedBy MUST use a data type of 'string'.
description: deletedBy MUST use a data type of 'string'.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-deletedby-property-must-be-string/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-deletedby-property-must-be-string' (Schema Deletedby
  Property Must Be String). Requirement: deletedBy MUST use a data type of
  'string'. To fix: Ensure the targeted value matches the regular expression
  `^string$`; rewrite any value that does not. This rule is evaluated at the
  JSONPath `$..[?(@property === \"deletedBy\")].type` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-deletedby-property-must-be-string:
    title: Schema Deletedby Property Must Be String
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-deletedby-property-must-be-string/
    description: deletedBy MUST use a data type of 'string'.
    message: deletedBy MUST use a data type of 'string'.
    severity: info
    given: $..[?(@property === "deletedBy")].type
    then:
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
      governance rule 'schema-deletedby-property-must-be-string' (Schema Deletedby
      Property Must Be String). Requirement: deletedBy MUST use a data type of
      'string'. To fix: Ensure the targeted value matches the regular expression
      `^string$`; rewrite any value that does not. This rule is evaluated at the
      JSONPath `$..[?(@property === \"deletedBy\")].type` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
