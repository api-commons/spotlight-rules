---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-string-property-require-max-length
title: Schema String Property Require Max Length
severity: info
given: $.components.schemas.*.properties[?(@.type == 'string')]
message: Schema String Properties MUST Have Maximum Length
description: Schema properties that are of the string type have the max length
  applied defining the shape of the property.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
  - components
topic: []
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/schema-string-property-require-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-string-property-require-max-length' (Schema String
  Property Require Max Length). Requirement: Schema properties that are of the
  string type have the max length applied defining the shape of the property. To
  fix: Ensure `maxLength` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath
  `$.components.schemas.*.properties[?(@.type == 'string')]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
