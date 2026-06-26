---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: document-require-server
title: Document Require Server
severity: info
given: $
message: Missing `servers`.
description: asyncapi document should declare a `servers` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-server/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'document-require-server' (Document Require Server).
  Requirement: asyncapi document should declare a `servers` property. To fix:
  Ensure `servers` is present and non-empty at each matching location. Guidance:
  Missing `servers`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
