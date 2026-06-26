---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-ref-property-must-be-string
title: Schema Ref Property Must Be String
severity: info
given: $..[?(@property === "ref")].type
message: ref MUST use a data type of 'string'.
description: ref MUST use a data type of 'string'.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-ref-property-must-be-string/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-ref-property-must-be-string' (Schema Ref Property Must
  Be String). Requirement: ref MUST use a data type of 'string'. To fix: Ensure
  the targeted value matches the regular expression `^string$`; rewrite any
  value that does not. This rule is evaluated at the JSONPath `$..[?(@property
  === \"ref\")].type` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
