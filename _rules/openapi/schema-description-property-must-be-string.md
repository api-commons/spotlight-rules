---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-description-property-must-be-string
title: Schema Description Property Must Be String
severity: info
given: $..[?(@property === "description")].type
message: description MUST use a data type of 'string'.
description: description MUST use a data type of 'string'.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-description-property-must-be-string/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-description-property-must-be-string' (Schema
  Description Property Must Be String). Requirement: description MUST use a data
  type of 'string'. To fix: Ensure the targeted value matches the regular
  expression `^string$`; rewrite any value that does not. This rule is evaluated
  at the JSONPath `$..[?(@property === \"description\")].type` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
