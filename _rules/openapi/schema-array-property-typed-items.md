---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-array-property-typed-items
title: Schema Array Property Typed Items
severity: info
given: $..*.properties[*]
message: "{{error}}"
description: Array properties must have an items attribute with a type.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-array-property-typed-items/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-array-property-typed-items' (Schema Array Property
  Typed Items). Requirement: Array properties must have an items attribute with
  a type. This rule is evaluated at the JSONPath `$..*.properties[*]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
