---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-camel-case-3
title: Schema Property Camel Case 3
severity: info
given: $.components.schemas[*].properties
message: Schema Properties MUST Use camelCase
description: Schema property names should use camelCase. Analysis of 773 specs
  shows camelCase is the dominant convention at 65% (12958 properties), followed
  by snake_case at 33% (6661 properties).
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-camel-case-3/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-camel-case-3' (Schema Property Camel Case 3).
  Requirement: Schema property names should use camelCase. Analysis of 773 specs
  shows camelCase is the dominant convention at 65% (12958 properties), followed
  by snake_case at 33% (6661 properties). To fix: Ensure the targeted value
  matches the regular expression `^[a-z][a-zA-Z0-9]*$`; rewrite any value that
  does not. This rule is evaluated at the JSONPath
  `$.components.schemas[*].properties` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
