---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-modifiedby-property-must-be-string
title: Schema Modifiedby Property Must Be String
severity: info
given: $..[?(@property === "modifiedBy")].type
message: modifiedBy MUST use a data type of 'string'.
description: modifiedBy MUST use a data type of 'string'.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-modifiedby-property-must-be-string/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-modifiedby-property-must-be-string' (Schema Modifiedby
  Property Must Be String). Requirement: modifiedBy MUST use a data type of
  'string'. To fix: Ensure the targeted value matches the regular expression
  `^string$`; rewrite any value that does not. This rule is evaluated at the
  JSONPath `$..[?(@property === \"modifiedBy\")].type` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-modifiedby-property-must-be-string:
    title: Schema Modifiedby Property Must Be String
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-modifiedby-property-must-be-string/
    description: modifiedBy MUST use a data type of 'string'.
    message: modifiedBy MUST use a data type of 'string'.
    severity: info
    given: $..[?(@property === "modifiedBy")].type
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
      governance rule 'schema-modifiedby-property-must-be-string' (Schema
      Modifiedby Property Must Be String). Requirement: modifiedBy MUST use a data
      type of 'string'. To fix: Ensure the targeted value matches the regular
      expression `^string$`; rewrite any value that does not. This rule is
      evaluated at the JSONPath `$..[?(@property === \"modifiedBy\")].type` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
