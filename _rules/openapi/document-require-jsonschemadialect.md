---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-require-jsonschemadialect
title: Document Require Jsonschemadialect
severity: info
given: $
message: Missing `jsonSchemaDialect`.
description: openapi document should declare a `jsonSchemaDialect` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-require-jsonschemadialect/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-require-jsonschemadialect' (Document Require
  Jsonschemadialect). Requirement: openapi document should declare a
  `jsonSchemaDialect` property. To fix: Ensure `jsonSchemaDialect` is present
  and non-empty at each matching location. Guidance: Missing
  `jsonSchemaDialect`. Make the smallest change that satisfies the rule, leave
  all unrelated content, key order, comments, and formatting unchanged, and keep
  the document valid OpenAPI. Return only the complete corrected document, with
  no commentary."
builtin: false
---
