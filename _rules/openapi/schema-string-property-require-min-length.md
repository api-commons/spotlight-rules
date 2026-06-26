---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-string-property-require-min-length
title: Schema String Property Require Min Length
severity: info
given: $.components.schemas.*.properties[?(@.type == 'string')]
message: Schema String Properties MUST Have Minimum Length
description: Schema properties that are of the string type have the min length
  applied defining the shape of the property.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-string-property-require-min-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-string-property-require-min-length' (Schema String
  Property Require Min Length). Requirement: Schema properties that are of the
  string type have the min length applied defining the shape of the property. To
  fix: Ensure `minLength` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath
  `$.components.schemas.*.properties[?(@.type == 'string')]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
