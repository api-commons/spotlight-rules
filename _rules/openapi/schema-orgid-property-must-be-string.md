---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-orgid-property-must-be-string
title: Schema Orgid Property Must Be String
severity: info
given: $..[?(@property === "orgId")].type
message: orgId MUST use a data type of 'string'.
description: orgId MUST use a data type of 'string'.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-orgid-property-must-be-string/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-orgid-property-must-be-string' (Schema Orgid Property
  Must Be String). Requirement: orgId MUST use a data type of 'string'. To fix:
  Ensure the targeted value matches the regular expression `^string$`; rewrite
  any value that does not. This rule is evaluated at the JSONPath
  `$..[?(@property === \"orgId\")].type` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-orgid-property-must-be-string:
    title: Schema Orgid Property Must Be String
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-orgid-property-must-be-string/
    description: orgId MUST use a data type of 'string'.
    message: orgId MUST use a data type of 'string'.
    severity: info
    given: $..[?(@property === "orgId")].type
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
      governance rule 'schema-orgid-property-must-be-string' (Schema Orgid
      Property Must Be String). Requirement: orgId MUST use a data type of
      'string'. To fix: Ensure the targeted value matches the regular expression
      `^string$`; rewrite any value that does not. This rule is evaluated at the
      JSONPath `$..[?(@property === \"orgId\")].type` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
