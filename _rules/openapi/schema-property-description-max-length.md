---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-description-max-length
title: Schema Property Description Max Length
severity: info
given: $.components.schemas.*.properties[?(@.type == 'string')]
message: Schema Properties Description MUST Have 250 Characters
description: Schema property descriptions should have a length limit applied,
  applying constraints to writing descriptions, and keeping consistent across
  APIs.
experience:
  - documentation
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-description-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-description-max-length' (Schema Property
  Description Max Length). Requirement: Schema property descriptions should have
  a length limit applied, applying constraints to writing descriptions, and
  keeping consistent across APIs. To fix: Ensure the length of `description` is
  at most 250. This rule is evaluated at the JSONPath
  `$.components.schemas.*.properties[?(@.type == 'string')]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
