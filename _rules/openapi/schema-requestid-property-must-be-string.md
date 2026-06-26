---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-requestid-property-must-be-string
title: Schema Requestid Property Must Be String
severity: info
given: $..[?(@property === "requestId")].type
message: requestId MUST use a data type of 'string'.
description: requestId MUST use a data type of 'string'.
experience:
  - data-modeling
  - consistency
  - observability
spec:
  - schemas
topic:
  - tracing
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-requestid-property-must-be-string/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-requestid-property-must-be-string' (Schema Requestid
  Property Must Be String). Requirement: requestId MUST use a data type of
  'string'. To fix: Ensure the targeted value matches the regular expression
  `^string$`; rewrite any value that does not. This rule is evaluated at the
  JSONPath `$..[?(@property === \"requestId\")].type` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
