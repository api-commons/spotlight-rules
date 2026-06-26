---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-deprecated-property-require-description
title: Schema Deprecated Property Require Description
severity: info
given: $..properties[?(@ && @.deprecated == true)]
message: Deprecated property should describe the deprecation.
description: Deprecated schema properties should have a description explaining
  the deprecation and the replacement field.
experience:
  - versioning
  - documentation
spec:
  - schemas
topic:
  - deprecation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-deprecated-property-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-deprecated-property-require-description' (Schema
  Deprecated Property Require Description). Requirement: Deprecated schema
  properties should have a description explaining the deprecation and the
  replacement field. To fix: Ensure `description` is present and non-empty at
  each matching location. This rule is evaluated at the JSONPath
  `$..properties[?(@ && @.deprecated == true)]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
