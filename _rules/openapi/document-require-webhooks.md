---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-require-webhooks
title: Document Require Webhooks
severity: info
given: $
message: Missing `webhooks`.
description: openapi document should declare a `webhooks` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-require-webhooks/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-require-webhooks' (Document Require Webhooks).
  Requirement: openapi document should declare a `webhooks` property. To fix:
  Ensure `webhooks` is present and non-empty at each matching location.
  Guidance: Missing `webhooks`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
