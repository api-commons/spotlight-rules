---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-require-openapi
title: Document Require Openapi
severity: info
given: $
message: Missing `openapi`.
description: openapi document should declare a `openapi` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-require-openapi/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-require-openapi' (Document Require Openapi).
  Requirement: openapi document should declare a `openapi` property. To fix:
  Ensure `openapi` is present and non-empty at each matching location. Guidance:
  Missing `openapi`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
