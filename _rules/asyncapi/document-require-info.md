---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: document-require-info
title: Document Require Info
severity: info
given: $
message: Missing `info`.
description: asyncapi document should declare a `info` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-info/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'document-require-info' (Document Require Info). Requirement:
  asyncapi document should declare a `info` property. To fix: Ensure `info` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
