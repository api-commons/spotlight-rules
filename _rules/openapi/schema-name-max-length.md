---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-name-max-length
title: Schema Name Max Length
severity: info
given: $.components.schemas
message: Schema Names MUST Be Less Than 25 Characters
description: Schema should have a length limit applied keeping the names of
  schema consistent across APIs.
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-name-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-name-max-length' (Schema Name Max Length).
  Requirement: Schema should have a length limit applied keeping the names of
  schema consistent across APIs. To fix: Ensure the length of `@key` is at most
  25. This rule is evaluated at the JSONPath `$.components.schemas` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
