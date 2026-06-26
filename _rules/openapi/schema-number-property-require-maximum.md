---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-number-property-require-maximum
title: Schema Number Property Require Maximum
severity: info
given: $.components.schemas.*.properties[?(@.type=="number")]
message: Schema Number Properties MUST Have Maximum
description: Schema properties that are of the type number should have a maximum
  property defined.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
  - components
topic: []
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/schema-number-property-require-maximum/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-number-property-require-maximum' (Schema Number
  Property Require Maximum). Requirement: Schema properties that are of the type
  number should have a maximum property defined. To fix: Ensure `maximum` is
  defined at each matching location. This rule is evaluated at the JSONPath
  `$.components.schemas.*.properties[?(@.type==\"number\")]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
