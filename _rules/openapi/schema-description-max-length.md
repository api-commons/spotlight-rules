---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-description-max-length
title: Schema Description Max Length
severity: info
given: $.components.schemas.*
message: Schema Description MUST be Less Than 250 Characters
description: Schema should have a length limit applied, restricting how long
  schema descriptions can be, helping keep them concise and consistent.
experience:
  - documentation
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-description-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-description-max-length' (Schema Description Max
  Length). Requirement: Schema should have a length limit applied, restricting
  how long schema descriptions can be, helping keep them concise and consistent.
  To fix: Ensure the length of `description` is at most 250. This rule is
  evaluated at the JSONPath `$.components.schemas.*` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
